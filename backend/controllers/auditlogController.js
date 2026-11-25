const AuditLog = require("../models/Auditlog");

// Create Log
const createAuditLog = async (req, res) => {
  try {
    const log = await AuditLog.create(req.body);

    res.status(201).json({
      message: "Audit log created",
      log,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Logs
const getAuditLogs = async (req, res) => {
  try {
    const logs = await AuditLog.find();

    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createAuditLog,
  getAuditLogs,
};