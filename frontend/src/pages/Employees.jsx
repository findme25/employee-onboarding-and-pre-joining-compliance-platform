import { useEffect, useState } from "react";
import api from "../services/api";

function Employees() {
  const [employees, setEmployees] = useState([]);

  const [formData, setFormData] =
    useState({
      employeeId: "",
      fullName: "",
      email: "",
      phone: "",
      designation: "",
      department: "",
    });

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res =
      await api.get("/employees");

    setEmployees(res.data);
  };
  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();

  await api.post(
    "/employees",
    formData
  );

  fetchEmployees();

  setFormData({
    employeeId: "",
    fullName: "",
    email: "",
    phone: "",
    designation: "",
    department: "",
  });
};
const deleteEmployee =
async (id) => {

  await api.delete(
    `/employees/${id}`
  );

  fetchEmployees();

};
return (
  <div>

    <h1>Employees</h1>

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="employeeId"
        placeholder="Employee ID"
        value={formData.employeeId}
        onChange={handleChange}
      />

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <button type="submit">
        Add Employee
      </button>

    </form>

    <hr />

    <table border="1">

      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        {employees.map((emp) => (
          <tr key={emp._id}>
            <td>{emp.employeeId}</td>
            <td>{emp.fullName}</td>
            <td>{emp.email}</td>

            <td>
              <button
                onClick={() =>
                  deleteEmployee(emp._id)
                }
              >
                Delete
              </button>
            </td>

          </tr>
        ))}

      </tbody>

    </table>

  </div>
); 
}
export default Employees;