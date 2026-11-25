const Employee = require("../models/employee");
const Document = require("../models/Document");
const Task = require("../models/Task");
const Asset = require("../models/Asset");
const BackgroundVerification =
require("../models/BackgroundVerification");

const Compliance =
require("../models/Compliance");
const evaluateCompliance =
async (req, res) => {
  try {

    const employeeId = req.params.id;

    const documents =
      await Document.find({ employeeId });

    const bgv =
      await BackgroundVerification.findOne({
        employeeId,
      });

    const tasks =
      await Task.find({ employeeId });

    const assets =
      await Asset.find({ employeeId });

    const documentsVerified =
      documents.length > 0 &&
      documents.every(
        doc => doc.status === "Verified"
      );

    const bgvCompleted =
      bgv &&
      bgv.status === "Completed";

    const tasksCompleted =
      tasks.length > 0 &&
      tasks.every(
        task => task.status === "Completed"
      );

    const assetsReady =
      assets.length > 0 &&
      assets.every(
        asset => asset.status === "Ready"
      );

    let onboardingStatus =
      "Partially Ready";

    if (
      documentsVerified &&
      bgvCompleted &&
      tasksCompleted &&
      assetsReady
    ) {
      onboardingStatus = "Ready";
    }

    const compliance =
      await Compliance.create({
        employeeId,
        onboardingStatus,
      });

    res.status(200).json({
      message:
        "Compliance evaluated successfully",
      onboardingStatus,
      compliance,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const getCompliance =
async (req, res) => {

  const compliance =
    await Compliance.find();

  res.status(200).json(compliance);

};
module.exports = {
  evaluateCompliance,
  getCompliance,
};