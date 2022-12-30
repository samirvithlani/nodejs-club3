const express = require("express");
const router = express.Router();
const RoleController = require("../controller/RoleController");
router.post("/role", RoleController.create);
module.exports = router;