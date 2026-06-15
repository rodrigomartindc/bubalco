import { Heart, Instagram, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_BLANCO } from '../data/images';
import { CONTACT, MAP_EMBED_URL, ROUTES, SOCIAL_LINKS, WHATSAPP_URL_GENERAL } from '../data/site';
import OptimizedLogo from './OptimizedLogo';

interface FooterSlideProps {
  sectionClassName?: string;
}

export default function FooterSlide({ sectionClassName = 'scroll-section' }: FooterSlideProps) {
  const isDefaultSection = sectionClassName === 'scroll-section';

  return (
    <section className={`${sectionClassName} footer-full-bleed ${isDefaultSection ? 'footer-standalone' : ''} md:hidden`}>
      <div className="h-full w-full bg-gray-900 text-white">
        <div className="h-full flex flex-col">
          <div className="relative h-[38%] flex-shrink-0">
            <iframe title="Ubicación Bubalcó" src={MAP_EMBED_URL} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>

          <div className="flex-1 px-6 py-4 flex flex-col justify-between items-center text-center">
            <div className="flex flex-col items-center">
              <Link to={ROUTES.home}>
                <OptimizedLogo logo={LOGO_BLANCO} className="h-9 mb-3" />
              </Link>
              <div className="flex gap-2 mb-3">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="Instagram"><Instagram size={14} /></a>
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="Facebook"><svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="TikTok"><svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
              </div>

              <p className="text-sm font-semibold mb-2">Contacto</p>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-gray-500" />
                  <a href={WHATSAPP_URL_GENERAL} target="_blank" rel="noreferrer" className="text-sm text-gray-400">{CONTACT.phoneVisible}</a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-gray-500" />
                  <span className="text-sm text-gray-400">{CONTACT.address}</span>
                </div>
                <p className="text-sm text-gray-400">{CONTACT.location}</p>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-3 w-full flex flex-col items-center gap-0.5">
              <p className="text-xs text-gray-500 flex items-center gap-1">
                Hecho con <Heart size={12} className="text-accent" fill="currentColor" /> para los animales
              </p>
              <p className="text-xs text-gray-600">© 2026 Fundación Bubalcó Patagonia</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
