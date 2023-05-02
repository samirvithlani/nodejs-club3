const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require("./routes/ProductRoutes");
const departmentRoutes = require("./routes/DepartmentRoutes");
const employeeRoutes = require("./routes/EmployeeRoutes");
const cartRoutes = require("./routes/CartRoutes");
const uploadRoutes = require("./routes/UploadRoutes");
const roleRoutes = require("./routes/RoleRoutes");
const timeTableRoutes = require("./routes/TimeTableRoutes");
const excelRoutes = require("./routes/ExcelRoutes");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();
app.use(cors());
app.use('/product',productRoutes);
app.use('/dept',departmentRoutes);
app.use('/emp',employeeRoutes)
app.use('/cart',cartRoutes)
app.use('/upload',uploadRoutes)
app.use('/role',roleRoutes)
app.use('/timeTable',timeTableRoutes)
app.use('/excel',excelRoutes)



///create server using exress
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});


mongoose.connect("mongodb+srv://samir:samir@cluster0.key63fx.mongodb.net/nodeclub3?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  },(err)=>{
    if(err){
      console.log(err);
    }else{
      console.log("Connected to database");
    }
  })
//mongo db connectivty

