const express = require("express");

const router = express.Router();

const {
  addEmployee,
    getEmployees,
    getEmployeeById,
} = require("../controllers/employeeController");

router.post("/", addEmployee);
router.get("/", getEmployees);
router.get("/:id", getEmployeeById);
module.exports = router;