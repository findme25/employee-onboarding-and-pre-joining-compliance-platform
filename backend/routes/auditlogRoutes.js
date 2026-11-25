const express = require("express");

const router = express.Router();

const {
  createAuditLog,
  getAuditLogs,
} = require("../controllers/auditlogController");

router.post("/", createAuditLog);

router.get("/", getAuditLogs);

module.exports = router;