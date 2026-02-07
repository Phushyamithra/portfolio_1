const profileLinks = [
  {
    label: "Salesforce Trailblazer",
    href: "https://trailhead.salesforce.com/",
    icon: "☁️",
  },
  { label: "LeetCode", href: "https://leetcode.com/", icon: "leetcode" },
  {
    label: "GeeksforGeeks",
    href: "https://www.geeksforgeeks.org/",
    icon: "gfg",
  },
  { label: "CodeChef", href: "https://www.codechef.com/", icon: "🍽️" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
];

const iconMap = {
  leetcode: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14.8 3.5c-.5-.5-1.3-.5-1.8 0L7.7 8.8c-.2.2-.3.5-.3.8s.1.6.3.8l5.3 5.3c.5.5 1.3.5 1.8 0s.5-1.3 0-1.8l-4.5-4.5 4.5-4.5c.5-.5.5-1.3 0-1.8z"
        fill="currentColor"
      />
      <path
        d="M20 13.2h-7.2c-.7 0-1.2.6-1.2 1.2 0 .7.6 1.2 1.2 1.2H20c.7 0 1.2-.6 1.2-1.2 0-.7-.6-1.2-1.2-1.2z"
        fill="currentColor"
      />
    </svg>
  ),
  gfg: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3.5C7.3 3.5 3.5 7.3 3.5 12S7.3 20.5 12 20.5c3.7 0 6.9-2.4 8-5.7h-5.2v-2.2h7.8c.1.4.1.9.1 1.3 0 5-4.1 9.1-9.1 9.1S3 18.9 3 13.9 7.1 4.8 12.1 4.8c2.4 0 4.7.9 6.4 2.6l-1.7 1.7C15.4 7.7 13.8 7 12.1 7c-3.8 0-6.9 3.1-6.9 6.9s3.1 6.9 6.9 6.9c3 0 5.6-2 6.5-4.7h-6.5V10h9.2V12c0 .5-.1 1-.2 1.5"
        fill="currentColor"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5.3 8.5H2.6v12.9h2.7V8.5zM3.9 3.5C3 3.5 2.3 4.2 2.3 5.1s.7 1.6 1.6 1.6 1.6-.7 1.6-1.6-.7-1.6-1.6-1.6zM21.5 13.1c0-2.7-1.4-4-3.3-4-1.5 0-2.2.8-2.6 1.4V8.5h-2.7c0 1.3 0 12.9 0 12.9h2.7v-7.2c0-.4 0-.7.1-1 .3-.7.9-1.5 2-1.5 1.4 0 2 1.1 2 2.7v7h2.7v-7.3z"
        fill="currentColor"
      />
    </svg>
  ),
};

export default function Links() {
  return (
    <section id="profiles" className="section reveal">
      <div className="section-header">
        <p className="section-eyebrow">Profiles</p>
        <h2>
          <span className="section-icon" aria-hidden="true">
            🔗
          </span>
          Professional Links
        </h2>
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
            <span className="profile-icon" aria-hidden="true">
              {iconMap[link.icon] ?? link.icon}
            </span>
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
