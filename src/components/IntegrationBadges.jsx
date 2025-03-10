export default function IntegrationBadges() {
    const integrations = [
      'ChatGPT', 'ElevenLabs', 'Excel', 'Google Docs',
      'Salesforce', 'Monday', 'Pipeline', 'Twilio',
      'Google Calendar', 'Outlook', 'Gmail'
    ];
  
    return (
      <div className="integrations-grid">
        {integrations.map((name, index) => (
          <div key={index} className="integration-badge">
            <img src={`/icons/${name.toLowerCase()}.png`} alt={name} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    );
  }