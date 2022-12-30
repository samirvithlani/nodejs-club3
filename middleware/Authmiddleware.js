
const RoleSchema = require('../model/RoleSchema');
const auth = ()=> (req, res, next) => {

    let obj = req.headers.auth

    // if(obj){}


    RoleSchema.findOne({_id:obj},(err,data)=>{
        if(err){
            return res.status(500).json({
                status: "error",
                message: err.message
            })
        }
        else{
            if(data.name=="HR" || data.name=="DEV"){
                console.log(data)
                return next()
            }
            else{
                return res.status(401).json({
                    status: "error",
                    message: "You are not authorized to access this route"
                })
            }
        }
    })




        // try{
        //     if(obj==="ADMIN"){
        //         return next()
        //     }
        //     else{
        //         throw new Error("You are not authorized to access this route")
        //     }
        // }
        // catch(err){

        //     return res.status(401).json({
        //         status: "error",
        //         message: err.message
        //     })
        // }

}
module.exports = {auth}