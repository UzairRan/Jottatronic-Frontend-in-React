import '../index.css';

export default function PhonePage() {
  return (
    <div className="phone-grid">
      <div className="sidebar-section">
        <h2>Phone System</h2>
        <div className="number-pad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => (
            <button key={num} className="number-btn">{num}</button>
          ))}
          <button className="call-button">CALL</button>
        </div>
      </div>
      
      <div className="main-section">
        <div className="agent-introduction">
          <h3>Agent Introduction</h3>
          <textarea 
            placeholder="Enter your agent introduction prompt..."
            className="prompt-input"
          />
          <button className="connect-button">
            Connect Automation
          </button>
        </div>
      </div>
    </div>
  );
} 