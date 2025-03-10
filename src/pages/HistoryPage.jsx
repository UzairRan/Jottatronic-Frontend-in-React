import '../index.css';

export default function HistoryPage() {
  return (
    <div className="history-grid">
      <div className="sidebar-section">
        <h2>History</h2>
        <div className="history-filters">
          <button className="filter-btn active">Conversations</button>
          <button className="filter-btn">Automation Logs</button>
          <button className="filter-btn">Error Reports</button>
        </div>
      </div>
      
      <div className="main-section">
        <div className="history-list">
          <div className="history-item">
            <div className="call-details">
              <span>2023-12-15 14:30</span>
              <span>+1 234 567 890</span>
              <span>Duration: 5:23</span>
            </div>
            <button className="play-recording">▶</button>
          </div>
          {/* Add more history items */}
        </div>
      </div>
    </div>
  );
} 