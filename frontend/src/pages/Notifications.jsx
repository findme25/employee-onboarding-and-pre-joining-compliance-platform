import { useEffect, useState } from "react";
import api from "../services/api";

function Notifications() {
  const [notifications, setNotifications] =
    useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    const res =
      await api.get("/notifications");

    setNotifications(res.data);
  };

  return (
    <div>
      <h1>Notifications</h1>

      {notifications.map((notification) => (
        <div key={notification._id}>
          <p>{notification.message}</p>

          <p>
            Status:
            {notification.status}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Notifications;