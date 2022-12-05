const employeeSchema = require('../model/EmployeeSchema');

module.exports.addEmployee = (req,res)=>{

    //created object of model
    const employee = new employeeSchema(req.body)
    employee.save((err,data)=>{
        if(err){

            res.status(500).json({
                message:"Error Occured",
            })
        }
        else{
            res.status(201).json({
                message:"Employee Added Successfully",
                data:data
            })
        }

    })

}
module.exports.getAllEmployee = (req,res)=>{

    employeeSchema.find().populate('department').exec((err,data)=>{
        if(err){
            res.status(500).json({
                message:"Error Occured",
                error:err
            })
        }
        else{
            res.status(200).json({
                message:"Employee Fetched Successfully",
                data:data
            })
        }
    })

    //fb.emplyeeSchama.find()
    // employeeSchema.find((err,data)=>{
    //     if(err){
    //         res.status(500).json({
    //             message:"Error Occured",
    //             error:err
    //         })
    //     }
    //     else{
    //         res.status(200).json({
    //             message:"Employee Details",
    //             data:data
    //         })
    //     }
    // })

}