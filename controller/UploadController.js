const path = require('path');
const multer = require('multer');
const UploadSchema = require('../model/UploadSchema');

// ./
// ../
// ../../ 
// ../../../
//file storage.....
const storage = multer.diskStorage({
    destination:'./uploads/',
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({
    storage:storage,
    limits:{fileSize:9000000},
}).single('profilePic');


exports.uploadFile = (req,res)=>{

        upload(req,res,(err)=>{
            if(err){
                res.json({
                    msg:err
                })
            }
            else{
                if(req.file ==undefined){
                    res.json({
                        msg:'Error: No file selected'
                    })
                }
                else{

                    let abspath = path.resolve('uploads/'+req.file.originalname)
                    console.log(abspath)
                    const upload = new UploadSchema({
                        name: req.file.originalname,
                        path: abspath
                    })
                    upload.save((err,data)=>{
                        if(err){
                            res.status(500).json({
                                msg:'Error: '+err
                            })
                        }
                        else{
                            res.json({
                                msg:'File uploaded successfully',
                                file:`uploads/${req.file.filename}`
                            })
                        }
                    })


                    // res.json({
                    //     msg:'File uploaded successfully',
                    //     file:`uploads/${req.file.filename}`
                    // })
                }
            }
        })


}