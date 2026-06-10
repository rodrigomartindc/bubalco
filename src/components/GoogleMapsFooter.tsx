import { CONTACT, MAP_EMBED_URL } from '../data/site';

const mapsUrl = 'https://www.google.com/maps/place/Fundaci%C3%B3n+Bubalc%C3%B3+Patagonia/@-39.0595151,-67.7601751,17z';

interface GoogleMapsFooterProps {
  fill?: boolean;
  snap?: boolean;
}

export default function GoogleMapsFooter({ fill = false, snap = true }: GoogleMapsFooterProps) {
  return (
    <div className={`relative ${fill ? 'flex-1 min-h-0' : ''} ${snap ? 'desktop-footer-snap' : ''}`}>
      <iframe
        title="Ubicación Bubalcó"
        src={MAP_EMBED_URL}
        className={fill ? 'absolute inset-0 w-full h-full' : 'w-full h-[300px] md:h-[400px]'}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg px-4 py-2 text-sm md:text-xs md:px-3 md:py-1.5">
        <p className="text-gray-900 font-medium md:text-xs">{CONTACT.address}</p>
        <p className="text-gray-500 text-xs md:text-[11px]">{CONTACT.location}</p>
        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="text-gray-500 hover:text-gray-900 underline underline-offset-2 text-xs"
        >
          Abrir en Google Maps
        </a>
      </div>
    </div>
  );
}
