// src/pages/AgentPage.jsx
import { useState } from 'react';
import DemoVideo from '../components/DemoVideo';
import '../index.css';

export default function AgentPage() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="agent-grid">
      <div className="sidebar-section">
        <h2>Agent Dashboard</h2>
        <div className="menu-grid">
          <button className="menu-item">Transcription</button>
          <button className="menu-item">Prompt</button>
          <button className="menu-item">Record Sample</button>
        </div>
      </div>
      
      <div className="main-section">
        <div className="dashboard-card">
          <h3>Agent Configuration</h3>
          <button 
            className="play-demo-btn"
            onClick={() => setShowVideo(true)}
          >
            Play Demo Video
          </button>
          {showVideo && <DemoVideo onClose={() => setShowVideo(false)} />}
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h4>Call History</h4>
            <p>12 recent calls</p>
          </div>
          <div className="stat-card">
            <h4>Automation Logs</h4>
            <p>5 active workflows</p>
          </div>
          <div className="stat-card">
            <h4>Subscription Status</h4>
            <p className="premium-badge">Premium</p>
          </div>
        </div>
      </div>
    </div>
  );
} 