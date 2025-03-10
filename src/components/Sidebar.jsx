// Sidebar.jsx
// Sidebar.jsx
import { useState } from 'react';
import { Link } from "react-router-dom";
import TelemetryGauge from './TelemetryGauge';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="logo-container" onClick={() => setIsCollapsed(!isCollapsed)}>
        <div className="logo-octagon">
          <span className="logo-text">JTTC</span>
        </div>
        {!isCollapsed && <h1>Jottatronic</h1>}
      </div>

    

      <nav className="sidebar-nav">
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/dashboard/agent" className="nav-link">AI Agent</Link>
        <Link to="/dashboard/call-logs" className="nav-link">Call Logs</Link>
        <Link to="/dashboard/automation" className="nav-link">Automation</Link>
        <Link to="/dashboard/settings" className="nav-link">Settings</Link>
      </nav>
    </div>
  );
} 