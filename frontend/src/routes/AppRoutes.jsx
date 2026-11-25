import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import Documents from "../pages/Documents";
import Verification from "../pages/Verification";
import TasksAssets from "../pages/TasksAssets";
import Compliance from "../pages/Compliance";
import Notifications from "../pages/Notifications";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/documents" element={<Documents />} />

<Route path="/verification" element={<Verification />} />

<Route path="/tasks-assets" element={<TasksAssets />} />

<Route path="/compliance" element={<Compliance />} />

<Route path="/notifications" element={<Notifications />} />
    </Routes>
  );
}

export default AppRoutes;