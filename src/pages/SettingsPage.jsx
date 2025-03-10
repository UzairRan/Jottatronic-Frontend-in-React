import '../index.css';

export default function SettingsPage() {
  return (
    <div className="settings-grid">
      <div className="sidebar-section">
        <h2>Settings</h2>
        <div className="settings-menu">
          <button className="menu-item">Account</button>
          <button className="menu-item">Integrations</button>
          <button className="menu-item">Billing</button>
        </div>
      </div>
      
      <div className="main-section">
        <div className="settings-content">
          <h3>Account Settings</h3>
          <div className="settings-form">
            <label>Email</label>
            <input type="email" />
            <label>Password</label>
            <input type="password" />
            <button className="save-btn">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
} 