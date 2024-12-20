import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Menu.css";

function Menu({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/summary">Summary</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      </ul>
      <button onClick={handleLogout}>Log Out</button>
    </nav>
  );
}

export default Menu;
