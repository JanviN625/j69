import './App.css';
import Menu from './Menu';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import ReportsPage from './Pages/ReportsPage';
import SummaryPage from './Pages/SummaryPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/reports" element={<ReportsPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;
