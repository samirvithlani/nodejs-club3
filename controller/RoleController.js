const RoleSchema = require('../model/RoleSchema');

exports.create = (req, res) => {
    
    const role = new RoleSchema(req.body);
    role.save((err,data)=>{
        if(err){
            res.status(500).json({
                status: "error",
                message: err.message
            })
        }
        else{
            res.status(200).json({
                status: "success",
                message: "Role created successfully",
                data: data
            })
        }
    })

}