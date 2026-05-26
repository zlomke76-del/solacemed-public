const principles = [
  "Clinical continuity preservation",
  "Runtime admissibility",
  "Escalation visibility",
  "Authority and scope awareness",
  "Consequence-aware decision support",
  "Human-in-the-loop governance",
];

const layers = [
  {
    title: "Reality Contact",
    text: "Evaluates whether operational state remains grounded in current clinical reality.",
  },
  {
    title: "Runtime Admissibility",
    text: "Determines whether a recommendation remains legitimate under live operating conditions.",
  },
  {
    title: "Consequence Boundary",
    text: "Focuses on the transition from AI-assisted reasoning into real operational consequence.",
  },
  {
    title: "Escalation Integrity",
    text: "Preserves visibility into when human review, refusal, or constrained use is required.",
  },
];

export default function Page() {
  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <div className="brand">SolaceMed.ai</div>
          <a href="https://moralclarity.ai" className="navLink">Moral Clarity AI</a>
        </nav>

        <div className="heroGrid">
          <div>
            <p className="eyebrow">Governed clinical AI infrastructure</p>
            <h1>Healthcare AI needs more than model performance.</h1>
            <p className="lead">
              SolaceMed.ai focuses on whether AI-assisted clinical recommendations remain admissible under changing state, authority, escalation, and operational consequence.
            </p>
            <div className="actions">
              <a href="#principles" className="button primary">View principles</a>
              <a href="#architecture" className="button secondary">Explore architecture</a>
            </div>
          </div>

          <div className="panel">
            <p className="panelTitle">Core question</p>
            <p className="quote">
              Under current clinical, operational, and authority conditions, should this AI-assisted recommendation remain admissible for use?
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="principles">
        <p className="eyebrow">Operational focus</p>
        <h2>Built around clinical consequence, not generic automation.</h2>
        <div className="cards">
          {principles.map((item) => (
            <div className="card" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section split" id="architecture">
        <div>
          <p className="eyebrow">Architecture boundary</p>
          <h2>AI proposes. Governance determines admissibility.</h2>
          <p>
            SolaceMed.ai treats healthcare AI as an operational participant inside care delivery, not simply a software feature. The surrounding topology matters: patient context, authority, escalation, documentation pressure, and continuity under overload.
          </p>
        </div>
        <div className="stack">
          {layers.map((layer) => (
            <div className="stackItem" key={layer.title}>
              <strong>{layer.title}</strong>
              <span>{layer.text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section philosophy">
        <h2>Clinical AI governance cannot be model-centric alone.</h2>
        <p>
          Once AI participates in escalation paths, workflow prioritization, operational coordination, or recommendation loops, the system becomes part of the consequence topology itself.
        </p>
      </section>
    </main>
  );
}
