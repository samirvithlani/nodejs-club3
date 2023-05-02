const express = require('express');
const router = express.Router();
const ExcelUploadController = require('../controller/ExcelUploadController');
router.post('/upload', ExcelUploadController.readDataFromExcel);
module.exports = router;