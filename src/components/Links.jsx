const profileLinks = [
  { label: "Salesforce Trailblazer", href: "https://trailhead.salesforce.com/" },
  { label: "LeetCode", href: "https://leetcode.com/" },
  { label: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/" },
  { label: "CodeChef", href: "https://www.codechef.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
];

export default function Links() {
  return (
    <section id="profiles" className="section fade-in">
      <div className="section-header">
        <p className="section-eyebrow">Profiles</p>
        <h2>Professional Links</h2>
      </div>
      <div className="card-grid">
        {profileLinks.map((link) => (
          <a
            key={link.label}
            className="card profile-card"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <span className="profile-icon">↗</span>
            <div>
              <h3>{link.label}</h3>
              <p>Open profile</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
