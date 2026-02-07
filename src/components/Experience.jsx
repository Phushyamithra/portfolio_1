const experienceData = [
  {
    company: "Advantech India",
    role: "Salesforce Developer – Pune, India",
    duration: "Oct 2024 – Present",
    highlights: [
      "Built 3-tier Inventory Validation System (“Gap Email”) achieving 99% accuracy.",
      "Designed SAP Alert System using Custom Metadata (60% faster response).",
      "Batch Apex handling 500K+ records with optimized SAP API usage.",
      "Salesforce API integration with Magnolia templating for YouTube & 3D assets.",
      "Optimized global Salesforce Flows (EN, EU, EN-US).",
      "Maintained 90%+ test coverage for REST integrations.",
    ],
  },
  {
    company: "Wipro Technologies",
    role: "Salesforce Developer – Hyderabad, India",
    duration: "Aug 2021 – Mar 2024",
    highlights: [
      "Reduced data creation time to 10 minutes through automation strategies.",
      "Improved performance using Lightning Web Components.",
      "Automated workflows using Apex and Record-Triggered Flows.",
      "Optimized SOQL queries and reporting accuracy.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section fade-in">
      <div className="section-header">
        <p className="section-eyebrow">Experience</p>
        <h2>
          <span className="section-icon" aria-hidden="true">
            💼
          </span>
          Leadership in Enterprise Delivery
        </h2>
      </div>
      <div className="experience-grid">
        {experienceData.map((job) => (
          <article key={job.company} className="card experience-card">
            <div className="experience-header">
              <div>
                <h3>{job.company}</h3>
                <p>{job.role}</p>
              </div>
              <span className="pill">{job.duration}</span>
            </div>
            <ul>
              {job.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
