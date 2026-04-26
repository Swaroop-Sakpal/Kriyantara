import '../styles/Trust.css';

const Trust = () => {
  return (
    <section className="trust-section">
      <div className="trust-bg-image">
        <img
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1400&q=80"
          alt="Engineering workspace"
          loading="lazy"
        />
        <div className="trust-overlay" />
      </div>

      <div className="container trust-inner">
        {/* Left group */}
        <div className="trust-left">
          <div className="trust-badge-row">
            <div className="trust-big-badge">
              <div className="trust-big-num">100<span>%</span></div>
              <div className="trust-big-label">Design<br />Accuracy</div>
            </div>
            <div className="trust-big-badge trust-big-badge--alt">
              <div className="trust-big-num">5.0<span>★</span></div>
              <div className="trust-big-label">Client<br />Rating</div>
            </div>
          </div>
          <a
            href="#contact"
            className="btn-trust"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Get In Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12,5 19,12 12,19"/>
            </svg>
          </a>
        </div>

        {/* Right group */}
        <div className="trust-right">
          <div className="section-label">
            <div className="label-icon">
              <span /><span /><span /><span />
            </div>
            WHY CHOOSE US
          </div>
          <h2 className="section-title trust-title">
            Industry-Leading<br /><span className="accent">Software Suites</span>
          </h2>
          <p className="trust-desc">
            We leverage the most powerful engineering tools across the mechanical design pipeline —
            from SOLIDWORKS and CATIA for CAD, ANSYS and Abaqus for simulation, to Mastercam for
            advanced CAM programming.
          </p>

          <div className="trust-tools">
            {['SOLIDWORKS', 'ANSYS', 'CATIA', 'Mastercam', 'Abaqus', 'AutoCAD'].map((tool) => (
              <div key={tool} className="trust-tool-pill">{tool}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
