import { useState } from 'react';
import '../styles/FAQ.css';

const faqs = [
  {
    q: 'What types of projects does KRIYANTRA handle?',
    a: 'We handle a wide range of mechanical engineering projects, including industrial machinery design, product development, CAD modelling, FEA/CFD simulation, CNC programming, and prototype validation across sectors like automation, consumer products, and automotive.',
  },
  {
    q: 'How does the project process work?',
    a: 'We start with a discovery call to understand your requirements, followed by a detailed quotation. Once approved, we move through concept design, detailed CAD modelling, simulation/validation, and final design handoff — keeping you informed at every milestone.',
  },
  {
    q: 'Which CAD and simulation software do you use?',
    a: 'We are proficient in SOLIDWORKS, CATIA, and AutoCAD for design, and ANSYS, Abaqus, and SolidWorks Simulation for FEA/CFD. For CAM, we use Mastercam and Fusion 360.',
  },
  {
    q: 'Can you assist with DFM and production-ready drawings?',
    a: 'Absolutely. Design for Manufacturability (DFM) is integral to our process. We deliver fully annotated drawings with GD&T, tolerances, surface finish specifications, and material callouts that are ready to hand directly to your manufacturing vendor.',
  },
  {
    q: 'What are your typical project timelines?',
    a: 'Timelines depend on complexity. A standalone CAD model may take 3–5 days, while a full simulation study can take 1–3 weeks. We provide estimated timelines upfront and stick to agreed-upon deadlines.',
  },
  {
    q: 'Do you offer ongoing support after project delivery?',
    a: 'Yes, we offer revision rounds as part of every project and are available for post-delivery support, design iterations, and follow-up simulation studies as your needs evolve.',
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section className="faq-section">
      <div className="container faq-inner">

        {/* Left */}
        <div className="faq-left">
          <div className="section-label">
            <div className="label-icon">
              <span /><span /><span /><span />
            </div>
            COMMON INQUIRIES
          </div>
          <h2 className="section-title faq-title">
            Everything You<br />Need To <span className="accent">Know</span>
          </h2>
          <p className="faq-subtitle">
            Have a question we haven't answered? Reach out directly and we'll get back to you within one business day.
          </p>
          <a
            href="#contact"
            className="btn-primary faq-cta"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Ask Us Anything
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12,5 19,12 12,19"/>
            </svg>
          </a>

          <div className="faq-image">
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&q=80"
              alt="Laser cutting engineering process"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: accordion */}
        <div className="faq-right" role="list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIdx === i ? 'faq-item--open' : ''}`}
              role="listitem"
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIdx === i}
              >
                <span>{item.q}</span>
                <div className={`faq-icon ${openIdx === i ? 'faq-icon--open' : ''}`}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </div>
              </button>
              <div className="faq-answer" style={{ maxHeight: openIdx === i ? '300px' : '0' }}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
