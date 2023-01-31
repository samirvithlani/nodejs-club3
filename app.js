const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoutes = require("./routes/ProductRoutes");
const departmentRoutes = require("./routes/DepartmentRoutes");
const employeeRoutes = require("./routes/EmployeeRoutes");
const cartRoutes = require("./routes/CartRoutes");
const uploadRoutes = require("./routes/UploadRoutes");
const roleRoutes = require("./routes/RoleRoutes");
const timeTableRoutes = require("./routes/TimeTableRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/product',productRoutes);
app.use('/dept',departmentRoutes);
app.use('/emp',employeeRoutes)
app.use('/cart',cartRoutes)
app.use('/upload',uploadRoutes)
app.use('/role',roleRoutes)
app.use('/timeTable',timeTableRoutes)


///create server using exress
const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});


mongoose.connect("mongodb://127.0.0.1:27017/club3",{
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

