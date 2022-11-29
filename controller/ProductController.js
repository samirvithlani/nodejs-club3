const productSchema = require("../model/ProductSchema");

exports.addProduct = (req,res)=>{
    
    //req.body
    var product = new productSchema(req.body);
    console.log(product);
    product.save((err,data)=>{
        if(err){

                res.status(501).json({
                    message:"error occured",
                })
        }
        else{
            res.status(201).json({
                message:"product added",
                data:data
            })
        }


    })

}

exports.getAllProducts = (req,res)=>{

        productSchema.find((err,data)=>{
            if(err){
                res.status(501).json({
                    message:"error occured",
                })
            }
            else{
                res.status(200).json({
                    message:"product found",
                    data:data
                })
            }


        })


}

