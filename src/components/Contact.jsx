import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">

        {/* Left: Info */}
        <div className="contact-info">
          <div className="section-label">
            <div className="label-icon">
              <span /><span /><span /><span />
            </div>
            GET IN TOUCH
          </div>
          <h2 className="section-title contact-title">
            Let's Talk About<br /><span className="accent">Your Project</span>
          </h2>
          <p className="contact-desc">
            Have an engineering challenge or idea you'd like to explore? We'd love to hear from you.
            Fill in the form and we'll respond within 24 hours.
          </p>

          <div className="contact-details">
            <a href="mailto:contact@kriyantra.com" className="contact-detail-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Email Us</div>
                <div className="contact-detail-value">contact@kriyantra.com</div>
              </div>
            </a>

            <a href="tel:+917666554844" className="contact-detail-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Call Us</div>
                <div className="contact-detail-value">+91 7666 554 844</div>
              </div>
            </a>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Our Office</div>
                <div className="contact-detail-value">Pune, Maharashtra, India</div>
              </div>
            </div>

            <div className="contact-detail-item">
              <div className="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
              </div>
              <div>
                <div className="contact-detail-label">Working Hours</div>
                <div className="contact-detail-value">Mon – Fri: 9:00 am – 7:00 pm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="contact-form-wrap">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-name">Your Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Rugved Kulkarni"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="hello@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                placeholder="CAD Design Project / Simulation Study…"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                placeholder="Tell us about your project, goals, and timeline…"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn-submit" id="contact-submit">
              {sent ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                  Message Sent!
                </>
              ) : (
                <>
                  Submit Now
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22,2 15,22 11,13 2,9 22,2" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
