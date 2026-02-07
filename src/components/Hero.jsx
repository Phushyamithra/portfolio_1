const metaItems = [
  { label: "Title", value: "Senior Salesforce Developer" },
  { label: "Location", value: "Hyderabad, Telangana" },
];

export default function Hero({ navLinks, mode, themeLabel, onToggleMode }) {
  return (
    <header className="hero" id="top">
      <aside className="hero-sidebar">
        <div className="brand">
          <span className="brand-mark">PM</span>
          <div>
            <p className="brand-title">Phushya Mithra Gauri</p>
            <p className="brand-subtitle">Senior Salesforce Developer</p>
          </div>
        </div>
        <nav className="hero-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="mode-switch" aria-live="polite">
          <span className="mode-label">{themeLabel}</span>
          <button type="button" className="toggle" onClick={onToggleMode}>
            <span className="toggle-track" aria-hidden="true">
              <span className={`toggle-thumb ${mode}`}></span>
            </span>
            <span className="toggle-text">
              Switch to {mode === "light" ? "Dark" : "Light"}
            </span>
          </button>
        </div>
      </aside>

      <div className="hero-main">
        <div className="hero-content">
          <p className="eyebrow">Senior Salesforce Developer</p>
          <h1>
            Phushya Mithra
            <span>Gauri</span>
          </h1>
          <p className="hero-summary">
            Enterprise-focused Salesforce specialist delivering scalable
            automation, integrations, and performance optimization for global
            organizations.
          </p>
          <div className="hero-meta">
            {metaItems.map((item) => (
              <div key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
          <div className="hero-actions">
            <button className="btn primary" type="button">
              Download Resume
            </button>
            <button className="btn ghost" type="button">
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image" aria-hidden="true">
          <img src="/profile-placeholder.svg" alt="" />
        </div>
      </div>
    </header>
  );
}
