export default function Contact() {
  return (
    <section id="contact" className="section reveal">
      <div className="section-header">
        <p className="section-eyebrow">Contact</p>
        <h2>
          <span className="section-icon" aria-hidden="true">
            ✉️
          </span>
          Let’s Connect
        </h2>
      </div>
      <div className="contact-grid">
        <div className="card contact-card">
          <h3>Reach Out Directly</h3>
          <p>
            <span className="inline-icon" aria-hidden="true">
              📧
            </span>
            gauriphushyamithra@gmail.com
          </p>
          <p>
            <span className="inline-icon" aria-hidden="true">
              📞
            </span>
            +91 9618358698
          </p>
          <p>
            Open to global enterprise Salesforce roles and complex integration
            programs.
          </p>
        </div>
        <form className="card contact-form">
          <label>
            Full Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email Address
            <input type="email" name="email" placeholder="you@email.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" placeholder="How can I help?" />
          </label>
          <button className="btn primary" type="button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
