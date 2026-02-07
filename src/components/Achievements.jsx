const achievements = [
  "Salesforce Certified Developer",
  "Salesforce Certified Associate",
  "Client appreciation from Chevron",
  "Solved 500+ coding problems",
];

export default function Achievements() {
  return (
    <section id="achievements" className="section fade-in">
      <div className="section-header">
        <p className="section-eyebrow">Achievements</p>
        <h2>Professional Highlights</h2>
      </div>
      <div className="card-grid">
        {achievements.map((item) => (
          <div key={item} className="card achievement-card">
            <h3>{item}</h3>
            <p>Recognized for consistent delivery and impact.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
