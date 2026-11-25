const mongoose = require("mongoose");

const auditLogSchema =
new mongoose.Schema({

  module: String,

  action: String,

  performedBy: String,

  timestamp: {
    type: Date,
    default: Date.now,
  },

});

module.exports =
mongoose.model(
  "AuditLog",
  auditLogSchema
);