import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import NuestroTrabajo from '../components/NuestroTrabajo';
import MapsBlock from '../components/MapsBlock';
import Donations from '../components/Donations';
import BioparqueBlock from '../components/BioparqueBlock';
import GoogleMapsFooter from '../components/GoogleMapsFooter';
import Footer from '../components/Footer';
import FooterSlide from '../components/FooterSlide';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const handle = () => setIsDesktop(mq.matches);
    handle();
    mq.addEventListener('change', handle);
    return () => mq.removeEventListener('change', handle);
  }, []);

  return (
    <>
      <div className="home-slides md:contents">
        <Hero />
        <About />
        <NuestroTrabajo />
        <MapsBlock />
        <Donations />
        <BioparqueBlock />
        <FooterSlide />
      </div>
      {isDesktop && (
        <>
          <GoogleMapsFooter />
          <Footer />
        </>
      )}
    </>
  );
}
