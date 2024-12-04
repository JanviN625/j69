import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Menu({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Clear token from storage
    setIsLoggedIn(false); // Update login state
    navigate("/"); // Redirect to login page
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/summary">Summary</Link>
        </li>
        <li>
          <Link to="/reports">Reports</Link>
        </li>
        <li>
          <button onClick={handleLogout}>Log Out</button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;