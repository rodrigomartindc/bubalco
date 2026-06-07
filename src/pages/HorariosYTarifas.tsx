import { Sun, Moon, ArrowRight } from 'lucide-react';
import { WHATSAPP_URL_GUIADOS } from '../data/site';
import { asset } from '../utils/asset';
import FooterSlide from '../components/FooterSlide';


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
    <div className="mt-4 w-full rounded-xl bg-gray-50 p-3 text-left" style={{ textAlign: 'left' }}>
      <p className="text-xs text-gray-500 leading-relaxed">
        Las personas con CUD ingresan sin costo. Su acompañante abona el seguro o valor indicado cuando corresponde.
      </p>
    </div>
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
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Precios Especiales</h2>
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
                Consultar por guiados particulares <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
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

        <FooterSlide sectionClassName="bp-slide" />
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
              Consultar por guiados particulares <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
