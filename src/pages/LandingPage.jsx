import '../App.css';
import Topbar from '../components/Topbar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Trust from '../components/Trust';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import AppleReveal from '../components/AppleReveal';

export default function LandingPage() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <AppleReveal delay={0.1}>
          <Hero />
        </AppleReveal>
        
        <AppleReveal delay={0.1}>
          <About />
        </AppleReveal>
        
        <AppleReveal delay={0.1}>
          <Services />
        </AppleReveal>
        
        <AppleReveal delay={0.1}>
          <Trust />
        </AppleReveal>
        
        <AppleReveal delay={0.1}>
          <Testimonial />
        </AppleReveal>
        
        <AppleReveal delay={0.1}>
          <FAQ />
        </AppleReveal>
        
        <AppleReveal delay={0.1}>
          <Contact />
        </AppleReveal>
      </main>
      <Footer />
    </>
  );
}
