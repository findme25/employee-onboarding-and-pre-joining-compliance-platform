const Employee = require("../models/employee");
const Document = require("../models/Document");
const Task = require("../models/Task");
const Asset = require("../models/Asset");
const Compliance = require("../models/Compliance");
const getDashboard = async (req, res) => {
  try {

    const totalEmployees =
      await Employee.countDocuments();

    const totalDocuments =
      await Document.countDocuments();

    const totalTasks =
      await Task.countDocuments();

    const totalAssets =
      await Asset.countDocuments();

    const readyEmployees =
      await Compliance.countDocuments({
        onboardingStatus: "Ready",
      });

    res.status(200).json({
      totalEmployees,
      totalDocuments,
      totalTasks,
      totalAssets,
      readyEmployees,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getDashboard };