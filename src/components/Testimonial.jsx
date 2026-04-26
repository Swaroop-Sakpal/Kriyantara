import '../styles/Testimonial.css';

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Product Manager, AutoFlow Industries',
    avatar: 'AM',
    rating: 5,
    text: 'KRIYANTRA delivered an outstanding FEA study for our hydraulic actuator assembly. The simulation accuracy was spot-on — stress concentrations they flagged in the model were confirmed during physical testing. Saved us weeks of rework.',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-Founder, NovaTech Robotics',
    avatar: 'PS',
    rating: 5,
    text: 'The CAD models we received were meticulously detailed with complete GD&T and DFM notes. Our manufacturing partner was impressed — zero ambiguity in the drawings. Rugved clearly understands both design and production realities.',
  },
  {
    name: 'Vikram Nair',
    role: 'Senior Engineer, Bharat Precision Works',
    avatar: 'VN',
    rating: 5,
    text: 'We needed 5-axis CAM programs for a complex aerospace bracket on a tight deadline. KRIYANTRA turned around verified toolpaths within 48 hours. Flawless first-off parts — zero scrap. Will definitely engage again.',
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial" className="testimonial-section">
      <div className="container">
        {/* Header */}
        <div className="testimonial-header">
          <div className="section-label">
            <div className="label-icon">
              <span /><span /><span /><span />
            </div>
            CLIENT FEEDBACK
          </div>
          <h2 className="section-title">
            Trusted by <span className="accent">Engineers</span> &amp; Founders
          </h2>
        </div>

        {/* Cards */}
        <div className="testimonial-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              {/* Stars */}
              <div className="testimonial-stars">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                  </svg>
                ))}
              </div>

              <p className="testimonial-text">"{t.text}"</p>

              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.avatar}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="testimonial-summary">
          <div className="summary-rating">
            <span className="summary-num">5.00</span>
            <div className="summary-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                </svg>
              ))}
            </div>
            <span className="summary-label">Average Client Rating</span>
          </div>
          <div className="summary-divider" />
          <p className="summary-desc">
            Every project we take on is driven by a commitment to precision, clarity, and results.
            Our clients come back because we deliver on our promises — every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
