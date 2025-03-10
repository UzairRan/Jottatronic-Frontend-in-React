// src/components/TelemetryGauge.jsx
export default function TelemetryGauge({ percentage, label }) {
    return (
      <div className="gauge-container">
        <div className="gauge" style={{ '--percentage': `${percentage}%` }}>
          <div className="gauge-fill"></div>
        </div>
        <span className="gauge-label">{label}</span>
      </div>
    );
  } 