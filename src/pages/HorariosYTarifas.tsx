import { Sun, Moon, Instagram, Phone, MapPin, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT, MAP_EMBED_URL, ROUTES, SOCIAL_LINKS, WHATSAPP_URL_GENERAL, WHATSAPP_URL_GUIADOS } from '../data/site';
import { asset } from '../utils/asset';


const tarifas = [
  { nombre: 'Entrada General', detalle: 'Mayores de 13 años', valor: '$29.900' },
  { nombre: 'Menores y Jubilados', detalle: 'Entre 4 y 12 años incluidos', valor: '$24.700' },
  { nombre: 'Pase anual', detalle: '', valor: '$126.700' },
  { nombre: 'Menores de 4 años', detalle: '', valor: 'Gratis' },
  { nombre: 'Acompañante CUD', detalle: '', valor: '$11.300' },
];

const promociones = [
  { nombre: 'Grupo I', detalle: '2 generales y 2 de menores/jubilados', valor: '$97.900' },
  { nombre: 'Grupo II', detalle: '2 generales y 3 de menores/jubilados', valor: '$112.300' },
  { nombre: 'Grupo III', detalle: '6 entradas generales', valor: '$151.400' },
];

const clubRioNegro = [
  { nombre: 'Entrada General', descuento: '15% de descuento' },
  { nombre: 'Grupo I', descuento: '10% de descuento extra' },
];

const horarios = [
  {
    title: 'Jueves a Domingos',
    rows: [
      { label: 'Boletería', value: '10:00 a 16:00 hs' },
      { label: 'Cierre del parque', value: '18:00 hs' },
    ],
    dark: true,
  },
  {
    title: 'Días feriados',
    rows: [
      { label: 'Boletería', value: '10:00 a 16:00 hs' },
      { label: 'Cierre del parque', value: '18:00 hs' },
    ],
    dark: true,
  },
  {
    title: 'Lunes a Miércoles',
    rows: [{ label: '', value: 'CERRADO' }],
    dark: false,
  },
];

const mediosPago = [
  { src: '/tarjeta-visa.png', alt: 'Visa' },
  { src: '/tarjeta-mastercard.png', alt: 'Mastercard' },
  { src: '/tarjeta-maestro.png', alt: 'Maestro' },
  { src: '/tarjeta-mercaddpago.png', alt: 'Mercado Pago' },
  { src: '/tarjeta-tarjeta-naranja.png', alt: 'Naranja' },
  { src: '/tarjeta-cabal.png', alt: 'Cabal' },
  { src: '/tarjeta-faro.png', alt: 'Faro' },
  { src: '/tarjeta-coopeplus.png', alt: 'Coopeplus' },
  { src: '/tarjeta-huilen.png', alt: 'Huilen' },
];

function PriceRow({ nombre, detalle, valor }: { nombre: string; detalle: string; valor: string }) {
  return (
    <div className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0">
      <div className="text-left">
        <p className="text-sm font-medium text-gray-900">{nombre}</p>
        {detalle && <p className="text-xs text-gray-400 mt-0.5">{detalle}</p>}
      </div>
      <span className="text-sm font-medium text-gray-900 ml-4 flex-shrink-0">{valor}</span>
    </div>
  );
}

function CudNote() {
  return (
    <p className="block w-full text-xs text-gray-400 mt-4 leading-relaxed text-left" style={{ textAlign: 'left' }}>
      Las personas con CUD ingresan sin costo. Su acompañante abona el seguro o valor indicado cuando corresponde.
    </p>
  );
}

function ClubRioNegroCard() {
  return (
    <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 text-left">
      <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
        <img src={asset('/logo-club-rio-negro.png')} alt="Club Río Negro" className="h-16 object-contain" />
      </div>
      <div className="space-y-1.5 md:space-y-2">
        {clubRioNegro.map((item) => (
          <div key={item.nombre} className="flex justify-between text-sm gap-4">
            <span className="text-gray-600">{item.nombre}</span>
            <span className="font-medium text-brand text-right">{item.descuento}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function HorarioCard({ title, rows, dark }: { title: string; rows: { label: string; value: string }[]; dark: boolean }) {
  const isClosed = rows.length === 1 && !rows[0].label;

  return (
    <div className={`rounded-2xl p-4 md:p-6 ${dark ? 'bg-brand-dark text-white border border-white/10' : 'bg-gray-100 text-gray-700'}`}>
      <div className={`flex items-center gap-2 ${isClosed ? '' : 'mb-4'}`}>
        {dark ? <Sun className="text-white/50 flex-shrink-0" size={16} /> : <Moon className="text-gray-400 flex-shrink-0" size={16} />}
        <h3 className="font-medium text-sm text-left">{title}</h3>
        {isClosed && <span className="text-sm font-medium ml-auto">{rows[0].value}</span>}
      </div>
      {!isClosed && rows.map((row) => (
        <div key={`${title}-${row.label || row.value}`} className="flex justify-between gap-4 text-sm mb-1 last:mb-0">
          <span className={dark ? 'text-white/60' : 'text-gray-500'}>{row.label}</span>
          <span className="font-medium text-right">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

export default function HorariosYTarifas() {
  return (
    <>
      {/* ── Mobile: scroll-snap slides ────────────────────────────── */}
      <div className="bioparque-slides md:hidden">

        {/* Slide 1: Tarifas */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="slide-card__scroll px-6 py-6">
              <p className="text-xs tracking-widest text-brand uppercase mb-2">Tarifas</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-1">Tu visita los cuida</h2>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">No hay que reservar. La entrada se adquiere directo en boletería.</p>
              <div className="divide-y divide-gray-100">
                {tarifas.map((tarifa) => <PriceRow key={tarifa.nombre} {...tarifa} />)}
              </div>
              <CudNote />
            </div>
          </div>
        </section>

        {/* Slide 2: Promociones */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="slide-card__scroll px-6 py-6">
              <p className="text-xs tracking-widest text-brand uppercase mb-2">Promociones</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Promociones y descuentos</h2>
              <div className="divide-y divide-gray-100 mb-5">
                {promociones.map((promocion) => <PriceRow key={promocion.nombre} {...promocion} />)}
              </div>
              <ClubRioNegroCard />
            </div>
          </div>
        </section>

        {/* Slide 3: Días y horarios */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="px-6 py-8 h-full flex flex-col justify-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-2">Cuándo visitar</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Días y horarios</h2>

              <div className="space-y-3">
                {horarios.map((horario) => <HorarioCard key={horario.title} {...horario} />)}
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Guiados educativos */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="px-6 py-8 h-full flex flex-col justify-center text-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Guiados educativos</p>
              <h2 className="text-xl font-medium text-gray-900 mb-3">La visita guiada marca la diferencia</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Conocé cada historia en profundidad y consultá directamente con nuestro equipo. La educación es el corazón de nuestra misión.
              </p>
              <div className="bg-brand/5 rounded-xl p-4 border border-brand/10 mb-6">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Salidas a las <strong>11, 13 y 15 hs</strong> desde la plaza de ingreso.<br />
                  Sin reserva. Incluido con tu entrada.
                </p>
              </div>
              <a href={WHATSAPP_URL_GUIADOS} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors">
                WhatsApp <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Slide 5: Medios de pago */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="px-6 py-8 h-full flex flex-col justify-center text-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Tu entrada</p>
              <h2 className="text-2xl font-medium text-gray-900 mb-3">Medios de pago</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                La entrada se adquiere directo en boletería sin reserva.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {mediosPago.map((medio) => (
                  <img key={medio.src} src={asset(medio.src)} alt={medio.alt} className="h-8 object-contain" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Footer */}
        <section className="bp-slide">
          <div className="bp-card bg-gray-900 text-white">
            <div className="h-full flex flex-col">
              <div className="relative h-[38%] flex-shrink-0">
                <iframe title="Ubicación Bubalcó" src={MAP_EMBED_URL} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div className="flex-1 px-6 py-4 flex flex-col justify-between items-center text-center">
                <div className="flex flex-col items-center">
                  <Link to={ROUTES.home}><img src={asset('/logos/logo-blanco.png')} alt="Bubalcó Patagonia" className="h-9 mb-3" /></Link>
                  <div className="flex gap-2 mb-3">
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="Instagram"><Instagram size={14} /></a>
                    <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="Facebook"><svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                    <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="TikTok"><svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
                    <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="LinkedIn"><svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                    <a href={WHATSAPP_URL_GENERAL} target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="WhatsApp"><svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
                  </div>
                  <h4 className="text-sm font-medium mb-2">Contacto</h4>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2"><Phone size={13} className="text-gray-500" /><a href={WHATSAPP_URL_GENERAL} target="_blank" rel="noreferrer" className="text-sm text-gray-400">{CONTACT.phoneVisible}</a></div>
                    <div className="flex items-center gap-2"><MapPin size={13} className="text-gray-500" /><span className="text-sm text-gray-400">{CONTACT.address}</span></div>
                    <p className="text-sm text-gray-400">{CONTACT.location}</p>
                  </div>
                </div>
                <div className="border-t border-gray-800 pt-3 w-full flex flex-col items-center gap-0.5">
                  <p className="text-xs text-gray-500 flex items-center gap-1">Hecho con <Heart size={12} className="text-accent" fill="currentColor" /> para los animales</p>
                  <p className="text-xs text-gray-600">© 2026 Fundación Bubalcó Patagonia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* ── Desktop: normal flow ───────────────────────────────────── */}
      <div className="hidden md:block pt-[9rem] pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 space-y-20">

          {/* Bloque 1: Tarifas */}
          <div>
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Tarifas</p>
            <h1 className="text-4xl font-medium text-gray-900 mb-2">Tu visita los cuida</h1>
            <p className="text-base text-gray-500 mb-8">No hay que reservar. La entrada se adquiere directo en boletería.</p>
            <div className="border border-gray-100 rounded-2xl overflow-hidden">
              {tarifas.map((tarifa, i) => (
                <div key={tarifa.nombre} className={`flex justify-between items-center px-6 py-4 ${i < tarifas.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div>
                    <p className="font-medium text-gray-900">{tarifa.nombre}</p>
                    {tarifa.detalle && <p className="text-sm text-gray-400 mt-0.5">{tarifa.detalle}</p>}
                  </div>
                  <span className="text-lg font-medium text-gray-900">{tarifa.valor}</span>
                </div>
              ))}
            </div>
            <CudNote />
          </div>

          {/* Bloque 2: Promociones */}
          <div>
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Promociones</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-8">Promociones y descuentos</h2>
            <div className="border border-gray-100 rounded-2xl overflow-hidden mb-6">
              {promociones.map((promocion, i) => (
                <div key={promocion.nombre} className={`flex justify-between items-center px-6 py-4 ${i < promociones.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div>
                    <p className="font-medium text-gray-900">{promocion.nombre}</p>
                    {promocion.detalle && <p className="text-sm text-gray-400 mt-0.5">{promocion.detalle}</p>}
                  </div>
                  <span className="text-lg font-medium text-gray-900">{promocion.valor}</span>
                </div>
              ))}
            </div>
            <ClubRioNegroCard />
          </div>

          {/* Bloque 3: Días y horarios */}
          <div>
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Cuándo visitar</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-8">Días y horarios</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {horarios.map((horario) => <HorarioCard key={horario.title} {...horario} />)}
            </div>
          </div>

          {/* Bloque 4: Guiados educativos */}
          <div>
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Guiados educativos</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-4">La visita guiada marca la diferencia</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-6 max-w-2xl">
              Conocé cada historia en profundidad y consultá directamente con nuestro equipo. La educación es el corazón de nuestra misión.
            </p>
            <div className="bg-brand/5 rounded-2xl p-6 border border-brand/10 mb-6 max-w-2xl">
              <p className="text-base text-gray-700 leading-relaxed">
                Salidas a las <strong>11, 13 y 15 hs</strong> desde la plaza de ingreso.<br />
                Sin reserva. Incluido con tu entrada.
              </p>
            </div>
            <a href={WHATSAPP_URL_GUIADOS} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors">
              Consultar por WhatsApp para guiados particulares <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Bloque 5: Medios de pago */}
          <div>
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Tu entrada</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-4">Medios de pago</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8">La entrada se adquiere directo en boletería sin reserva.</p>
            <div className="flex flex-wrap gap-4 items-center">
              {mediosPago.map((medio) => (
                <img key={medio.src} src={asset(medio.src)} alt={medio.alt} className="h-10 object-contain" />
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
