const express = require("express");

const router = express.Router();
const departmentController = require("../controller/DepartmentController");
router.post('/department',departmentController.addDepartment)
module.exports = router;