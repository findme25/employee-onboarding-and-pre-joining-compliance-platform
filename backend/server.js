require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const onboardingPlanRoutes = require("./routes/onboardingPlanRoutes");
const documentRoutes = require("./routes/documentRoutes");

const app = express();

connectDB();


app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/onboarding-plans", onboardingPlanRoutes);
app.use("/api/documents", documentRoutes);
app.get("/", (req, res) => {
  res.send("Employee Onboarding API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});