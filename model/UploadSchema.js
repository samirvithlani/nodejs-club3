const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UploadSchema = new Schema({
    name: {
        type: String,
    },
    path:{
        type:String
    }
})
module.exports = mongoose.model("Upload", UploadSchema);