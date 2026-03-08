import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { asset } from '../utils/asset';

const WA_URL = 'https://api.whatsapp.com/send/?phone=5492984731612&text=%C2%A1Hola%2C+Bubalc%C3%B3%21&type=phone_number&app_absent=0';
const plusCode = 'W6RR+5X Allen, Río Negro';
const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(plusCode)}&output=embed`;

export default function FooterSlide() {
  return (
    <section className="scroll-section md:hidden">
      <div className="slide-card">
        <div className="slide-card__scroll bg-gray-900 text-white">
          <div className="h-full flex flex-col">
            {/* Google Maps arriba */}
            <div className="relative h-[45%] flex-shrink-0">
              <iframe
                title="Ubicación Bubalcó"
                src={embedUrl}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur rounded-md px-3 py-1.5">
                <p className="text-gray-900 text-xs font-medium">Isla 19, Contralmirante Guerrico</p>
                <p className="text-gray-500 text-[10px]">Allen, Río Negro, Argentina</p>
              </div>
            </div>

            {/* Footer abajo */}
            <div className="flex-1 px-5 py-5 flex flex-col justify-between">
              <div>
                <img src={asset('/logos/logo-blanco.png')} alt="Bubalcó Patagonia" className="h-8 mb-3" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-gray-500" />
                    <a href={WA_URL} target="_blank" rel="noreferrer" className="text-xs text-gray-400">+54 9 298 473-1612</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={13} className="text-gray-500" />
                    <p className="text-xs text-gray-400">info@bubalco.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={13} className="text-gray-500" />
                    <p className="text-xs text-gray-400">Allen, Río Negro, Argentina</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                <div className="flex gap-2">
                  <a href="https://www.instagram.com/bubalco/" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-brand transition-colors" aria-label="Instagram">
                    <Instagram size={14} />
                  </a>
                  <a href={WA_URL} target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#25d366] transition-colors" aria-label="WhatsApp">
                    <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.571-1.198A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-2.17 0-4.178-.7-5.813-1.886l-.417-.311-3.064.803.817-2.986-.342-.543A9.77 9.77 0 012.182 12c0-5.414 4.404-9.818 9.818-9.818S21.818 6.586 21.818 12 17.414 21.818 12 21.818z"/></svg>
                  </a>
                </div>
                <p className="text-[10px] text-gray-500">© 2024 Bubalcó.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
