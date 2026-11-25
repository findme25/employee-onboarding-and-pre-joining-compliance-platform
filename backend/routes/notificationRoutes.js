const express = require("express");

const router = express.Router();

const {
  createNotification,
  getNotifications,
  updateNotification,
} = require(
  "../controllers/notificationController"
);

router.post("/", createNotification);

router.get("/", getNotifications);

router.patch(
  "/:id",
  updateNotification
);

module.exports = router;