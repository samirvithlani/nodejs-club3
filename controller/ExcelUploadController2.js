const xlsx = require("xlsx");
const path = require("path");
const multer = require("multer");
const ExcelSchema = require("../model/ExcelSchema");


const storage = multer.diskStorage({
    destination: "./uploads/",
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({
    storage: storage,
    limits: { fileSize: 9000000 },
  }).single("file");
  
  

const uploadDataAndSave = async (req, res) => {

    upload(req, res, async(err) => {
        if (err) {
          res.json({
            msg: err,
          });
        } else {
          if (req.file == undefined) {
            res.json({
              msg: "Error: No file selected",
            });
          } else {
            console.log(req.body.name);
            var data1 = await readDataFromExcel1(req.file.path);
            console.log(data1);
            ExcelSchema.insertMany(data1, (err, result) => {
              if (err) {
                res.status(400).json({ message: "Something went wrong" });
              } else {
                let abspath = path.resolve("uploads/" + req.file.originalname);
                console.log(abspath);
                const upload = new UploadSchema({
                  name: req.file.originalname,
                  path: abspath,
                });
                upload.save((err, data) => {
                  if (err) {
                    res.status(500).json({
                      msg: "Error: " + err,
                    });
                  } else {
                    //google drive...
                    res.json({
                      msg: "File uploaded successfully",
                      file: `uploads/${req.file.filename}`,
                    });
                  }
                });
              }
            });
          }
        }
      });


}

const readDataFromExcel1 = async (file1) => {

    const file = xlsx.readFile(file1);
    var data = [];
    const sheets = file.SheetNames;

    for(let i =0;i<sheets.length;i++){

        const temp = xlsx.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
        temp.forEach((res)=>{
            data.push(res);
        })
    }
    return data;

}
