import '../index.css';

export default function AutomationPage() {
  const steps = [
    { label: "ElevenLabs", percentage: 75 },
    { label: "ChatGPT", percentage: 65 },
    { label: "Twilio", percentage: 82 }
  ];

  return (
    <div className="automation-grid">
      {/* Telemetry Gauges for each automation step */}
      <div className="telemetry-column">
        {steps.map((step, index) => (
          <TelemetryGauge key={index} percentage={step.percentage} label={step.label} />
        ))}
      </div>

      <div className="workflow-diagram">
        {/* Left Section */}
        <div className="node-column">
          <div className="node-group">
            <div className="node source-node">Hide Source?</div>
            <div className="connector vertical"></div>
            <div className="node service-node">ElevenLabs</div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="node-column">
          <div className="node-group">
            <div className="node agent-node">AI Agent</div>
            <div className="connector horizontal"></div>
            <div className="node-group">
              <div className="node service-node">ChatGPT</div>
              <div className="node service-node">Gmail</div>
              <div className="node service-node">Twilio</div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="node-column">
          <div className="node-group">
            <div className="node service-node">Calendar</div>
            <div className="node service-node">Google Files</div>
            <div className="node service-node">Webhooks</div>
          </div>
        </div>
      </div>
    </div>
  );
}
