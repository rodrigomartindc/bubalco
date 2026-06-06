import { CONTACT, MAP_EMBED_URL } from '../data/site';

const mapsUrl = 'https://www.google.com/maps/place/Fundaci%C3%B3n+Bubalc%C3%B3+Patagonia/@-39.0595151,-67.7601751,17z';

export default function GoogleMapsFooter() {
  return (
    <div className="relative">
      <iframe
        title="Ubicación Bubalcó"
        src={MAP_EMBED_URL}
        className="w-full h-[300px] md:h-[400px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg px-4 py-2 text-sm">
        <p className="text-gray-900 font-medium">{CONTACT.address}</p>
        <p className="text-gray-500 text-xs">{CONTACT.location}</p>
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
