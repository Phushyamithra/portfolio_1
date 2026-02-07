const skillBlocks = [
  {
    title: "Languages",
    items: ["C++", "Java", "JavaScript", "Apex", "SQL", "HTML", "CSS"],
  },
  {
    title: "Salesforce & Web Technologies",
    items: [
      "Apex",
      "Apex Testing",
      "Lightning Web Components (LWC)",
      "SOQL",
      "Visualforce",
      "ReactJS",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section fade-in">
      <div className="section-header">
        <p className="section-eyebrow">Skills</p>
        <h2>
          <span className="section-icon" aria-hidden="true">
            🧩
          </span>
          Technical Expertise
        </h2>
      </div>
      <div className="card-grid">
        {skillBlocks.map((block) => (
          <div key={block.title} className="card skill-card">
            <h3>{block.title}</h3>
            <div className="tag-list">
              {block.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
