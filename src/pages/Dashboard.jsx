// src/pages/Dashboard.jsx
export default function Dashboard() {
  return (
    <div className="dashboard-content">
      <h1>Dashboard Content</h1>
      <p>Visible Content Test</p>
      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ background: "white", padding: "20px", borderRadius: "5px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
          <h3>API Usage</h3>
          <p>1,234 calls</p>
        </div>
        <div style={{ background: "white", padding: "20px", borderRadius: "5px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
          <h3>Active Agents</h3>
          <p>3</p>
        </div>
        <div style={{ background: "white", padding: "20px", borderRadius: "5px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
          <h3>Subscription Status</h3>
          <p style={{ color: "green" }}>Premium</p>
        </div>
      </div>
    </div>
  );
}
