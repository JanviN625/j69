import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./Menu/Menu";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import ReportsPage from "./Pages/ReportsPage";
import SummaryPage from "./Pages/SummaryPage";
import ProtectedRoute from "./ProtectedRoute";
import "./App.css";
import Footer from "./Footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <Router>
      <h1>Health Innovations in the Last 6 Months</h1>
      {isLoggedIn && <Menu setIsLoggedIn={setIsLoggedIn} />}
      <Routes>
        <Route
          path="/"
          element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/summary"
          element={
            <ProtectedRoute>
              <SummaryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <ReportsPage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
