import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';
import { asset } from '../utils/asset';

export default function FooterSlide() {
  return (
    <section className="scroll-section md:hidden">
      <div className="slide-card">
        <div className="slide-card__scroll bg-gray-900 text-white">
          <div className="px-6 py-10 h-full flex flex-col justify-between">
            <div>
              <img
                src={asset("/logos/logo-blanco.png")}
                alt="Bubalcó Patagonia"
                className="h-10 mb-4"
              />

              <p className="text-sm text-gray-400 leading-relaxed">
                Refugio de vida silvestre dedicado al rescate, rehabilitación y conservación de la fauna nativa.
              </p>

              <div className="mt-7 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-400">
                    Isla 19, Contralmirante Guerrico<br />
                    Allen, Río Negro, Argentina
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="text-gray-500 flex-shrink-0 mt-1" />
                  <p className="text-sm text-gray-400">info@bubalco.com</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>

              <p className="mt-5 text-xs text-gray-500">© 2024 Bubalcó.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
