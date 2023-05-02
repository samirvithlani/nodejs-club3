const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExcelSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    id:{
        type: String,
    }

})
module.exports = mongoose.model('Excel', ExcelSchema);