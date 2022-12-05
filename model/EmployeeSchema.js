const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = Schema({
    name:{
        type:String,
        required:true},
    email:{
        type:String,
        required:true,
        unique:true
    },
    department:{
        type:Schema.Types.ObjectId,
        ref:'Department'
    }
})
//mongoose.model('Employee',employeeSchema);
//module.exports = employeeSchema
module.exports = mongoose.model('Employee12',employeeSchema);