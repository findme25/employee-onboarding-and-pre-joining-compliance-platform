import { useEffect, useState } from "react";
import api from "../services/api";

function Compliance() {
  const [compliance, setCompliance] =
    useState([]);

  useEffect(() => {
    fetchCompliance();
  }, []);

  const fetchCompliance = async () => {
    const res =
      await api.get("/compliance");

    setCompliance(res.data);
  };

  return (
    <div>
      <h1>Compliance Status</h1>

      {compliance.map((item) => (
        <div key={item._id}>
          <p>
            Employee:
            {item.employeeId}
          </p>

          <p>
            Status:
            {item.onboardingStatus}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Compliance;