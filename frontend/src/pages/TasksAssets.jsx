import { useEffect, useState } from "react";
import api from "../services/api";

function TasksAssets() {
  const [tasks, setTasks] = useState([]);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetchTasks();
    fetchAssets();
  }, []);

  const fetchTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const fetchAssets = async () => {
    const res = await api.get("/assets");
    setAssets(res.data);
  };

  return (
    <div>
      <h1>Tasks</h1>

      {tasks.map((task) => (
        <div key={task._id}>
          {task.taskName} -
          {task.status}
        </div>
      ))}

      <hr />

      <h1>Assets</h1>

      {assets.map((asset) => (
        <div key={asset._id}>
          {asset.assetType} -
          {asset.status}
        </div>
      ))}
    </div>
  );
}

export default TasksAssets;