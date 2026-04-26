import '../styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-top-inner">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <span /><span /><span /><span />
              </div>
              <span className="logo-text">KRIYANTRA</span>
            </div>
            <p className="footer-tagline">
              Precision mechanical engineering studio crafting CAD, CAE, and CAM solutions for modern industrial challenges.
            </p>
            <div className="footer-socials">
              {[
                { label: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z', isFill: true },
                { label: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z', extra: true },
                { label: 'LinkedIn', path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z', isFill: true },
              ].map((s) => (
                <a key={s.label} href="#" className="footer-social" aria-label={s.label}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={s.isFill ? 'currentColor' : 'none'} stroke={s.isFill ? 'none' : 'currentColor'} strokeWidth="2">
                    <path d={s.path}/>
                    {s.extra && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="footer-nav-group">
            <h4>Quick Links</h4>
            <ul>
              {[['#home','Home'],['#about','About'],['#services','Services'],['#testimonial','Testimonial'],['#contact','Contact']].map(([href, label]) => (
                <li key={label}>
                  <a href={href} onClick={(e) => { e.preventDefault(); scrollTo(href); }}>{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-nav-group">
            <h4>Services</h4>
            <ul>
              {['CAD Modelling','CAE Simulation','CAM Programming','Precision Engineering','FEA Analysis','Product Development'].map((s) => (
                <li key={s}><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services'); }}>{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-contact-group">
            <h4>Contact</h4>
            <div className="footer-contact-items">
              <a href="mailto:contact@kriyantra.com" className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                contact@kriyantra.com
              </a>
              <a href="tel:+917666554844" className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.39 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                +91 7666 554 844
              </a>
              <div className="footer-contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                Pune, Maharashtra, India
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {year} KRIYANTRA. All rights reserved.</p>
          <p className="footer-credit">Engineered with precision &amp; passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
