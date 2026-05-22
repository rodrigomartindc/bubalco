import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import HeroFull from '../components/HeroFull';
import About from '../components/About';
import NuestroTrabajo from '../components/NuestroTrabajo';
import MapsBlock from '../components/MapsBlock';
import Donations from '../components/Donations';
import BioparqueBlock from '../components/BioparqueBlock';
import FaqSection from '../components/FaqSection';
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
        {isDesktop && <Hero />}
        <HeroFull />
        <About />
        <NuestroTrabajo />
        <MapsBlock />
        <Donations />
        <FooterSlide />
      </div>
      {isDesktop && (
        <>
          <BioparqueBlock />
          <FaqSection />
        </>
      )}
    </>
  );
}
