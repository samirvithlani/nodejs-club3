const employeeSchema = require('../model/EmployeeSchema');
const encrypt = require('../util/Encrypt');
const mailer = require('../util/mailer');

module.exports.addEmployee = async(req,res)=>{

    //created object of model

    let hash = await encrypt.hashPassword(req.body.password)
    
    
    

    var empData = {
        name:req.body.name,
        email:req.body.email,
        department:req.body.department,
        password:hash
    }

    console.log("empData",empData)

    const employee = new employeeSchema(empData)
    employee.save((err,data)=>{
        if(err){
            res.status(500).json({
                message:err
            })
        }
        else{
            mailer.sendMail(data.email)
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