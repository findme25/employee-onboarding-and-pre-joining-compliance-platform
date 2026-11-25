const mongoose = require("mongoose");

const notificationSchema =
new mongoose.Schema({

  employeeId: {
    type:
      mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },

  message: String,

  status: {
    type: String,
    default: "Unread",
  },

}, {
  timestamps: true,
});

module.exports =
mongoose.model(
  "Notification",
  notificationSchema
);