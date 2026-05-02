const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.5!2d-67.7601751!3d-39.0595151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a30fb8b3461c5%3A0x4edf452aaba697d8!2sFundaci%C3%B3n%20Bubalc%C3%B3%20Patagonia!5e0!3m2!1ses!2sar!4v1714600000000!5m2!1ses!2sar';
const mapsUrl = 'https://www.google.com/maps/place/Fundaci%C3%B3n+Bubalc%C3%B3+Patagonia/@-39.0595151,-67.7601751,17z';

export default function GoogleMapsFooter() {
  return (
    <div className="relative">
      <iframe
        title="Ubicación Bubalcó"
        src={embedUrl}
        className="w-full h-[300px] md:h-[400px]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-lg px-4 py-2 text-sm">
        <p className="text-gray-900 font-medium">Isla 19, Contralmirante Guerrico</p>
        <p className="text-gray-500 text-xs">Allen, Río Negro, Argentina</p>
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
