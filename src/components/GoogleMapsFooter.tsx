const plusCode = 'W6RR+5X Allen, Río Negro';
const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(plusCode)}&output=embed`;
const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(plusCode)}`;

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
