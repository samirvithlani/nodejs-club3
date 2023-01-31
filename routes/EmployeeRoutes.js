const express = require("express");
const router = express.Router();
const employeeController = require("../controller/EmployeeController");
const Authmiddleware = require("../middleware/AuthMiddleware");
const zodMiddleware = require("../middleware/ZodMiddleware");
//const employeeValidationSchema = require("../util/EmployeeSchemaValidation");
//const auth = require("../middleware/Auth1Middleware");

//router.post('/employee',zodMiddleware.validate(employeeValidationSchema),employeeController.addEmployee)
//router.get('/employee',auth.validate,employeeController.getAllEmployee)

module.exports = router;