const validate =(schema) =>async(req,res,next)=>{

        try{
            await schema.parseAsync({
                body:req.body,
                query:req.query,
                params:req.params
            });

            return next();

        }catch(err){
           return res.json({
                status:400,
                message:err
            })
        }

}
module.exports = {validate};