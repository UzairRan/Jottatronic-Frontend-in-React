// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard';
import AgentPage from './pages/AgentPage';
import PhonePage from './pages/PhonePage';
import AutomationPage from './pages/AutomationPage';
import HistoryPage from './pages/HistoryPage';
import SettingsPage from './pages/SettingsPage';
import LegalPage from './pages/LegalPage';
import CMSManager from './components/CMSManager';

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page Route */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="agent/*" element={<AgentPage />} />
          <Route path="phone/*" element={<PhonePage />} />
          <Route path="automation/*" element={<AutomationPage />} />
          <Route path="history/*" element={<HistoryPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="cms" element={<CMSManager />} />
        </Route>
        
        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<LegalPage type="privacy" />} />
        <Route path="/terms-of-use" element={<LegalPage type="terms" />} />
      </Routes>
    </Router>
  );
}

export default App;
