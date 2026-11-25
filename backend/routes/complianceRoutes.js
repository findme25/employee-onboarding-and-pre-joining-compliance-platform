const express = require("express");

const router = express.Router();

const {
  evaluateCompliance,
  getCompliance,
} = require(
  "../controllers/complianceController"
);

router.get("/", getCompliance);

router.post(
  "/evaluate/:id",
  evaluateCompliance
);

module.exports = router;