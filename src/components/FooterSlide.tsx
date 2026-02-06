import { Facebook, Instagram, Mail, MapPin } from 'lucide-react';

export default function FooterSlide() {
  return (
    <section className="scroll-section md:hidden">
      <div className="slide-card">
        <div className="slide-card__scroll bg-gray-900 text-white">
          <div className="px-6 py-10 h-full flex flex-col justify-between">
            <div>
              <img
                src="https://bubalco.com/wp-content/uploads/2023/05/bubalco-logo-dark.webp"
                alt="Bubalco"
                className="h-14 mb-4 filter brightness-0 invert"
              />

              <p className="text-gray-300 leading-relaxed">
                Refugio de vida silvestre dedicado al rescate, rehabilitación y conservación de la fauna nativa.
              </p>

              <div className="mt-7 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">
                    Isla 19, Contralmirante Guerrico<br />
                    Allen, Río Negro, Argentina
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">info@bubalco.com</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </div>

              <p className="mt-5 text-xs text-gray-500">© 2024 Bubalco.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


