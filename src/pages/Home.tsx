import { useIsDesktop } from '../hooks/useIsDesktop';
import { useDesktopSnap } from '../hooks/useDesktopSnap';
import Hero from '../components/Hero';
import HeroFull from '../components/HeroFull';
import About from '../components/About';
import NuestroTrabajo from '../components/NuestroTrabajo';
import MapsBlock from '../components/MapsBlock';
import Donations from '../components/Donations';
import BioparqueBlock from '../components/BioparqueBlock';
import FooterSlide from '../components/FooterSlide';

export default function Home() {
  const isDesktop = useIsDesktop();
  useDesktopSnap(isDesktop);

  return (
    <>
      <div className="home-slides md:contents">
        {isDesktop ? <Hero /> : <HeroFull />}
        <About />
        <NuestroTrabajo />
        <MapsBlock />
        <Donations />
        <FooterSlide />
      </div>
      {isDesktop && <BioparqueBlock />}
    </>
  );
}
