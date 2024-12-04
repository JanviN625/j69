import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import ReportsPage from "./Pages/ReportsPage";
import SummaryPage from "./Pages/SummaryPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Menu setIsLoggedIn={setIsLoggedIn} />
          <Routes>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/summary" element={<SummaryPage />} />
            <Route path="/reports" element={<ReportsPage />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
