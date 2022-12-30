const express = require("express");
const router = express.Router();
const employeeController = require("../controller/EmployeeController");
const Authmiddleware = require("../middleware/AuthMiddleware");

router.post('/employee',employeeController.addEmployee)
router.get('/employee',employeeController.getAllEmployee)

module.exports = router;