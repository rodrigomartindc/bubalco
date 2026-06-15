import { Instagram, MapPin, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_BLANCO } from '../data/images';
import { CONTACT, ROUTES, SOCIAL_LINKS, WHATSAPP_URL_GENERAL } from '../data/site';
import OptimizedLogo from './OptimizedLogo';

interface FooterProps {
  snap?: boolean;
  slide?: boolean;
}

const WEBFINE_CREDIT = (
  <p className="text-[10px] text-gray-700 mt-2">
    Powered by{' '}
    <a
      href="https://webfine.com.ar/"
      target="_blank"
      rel="noreferrer"
      className="text-gray-600 hover:text-white transition-colors"
    >
      WebFine
    </a>
  </p>
);

const Footer = ({ snap = true, slide = false }: FooterProps) => {
  return (
    <footer
      className={`bg-gray-900 text-white ${snap ? 'desktop-footer-snap' : ''} ${
        slide ? 'h-[60%] min-h-0 flex flex-col overflow-hidden shrink-0' : 'flex-shrink-0'
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 md:px-12 w-full ${
          slide ? 'h-full flex flex-col justify-center py-4 md:py-3' : 'py-12 md:py-6'
        }`}
      >
        <div className={`grid md:grid-cols-4 gap-12 ${slide ? 'md:gap-5 md:mb-3' : 'md:gap-6 mb-10 md:mb-4'}`}>
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <Link to={ROUTES.home}>
              <OptimizedLogo logo={LOGO_BLANCO} className="h-12 md:h-10 mb-4 md:mb-3" />
            </Link>
            <div className="flex gap-3 md:gap-2.5 mt-4 md:mt-3">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 md:w-8 md:h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand transition-colors" aria-label="Instagram">
                <Instagram className="w-[18px] h-[18px] md:w-3.5 md:h-3.5" />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 md:w-8 md:h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#1877f2] transition-colors" aria-label="Facebook">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] md:w-3.5 md:h-3.5 fill-white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 md:w-8 md:h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="TikTok">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] md:w-3.5 md:h-3.5 fill-white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm md:text-xs font-semibold mb-6 md:mb-3 text-center md:text-left">Contacto</p>
            <ul className="space-y-4 md:space-y-1.5 flex flex-col items-center md:items-start">
              <li className="flex items-center gap-3 md:gap-2">
                <Phone className="text-gray-500 flex-shrink-0 w-4 h-4 md:w-3.5 md:h-3.5" />
                <a href={WHATSAPP_URL_GENERAL} target="_blank" rel="noreferrer" className="text-sm md:text-xs text-gray-400 hover:text-white transition-colors">{CONTACT.phoneVisible}</a>
              </li>
              <li className="flex items-center gap-3 md:gap-2">
                <MapPin className="text-gray-500 flex-shrink-0 w-4 h-4 md:w-3.5 md:h-3.5" />
                <span className="text-sm md:text-xs text-gray-400 text-center md:text-left leading-snug">{CONTACT.address}<br />{CONTACT.location}</span>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <p className="text-sm md:text-xs font-semibold mb-6 md:mb-3">Enlaces</p>
            <div className="grid grid-cols-2 gap-x-6 md:gap-x-5">
              <ul className="space-y-3 md:space-y-1.5">
                <li><Link to={ROUTES.bioparque} className="text-sm md:text-xs text-gray-400 hover:text-white transition-colors">Que es el Bioparque</Link></li>
                <li><Link to={ROUTES.horarios} className="text-sm md:text-xs text-gray-400 hover:text-white transition-colors">Horarios y Tarifas</Link></li>
                <li><Link to={ROUTES.visitasEscolares} className="text-sm md:text-xs text-gray-400 hover:text-white transition-colors">Visitas Escolares</Link></li>
              </ul>
              <ul className="space-y-3 md:space-y-1.5">
                <li><Link to={ROUTES.faq} className="text-sm md:text-xs text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to={ROUTES.nuestroTrabajo} className="text-sm md:text-xs text-gray-400 hover:text-white transition-colors">Nuestro Trabajo</Link></li>
                <li><Link to={ROUTES.donaciones} className="text-sm md:text-xs text-gray-400 hover:text-white transition-colors">Donaciones</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`border-t border-gray-800 flex flex-col items-center text-center ${slide ? 'pt-3' : 'pt-6 md:pt-3 gap-1 md:gap-0.5'}`}>
          <p className="text-xs md:text-[11px] text-gray-500 flex items-center gap-1">
            Hecho con <Heart size={12} className="text-accent md:w-2.5 md:h-2.5" fill="currentColor" /> para los animales
          </p>
          <p className="text-xs md:text-[11px] text-gray-600">
            © 2026 Fundación Bubalcó Patagonia
          </p>
          {WEBFINE_CREDIT}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
