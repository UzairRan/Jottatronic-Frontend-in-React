import { useState } from 'react';
import { Link } from 'react-router-dom';
import DemoVideo from '../components/DemoVideo';
import '../index.css';

const LandingPage = () => {
  const applications = [
    'Sales', 'Management', 'Quality Control', 'Warehouse',
    'Procurement', 'Secretary', 'Production', 'Accounting',
    'Marketing & PR', 'Logistics', 'R&D'
  ];

  const integrations = [
    'ChatGPT', 'ElevenLabs', 'Excel', 'Google Docs',
    'Salesforce', 'Monday', 'Pipeline', 'Twilio',
    'Google Calendar', 'Outlook', 'Gmail'
  ]; 

  return (
    <div className="landing-container">
      {/* Header */}
      <header className="landing-header">
  <div className="logo-container">
    <div className="logo-octagon">
      <span className="logo-text">JTTC</span>
    </div> 
    <h1>Jottatronic</h1>
  </div>
  <div className="auth-buttons">
    <button className="auth-btn">Sign Up</button>
    <button className="auth-btn">Login</button> 
  </div>
</header> 

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <h2>YOUR AUTOMATIZATION ASSISTANT</h2>
          <h1 className="product-name">Jottotron</h1>
          <button className="play-demo-btn">
            ▶ PLAY DEMO
          </button>
        </section>

        {/* Applications Section */}
        <section className="features-section">
          <h3>Applications & Features</h3>
          <div className="features-grid">
            {applications.map((app, index) => (
              <div key={index} className="feature-card">{app}</div>
            ))}
          </div>
        </section>

        {/* Integrations Section */}
        <section className="features-section integration-section">
          <h3>Integrations</h3>
          <div className="grid-container">
            {integrations.map((integration, index) => (
              <div key={index} className="grid-item">{integration}</div>
            ))}
          </div>
        </section>

        {/* Updated Footer */}
        <footer className="footer">
          <div className="footer-section">
            <h4>Company</h4>
            <div className="legal-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-use">Terms & Conditions</a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>CALL US!</p>
            <p>support@jottatronic.com</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default LandingPage;
 