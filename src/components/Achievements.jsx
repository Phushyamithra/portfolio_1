const achievements = [
  {
    title: "Salesforce Certified Developer",
    icon: "✅",
  },
  {
    title: "Salesforce Certified Associate",
    icon: "🎯",
  },
  {
    title: "Client appreciation from Chevron",
    icon: "🤝",
  },
  {
    title: "Solved 500+ coding problems",
    icon: "🧠",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section fade-in">
      <div className="section-header">
        <p className="section-eyebrow">Achievements</p>
        <h2>
          <span className="section-icon" aria-hidden="true">
            🏅
          </span>
          Professional Highlights
        </h2>
      </div>
      <div className="card-grid">
        {achievements.map((item) => (
          <div key={item.title} className="card achievement-card">
            <span className="icon-chip" aria-hidden="true">
              {item.icon}
            </span>
            <div>
              <h3>{item.title}</h3>
              <p>Recognized for consistent delivery and impact.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
