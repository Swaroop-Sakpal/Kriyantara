import '../styles/Services.css';

const services = [
  {
    id: 'cam',
    tag: 'CAM',
    title: 'Computer-Aided Manufacturing',
    desc: 'Precise CNC toolpath programming for complex 3-axis and 5-axis machining. We optimise cycle times, surface finish, and tool life for production-ready programs.',
    image: 'https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=600&q=80',
    alt: 'CNC drilling process',
    features: ['3-Axis & 5-Axis Toolpaths', 'Post-Processor Customisation', 'Simulation & Verification'],
  },
  {
    id: 'cae',
    tag: 'CAE',
    title: 'CAE Simulation',
    desc: 'Finite Element Analysis (FEA) and Computational Fluid Dynamics (CFD) to validate designs under real-world loading conditions — before a single prototype is built.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80',
    alt: 'CAE software simulation',
    features: ['FEA Structural Analysis', 'CFD Flow Simulation', 'Thermal & Fatigue Studies'],
  },
  {
    id: 'precision',
    tag: 'PRECISION',
    title: 'Precision Engineering',
    desc: 'High-accuracy mechanical design with tight tolerances, GD&T specifications, and DFM considerations, ensuring your parts are manufacturable from day one.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    alt: 'Precision mechanical parts',
    features: ['GD&T Tolerancing', 'Design for Manufacturing', 'Assembly Analysis'],
  },
  {
    id: 'simulation',
    tag: 'SIMULATION',
    title: 'Advanced Simulation',
    desc: 'Multi-physics simulation including impact analysis, vibration studies, and non-linear material behaviour — delivering confidence in performance before production.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    alt: '3D printing and simulation',
    features: ['Multi-Physics Analysis', 'Vibration & Modal Studies', 'Non-Linear Simulation'],
  },
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Header */}
        <div className="services-header">
          <div className="section-label">
            <div className="label-icon">
              <span /><span /><span /><span />
            </div>
            WHAT WE DO
          </div>
          <h2 className="section-title">
            Our Core <span className="accent">Services</span>
          </h2>
          <p className="services-subtitle">
            End-to-end mechanical engineering expertise — from concept sketches to simulation-validated,
            production-ready designs.
          </p>
        </div>

        {/* Grid */}
        <div className="services-grid">
          {services.map((svc) => (
            <div key={svc.id} className="service-card">
              <div className="service-card-img">
                <img src={svc.image} alt={svc.alt} loading="lazy" />
                <div className="service-tag">{svc.tag}</div>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">{svc.title}</h3>
                <p className="service-card-desc">{svc.desc}</p>
                <ul className="service-features">
                  {svc.features.map((f) => (
                    <li key={f}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="service-link"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                >
                  Get a Quote
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12,5 19,12 12,19"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
