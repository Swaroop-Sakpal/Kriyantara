import '../styles/About.css';

const features = [
  { icon: '⚙️', title: 'Precision Engineering', desc: 'Tight-tolerance design with DFM-compliant CAD models ready for production.' },
  { icon: '🖥️', title: 'Advanced Simulation', desc: 'FEA and CFD analysis to validate structural integrity before physical prototyping.' },
  { icon: '🔧', title: 'CAM Programming', desc: 'CNC toolpath generation optimised for complex geometries and minimal waste.' },
  { icon: '📐', title: 'CAE Simulation', desc: 'End-to-end computer-aided engineering workflows from concept to validation.' },
];

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-inner">

        {/* Left: image stack */}
        <div className="about-visuals">
          <div className="about-img-main">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
              alt="Robotic arm in engineering studio"
              loading="lazy"
            />
          </div>
          <div className="about-img-secondary">
            <img
              src="https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=400&q=80"
              alt="CNC precision parts"
              loading="lazy"
            />
          </div>
          {/* Experience badge */}
          <div className="about-exp-badge">
            <div className="exp-number">5+</div>
            <div className="exp-label">Years of<br />Engineering</div>
          </div>
        </div>

        {/* Right: content */}
        <div className="about-content">
          <div className="section-label">
            <div className="label-icon">
              <span /><span /><span /><span />
            </div>
            OUR DESIGN PHILOSOPHY
          </div>

          <h2 className="section-title about-title">
            About Our<br />Engineering <span className="accent">Studio</span>
          </h2>

          <p className="about-desc">
            Founded by <strong>Rugved Kulkarni</strong>, KRIYANTRA is a specialised studio dedicated
            to mechanical engineering, offering comprehensive CAD, CAE, and product development
            solutions for modern industrial challenges.
          </p>

          <p className="about-desc">
            We blend deep technical expertise with a passion for innovation — delivering designs that
            are not only functional but manufacturable, cost-efficient, and future-ready.
          </p>

          {/* Feature grid */}
          <div className="about-features">
            {features.map((f) => (
              <div key={f.title} className="about-feature">
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="btn-primary about-cta"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Work With Us
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12,5 19,12 12,19"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
