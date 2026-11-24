
const Document = require("../models/Document");

const uploadDocument = async (req, res) => {
  try {
    const document = await Document.create({
      employeeId: req.body.employeeId,
      documentType: req.body.documentType,
      filePath: req.file.path,
    });

    res.status(201).json({
      message: "Document uploaded successfully",
      document,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getDocuments = async (req, res) => {
  try {
    const documents = await Document.find();

    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const verifyDocument = async (req, res) => {
  try {
    const document = await Document.findByIdAndUpdate(
      req.params.id,
      {
        status: "Verified",
        remarks: "Document verified successfully",
      },
      {
        returnDocument: "after",
      }
    );

    res.status(200).json({
      message: "Document verified",
      document,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
const rejectDocument = async (req, res) => {
  try {

    const remarks =
      req.body?.remarks || "Document rejected";

    const document =
      await Document.findByIdAndUpdate(
        req.params.id,
        {
          status: "Rejected",
          remarks,
        },
        {
          returnDocument: "after",
        }
      );

    if (!document) {
      return res.status(404).json({
        message: "Document not found",
      });
    }

    res.status(200).json({
      message: "Document rejected",
      document,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  uploadDocument,
  getDocuments,
  verifyDocument,
  rejectDocument,
};