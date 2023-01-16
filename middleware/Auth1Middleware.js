const validate  =async(req,res,next)=>{

    const obj = req.headers.auth;
    if(obj =="ADMIN"){
        return next();
    }
    else{
        return res.json({
            status:400,
            message:"You are not admin"
        })
    }

}
module.exports = {
    validate
}