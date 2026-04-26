import { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonial', href: '#testimonial' },
  ];

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={() => handleNav('#home')}>
          <div className="logo-icon">
            <span /><span /><span /><span />
          </div>
          <span className="logo-text">KRIYANTRA</span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="navbar-link"
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="btn-primary navbar-cta"
          onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}
        >
          Start Project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12,5 19,12 12,19"/>
          </svg>
        </a>

        {/* Mobile Burger */}
        <button
          className={`navbar-burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="mobile-cta" onClick={(e) => { e.preventDefault(); handleNav('#contact'); }}>
              Start Project
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
