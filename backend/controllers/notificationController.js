const Notification =
require("../models/Notification");

// Create Notification
const createNotification =
async (req, res) => {
  try {

    const notification =
      await Notification.create(
        req.body
      );

    res.status(201).json({
      message:
        "Notification created",
      notification,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Notifications
const getNotifications =
async (req, res) => {
  try {

    const notifications =
      await Notification.find();

    res.status(200).json(
      notifications
    );

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Mark Read
const updateNotification =
async (req, res) => {
  try {

    const notification =
      await Notification.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
        },
        {
          returnDocument: "after",
        }
      );

    res.status(200).json({
      message:
        "Notification updated",
      notification,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createNotification,
  getNotifications,
  updateNotification,
};