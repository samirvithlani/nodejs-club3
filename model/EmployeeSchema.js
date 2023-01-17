const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:'Department'
    },
    password:{
        type:String,
        required:true
    }
})
//mongoose.model('Employee',employeeSchema);
//module.exports = employeeSchema
module.exports = mongoose.model('Employee123',employeeSchema);