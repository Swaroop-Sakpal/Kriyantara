import '../styles/Hero.css';

const Hero = () => {
  const handleScroll = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Animated background grid */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Gradient orbs */}
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Mechanical Engineering Studio — Pune, India
        </div>

        <h1 className="hero-title">
          From Idea to<br />
          <span className="hero-title-accent">Engineered</span>{' '}
          <span className="hero-title-outline">Reality</span>
        </h1>

        <p className="hero-desc">
          Precision-driven CAD, CAE simulation, and product development solutions
          that transform complex engineering challenges into innovative, manufacturable designs.
        </p>

        <div className="hero-actions">
          <a
            href="#contact"
            className="btn-hero-primary"
            onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}
          >
            Start Project
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12,5 19,12 12,19"/>
            </svg>
          </a>
          <a
            href="#about"
            className="btn-hero-secondary"
            onClick={(e) => { e.preventDefault(); handleScroll('#about'); }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polygon points="10,8 16,12 10,16 10,8"/>
            </svg>
            Our Story
          </a>
        </div>

        {/* Stats Row */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">100<span className="stat-accent">%</span></span>
            <span className="stat-label">Design Accuracy</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">5.0<span className="stat-accent">★</span></span>
            <span className="stat-label">Client Rating</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">50<span className="stat-accent">+</span></span>
            <span className="stat-label">Projects Done</span>
          </div>
        </div>
      </div>

      {/* Floating card */}
      <div className="hero-float-card" aria-hidden="true">
        <div className="float-card-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22,12 18,12 15,21 9,3 6,12 2,12"/>
          </svg>
        </div>
        <div>
          <div className="float-card-title">Live Simulation</div>
          <div className="float-card-sub">CAE Analysis Active</div>
        </div>
        <div className="float-card-badge">LIVE</div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
