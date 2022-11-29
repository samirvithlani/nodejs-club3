const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = Schema({

    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    description:{
        type:String,
    },
    qty:{
        type:Number,
    }
})
module.exports = mongoose.model("product",productSchema);