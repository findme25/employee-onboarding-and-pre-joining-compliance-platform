import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        background: "#f4f4f4",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h3>Menu</h3>

      <ul>
        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/employees">
            Employees
          </Link>
        </li>

        <li>
          <Link to="/documents">
            Documents
          </Link>
        </li>

        <li>
          <Link to="/verification">
            Verification
          </Link>
        </li>

        <li>
          <Link to="/tasks-assets">
            Tasks & Assets
          </Link>
        </li>

        <li>
          <Link to="/compliance">
            Compliance
          </Link>
        </li>

        <li>
          <Link to="/notifications">
            Notifications
          </Link>
    
        </li>
        <button
  onClick={() => {
    localStorage.removeItem("token");
    window.location.href = "/";
  }}
>
  Logout
</button>
      </ul>
    </div>
    
  );
}

export default Sidebar;