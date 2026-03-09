import { Clock, Sun, Moon, Calendar, MapPin, Info, Users } from 'lucide-react';
import { asset } from '../utils/asset';

const zones = [
  'Área Silvestre', 'Parque de Loros', 'Primates', 'Llanura Pampeana',
  'Felinos', 'Invernadero y Fosas', 'Costa de Río', 'Aviario', 'Corrales',
];

export default function Bioparque() {
  return (
    <>
      {/* Mobile: scroll-snap slides */}
      <div className="bioparque-slides md:hidden">
        {/* Slide 1: Intro */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="px-6 py-10 h-full flex flex-col justify-center text-center">
              <img src={asset('/logos/isologo-colores.png')} alt="Bubalcó" className="h-16 mx-auto mb-4" />
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">Bioparque</p>
              <h1 className="text-2xl font-medium text-gray-900 mb-3">Bubalcó Patagonia</h1>
              <p className="text-sm text-gray-500 leading-relaxed">
                34 hectáreas a orillas del Río Negro dedicadas al rescate y conservación de fauna silvestre.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-3 text-center">
                  <Users size={16} className="text-gray-400 mx-auto mb-1" />
                  <p className="text-[10px] text-gray-500">Visitas educativas</p>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-3 text-center">
                  <Clock size={16} className="text-gray-400 mx-auto mb-1" />
                  <p className="text-[10px] text-gray-500">3hs de recorrido</p>
                </div>
                <div className="rounded-xl bg-gray-50 border border-gray-100 p-3 text-center">
                  <MapPin size={16} className="text-gray-400 mx-auto mb-1" />
                  <p className="text-[10px] text-gray-500">9 zonas temáticas</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 2: Horarios */}
        <section id="horarios" className="bp-slide">
          <div className="bp-card bg-brand-dark text-white">
            <div className="px-6 py-8 h-full flex flex-col justify-center">
              <p className="text-xs tracking-widest text-white/40 uppercase mb-3">Horarios</p>
              <h2 className="text-2xl font-medium text-white mb-6">Horarios de Visita</h2>

              <div className="space-y-3 mb-4">
                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="text-white/50" size={16} />
                    <span className="text-sm font-medium">Lunes a Viernes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Boletería</span>
                    <span>12:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-white/60">Cierre</span>
                    <span>20:00 hs</span>
                  </div>
                </div>

                <div className="bg-white/10 p-4 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="text-white/50" size={16} />
                    <span className="text-sm font-medium">Fines de Semana</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Boletería</span>
                    <span>10:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between text-sm mt-1">
                    <span className="text-white/60">Cierre</span>
                    <span>19:00 hs</span>
                  </div>
                </div>

                <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Moon className="text-white/40" size={14} />
                    <span className="text-sm">Martes</span>
                  </div>
                  <span className="text-sm text-white/50">CERRADO</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Tarifas */}
        <section id="tarifas" className="bp-slide">
          <div className="bp-card bg-brand-dark text-white">
            <div className="px-6 py-8 h-full flex flex-col justify-center">
              <p className="text-xs tracking-widest text-white/40 uppercase mb-3">Tarifas</p>
              <h2 className="text-2xl font-medium text-white mb-5">Tarifas de Ingreso</h2>

              <div className="space-y-2">
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                  <div>
                    <p className="text-sm">Entrada General</p>
                    <p className="text-[10px] text-white/40">Mayores de 13</p>
                  </div>
                  <span className="text-lg font-medium">$25.800</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                  <div>
                    <p className="text-sm">Menores y Jubilados</p>
                    <p className="text-[10px] text-white/40">4 a 12 años</p>
                  </div>
                  <span className="text-lg font-medium">$21.000</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                  <div>
                    <p className="text-sm">Menores de 4 años</p>
                  </div>
                  <span className="text-lg font-medium">GRATIS</span>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                  <div>
                    <p className="text-sm">Acompañante</p>
                    <p className="text-[10px] text-white/40">Discapacidad</p>
                  </div>
                  <span className="text-lg font-medium">$9.600</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">Pase Anual</p>
                    <p className="text-[10px] text-white/40">Acceso ilimitado 365 días</p>
                  </div>
                  <span className="text-lg font-medium">$108.200</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 4: Mapa */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="px-4 py-6 h-full flex flex-col justify-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3 text-center">Recorrido</p>
              <h2 className="text-xl font-medium text-gray-900 mb-4 text-center">Mapa del Bioparque</h2>
              <img src={asset('/mapa-bubalco.jpg')} alt="Mapa del Bioparque" className="w-full rounded-xl flex-1 object-contain" />
            </div>
          </div>
        </section>
      </div>

      {/* Desktop: normal flow */}
      <div className="hidden md:block pt-[7.5rem] pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Bioparque</p>
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">Bioparque Bubalcó Patagonia</h1>
          <p className="text-base text-gray-500 leading-relaxed mb-16 max-w-3xl">
            34 hectáreas a orillas del Río Negro dedicadas al rescate, rehabilitación y conservación de fauna silvestre.
          </p>

          {/* Horarios */}
          <div id="horarios" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-medium text-gray-900 mb-8">Horarios de Visita</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-brand-dark p-6 rounded-2xl text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Sun className="text-white/50" size={18} />
                  <h3 className="font-medium">Lunes a Viernes</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between">
                    <span className="text-white/60 text-sm">Boletería</span>
                    <span className="font-medium">12:00 - 18:00</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between">
                    <span className="text-white/60 text-sm">Cierre del Parque</span>
                    <span className="font-medium">20:00 hs</span>
                  </div>
                </div>
              </div>
              <div className="bg-brand-dark p-6 rounded-2xl text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="text-white/50" size={18} />
                  <h3 className="font-medium">Fines de Semana</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between">
                    <span className="text-white/60 text-sm">Boletería</span>
                    <span className="font-medium">10:00 - 17:00</span>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between">
                    <span className="text-white/60 text-sm">Cierre del Parque</span>
                    <span className="font-medium">19:00 hs</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Moon className="text-gray-400" size={16} />
                <span className="text-sm text-gray-600">Días Martes</span>
              </div>
              <span className="text-sm font-medium text-gray-500">CERRADO</span>
            </div>
          </div>

          {/* Tarifas */}
          <div id="tarifas" className="mb-16 scroll-mt-32">
            <h2 className="text-3xl font-medium text-gray-900 mb-8">Tarifas de Ingreso</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-brand-dark p-8 rounded-2xl text-white">
                <h3 className="text-xl font-medium mb-6">Entradas Individuales</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Entrada General', sub: 'Mayores de 13 años', price: '$25.800' },
                    { name: 'Menores y Jubilados', sub: '4 a 12 años', price: '$21.000' },
                    { name: 'Menores de 4 años', sub: 'Sin cargo', price: 'GRATIS' },
                    { name: 'Acompañante', sub: 'Persona con discapacidad', price: '$9.600' },
                  ].map((t) => (
                    <div key={t.name} className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">{t.name}</p>
                        <p className="text-xs text-white/40 mt-0.5">{t.sub}</p>
                      </div>
                      <span className="text-xl font-medium">{t.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-brand-dark p-8 rounded-2xl text-white">
                <h3 className="text-xl font-medium mb-6">Pase Anual</h3>
                <div className="bg-white/5 p-8 rounded-xl border border-white/10 text-center mb-6">
                  <p className="text-xs tracking-widest text-white/40 uppercase mb-2">Acceso Ilimitado</p>
                  <p className="text-5xl font-medium mb-2">$108.200</p>
                  <p className="text-sm text-white/50">Visitá el bioparque todo el año</p>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/10">
                  <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                    <Info size={16} className="text-white/50" /> Beneficios
                  </h4>
                  <ul className="space-y-2 text-white/60 text-sm">
                    <li>· Acceso ilimitado durante 365 días</li>
                    <li>· Prioridad en días de alta demanda</li>
                    <li>· Descuentos en tienda y actividades</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark p-8 rounded-2xl text-white">
              <h3 className="text-xl font-medium mb-6">Paquetes Grupales</h3>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { name: 'Grupo I', price: '$83.700', includes: '2 Generales + 2 Menores' },
                  { name: 'Grupo II', price: '$95.800', includes: '2 Generales + 3 Menores', popular: true },
                  { name: 'Grupo III', price: '$129.300', includes: '6 Generales' },
                ].map((g) => (
                  <div key={g.name} className={`bg-white/5 p-6 rounded-xl text-center ${g.popular ? 'border-2 border-brand/40' : 'border border-white/10'} relative`}>
                    {g.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs px-3 py-1 rounded-full">MÁS POPULAR</div>}
                    <p className="text-xs text-white/40 uppercase">{g.name}</p>
                    <p className="text-3xl font-medium my-2">{g.price}</p>
                    <p className="text-sm text-white/50">{g.includes}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mapa */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Mapa del recorrido</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Recorré nuestras 9 zonas temáticas a orillas del Río Negro.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {zones.map((z, i) => (
                  <div key={z} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-brand/10 text-brand text-xs flex items-center justify-center flex-shrink-0">{i + 1}</span>
                    <span className="text-sm text-gray-600">{z}</span>
                  </div>
                ))}
              </div>
            </div>
            <img src={asset('/mapa-bubalco.jpg')} alt="Mapa del Bioparque" className="w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </>
  );
}
