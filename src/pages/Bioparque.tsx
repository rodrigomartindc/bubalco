import { Sun, Moon, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { asset } from '../utils/asset';

const WA_URL = 'https://api.whatsapp.com/send/?phone=5492984731612&text=%C2%A1Hola%2C+Bubalc%C3%B3%21&type=phone_number&app_absent=0';
const plusCode = 'W6RR+5X Allen, Río Negro';
const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(plusCode)}&output=embed`;
import { Instagram, Phone } from 'lucide-react';

export default function Bioparque() {
  return (
    <>
      {/* Mobile: scroll-snap slides */}
      <div className="bioparque-slides md:hidden">
        {/* Slide 1: Hero */}
        <section className="bp-slide">
          <div className="bp-card bg-brand-dark text-white">
            <div className="px-6 py-8 h-full flex flex-col justify-center text-center">
              <p className="text-xs tracking-widest text-white/40 uppercase mb-3">Bioparque</p>
              <h1 className="text-2xl font-medium text-white mb-3">Bubalcó Patagonia</h1>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Refugio y centro de rescate de fauna en la Patagonia. Un recorrido educativo para conocer de cerca las historias de los animales.
              </p>
              <div className="flex flex-col gap-3">
                <button onClick={() => { const el = document.getElementById('tarifas-horarios-m'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="px-6 py-3 bg-white text-gray-900 text-sm rounded-full">
                  Tarifas y Horarios
                </button>
                <Link to="/visitas-escolares" className="px-6 py-3 border border-white/30 text-white text-sm rounded-full text-center">
                  Visitas Escolares
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 2: Qué es */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="px-6 py-8 h-full flex flex-col justify-center items-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Conservación en acción</p>
              <h2 className="text-xl font-medium text-gray-900 mb-3">Un refugio para animales que no pueden volver a la naturaleza</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                En 34 hectáreas de la Patagonia argentina, cuidamos a nuestros habitantes, protegemos a las especies y enseñamos por qué conservar la naturaleza es responsabilidad de todos.
              </p>
              <div className="border-t border-gray-100 pt-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Reconocimiento provincial</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Declarado de interés científico, educativo, conservacionista y turístico por la Legislatura de la Provincia de Río Negro.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Visitas escolares */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="px-6 py-8 h-full flex flex-col justify-center text-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Educación</p>
              <h2 className="text-xl font-medium text-gray-900 mb-3">Un aula en la naturaleza</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Acercamos a estudiantes a la fauna y la conservación de forma directa y participativa.
              </p>
              <Link to="/visitas-escolares" className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-white text-sm rounded-full mx-auto">
                Visitas Escolares <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Slide 4: De dónde vienen */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="px-6 py-8 h-full flex flex-col justify-center items-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">Historias que merecen ser contadas</p>
              <h2 className="text-xl font-medium text-gray-900 mb-4">De dónde vienen los habitantes del parque</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Cada animal tiene su historia y conocerla nos ayuda a entender por qué protegemos la fauna y sus ecosistemas.
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-xs text-gray-500 leading-relaxed">Algunos animales llegaron como rescates, otros nacen y se crían en cautiverio dentro de programas de conservación de especies en peligro.</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-xs text-gray-500 leading-relaxed">Cada historia nos muestra los desafíos que enfrentan y por qué su cuidado es esencial.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Por qué abrimos */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="px-6 py-6 h-full flex flex-col justify-center items-center">
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-3">Nuestra misión</p>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Por qué abrimos el bioparque al público</h2>
              <div className="space-y-3">
                {[
                  { n: '1', title: 'Conectar con la naturaleza', desc: 'Conocer a los animales y sus historias nos ayuda a reconectar y comprender por qué protegerla es fundamental.' },
                  { n: '2', title: 'Animales que necesitan cuidado', desc: 'Los animales del recorrido no pueden volver a la naturaleza. Les damos un hogar seguro.' },
                  { n: '3', title: 'Educación para generar cambio', desc: 'Conocimiento y empatía son la base para un vínculo responsable con la naturaleza.' },
                ].map((b) => (
                  <div key={b.n} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-5 h-5 rounded-full bg-brand/10 text-brand text-[12px] flex items-center justify-center flex-shrink-0">{b.n}</span>
                      <h3 className="text-sm font-medium text-gray-900">{b.title}</h3>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed pl-7">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Tarifas y Horarios */}
        <section id="tarifas-horarios-m" className="bp-slide">
          <div className="bp-card bg-brand-dark text-white">
            <div className="px-6 py-6 h-full flex flex-col justify-center items-center">
              <p className="text-xs tracking-widest text-white/40 uppercase mb-2">Planificá tu visita</p>
              <h2 className="text-xl font-medium text-white mb-4">Horarios y Tarifas</h2>

              <div className="space-y-2 mb-4">
                <div className="bg-white/10 p-3 rounded-xl border border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Sun className="text-white/50" size={14} />
                    <span className="text-sm font-medium">Jueves a Domingo</span>
                  </div>
                  <div className="flex justify-between text-xs"><span className="text-white/60">Boletería</span><span>10:00 - 16:00</span></div>
                  <div className="flex justify-between text-xs mt-1"><span className="text-white/60">Cierre</span><span>18:00 hs</span></div>
                </div>
                <div className="bg-white/5 p-2 rounded-xl border border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-2"><Moon className="text-white/40" size={12} /><span className="text-xs">Lun, Mar, Mié</span></div>
                  <span className="text-xs text-white/50">CERRADO</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="bg-white/5 p-2.5 rounded-lg border border-white/10 flex justify-between text-xs">
                  <span>Entrada General</span><span>$25.800</span>
                </div>
                <div className="bg-white/5 p-2.5 rounded-lg border border-white/10 flex justify-between text-xs">
                  <span>Menores y Jubilados</span><span>$21.000</span>
                </div>
                <div className="bg-white/5 p-2.5 rounded-lg border border-white/10 flex justify-between text-xs">
                  <span>Menores de 4</span><span>GRATIS</span>
                </div>
              </div>

              <p className="text-[12px] text-white/40 mt-3 text-center">Tu entrada contribuye directamente al trabajo de la fundación</p>
            </div>
          </div>
        </section>

        {/* Slide 7: Descargar mapa */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="px-6 py-10 h-full flex flex-col items-center justify-center text-center">
              <Download size={32} className="text-brand mb-4" />
              <h2 className="text-2xl font-medium text-gray-900 mb-3">Mapa del recorrido</h2>
              <p className="text-sm text-gray-500 mb-8">
                9 zonas temáticas. Descargá el mapa para planificar tu visita.
              </p>
              <a href={asset('/mapa-bubalco.jpg')} download="mapa-bubalco-patagonia.jpg" className="inline-flex items-center gap-2 px-6 py-3 bg-brand text-white text-sm rounded-full">
                Descargar mapa
              </a>
            </div>
          </div>
        </section>

        {/* Slide 8: Footer */}
        <section className="bp-slide">
          <div className="bp-card bg-gray-900 text-white">
            <div className="h-full flex flex-col">
              <div className="relative h-[45%] flex-shrink-0">
                <iframe title="Ubicación Bubalcó" src={embedUrl} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur rounded-md px-3 py-1.5">
                  <p className="text-gray-900 text-xs font-medium">Isla 19, Contralmirante Guerrico</p>
                  <p className="text-gray-500 text-[12px]">Allen, Río Negro, Argentina</p>
                </div>
              </div>
              <div className="flex-1 px-5 py-5 flex flex-col justify-between">
                <div>
                  <Link to="/"><img src={asset('/logos/logo-blanco.png')} alt="Bubalcó Patagonia" className="h-8 mb-3" /></Link>
                  <p className="text-xs text-gray-500 mb-2">Fundación Bubalcó Patagonia</p>
                  <div className="flex items-center gap-2">
                    <Phone size={13} className="text-gray-500" />
                    <a href={WA_URL} target="_blank" rel="noreferrer" className="text-xs text-gray-400">+54 9 298 473-1612</a>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
                  <div className="flex gap-2">
                    <a href="https://www.instagram.com/bubalcopatagonia/" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="Instagram"><Instagram size={14} /></a>
                  </div>
                  <p className="text-[12px] text-gray-500">© 2026 Fundación Bubalcó</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Desktop: normal flow */}
      <div className="hidden md:block pt-[7.5rem] pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-20">
            <p className="text-xs tracking-widest text-brand uppercase mb-6">Bioparque</p>
            <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">Bubalcó Patagonia</h1>
            <p className="text-base text-gray-500 leading-relaxed mb-10 max-w-3xl mx-auto">
              Refugio y centro de rescate de fauna en la Patagonia. Un recorrido educativo para conocer de cerca las historias de los animales y comprender por qué proteger la naturaleza es fundamental.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="#tarifas-horarios" className="px-8 py-4 bg-brand text-white text-sm rounded-full hover:bg-brand-dark transition-colors">Tarifas y Horarios</a>
              <Link to="/visitas-escolares" className="px-8 py-4 border border-gray-200 text-gray-900 text-sm rounded-full hover:bg-gray-50 transition-colors">Visitas Escolares</Link>
            </div>
          </div>

          {/* Qué es */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <p className="text-xs tracking-widest text-brand uppercase mb-4">Conservación en acción</p>
              <h2 className="text-3xl font-medium text-gray-900 mb-4">Un refugio para animales que no pueden volver a la naturaleza</h2>
              <p className="text-base text-gray-500 leading-relaxed">
                En 34 hectáreas de la Patagonia argentina, cuidamos a nuestros habitantes, protegemos a las especies y enseñamos por qué conservar la naturaleza es responsabilidad de todos.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Reconocimiento provincial</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Declarado de interés científico, educativo, conservacionista y turístico por la Legislatura de la Provincia de Río Negro.
              </p>
            </div>
          </div>

          {/* Educación */}
          <div className="bg-brand-dark rounded-2xl p-10 mb-20 text-center">
            <p className="text-xs tracking-widest text-white/40 uppercase mb-4">Educación</p>
            <h2 className="text-3xl font-medium text-white mb-4">Un aula en la naturaleza</h2>
            <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              Acercamos a estudiantes y visitantes a la fauna y la conservación de forma directa y participativa. Nuestros recorridos combinan información científica, historias de los animales y actividades que fomentan la empatía.
            </p>
            <Link to="/visitas-escolares" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 text-sm rounded-full hover:bg-gray-100 transition-colors">
              Visitas Escolares <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* De dónde vienen */}
          <div className="mb-20">
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Historias que merecen ser contadas</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-4">De dónde vienen los habitantes del parque</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-3xl">
              Cada animal tiene su historia y conocerla nos ayuda a entender por qué protegemos la fauna y sus ecosistemas.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <p className="text-sm text-gray-500 leading-relaxed">Algunos animales llegaron como rescates, otros nacen y se crían en cautiverio dentro de programas de conservación de especies en peligro.</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <p className="text-sm text-gray-500 leading-relaxed">Cada historia nos muestra los desafíos que enfrentan y por qué su cuidado es esencial, tanto en el bioparque como en la naturaleza.</p>
              </div>
            </div>
          </div>

          {/* Por qué abrimos */}
          <div className="mb-20">
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">Nuestra misión</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-8">Por qué abrimos el bioparque al público</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { n: '1', title: 'Conectar con la naturaleza', desc: 'Cada vez estamos más alejados de la naturaleza. Conocer a los animales y sus historias nos ayuda a reconectar y comprender por qué protegerla es fundamental.' },
                { n: '2', title: 'Animales que necesitan cuidado humano', desc: 'Los animales del recorrido no pueden volver a la naturaleza y están habituados a la presencia respetuosa de las personas. Les damos un hogar seguro.' },
                { n: '3', title: 'Educación para generar cambio', desc: 'Compartimos información sobre las especies y la historia de cada animal, porque conocimiento y empatía son la base para un vínculo responsable con la naturaleza.' },
              ].map((b) => (
                <div key={b.n} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <span className="w-8 h-8 rounded-full bg-brand/10 text-brand text-sm font-medium flex items-center justify-center mb-4">{b.n}</span>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tarifas y Horarios */}
          <div id="tarifas-horarios" className="scroll-mt-32 mb-20">
            <h2 className="text-3xl font-medium text-gray-900 mb-8">Horarios y Tarifas</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-brand-dark p-8 rounded-2xl text-white">
                <div className="flex items-center gap-2 mb-4"><Sun className="text-white/50" size={18} /><h3 className="font-medium">Jueves a Domingo y Feriados</h3></div>
                <div className="space-y-3">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between"><span className="text-white/60 text-sm">Boletería</span><span className="font-medium">10:00 - 16:00</span></div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between"><span className="text-white/60 text-sm">Cierre del Parque</span><span className="font-medium">18:00 hs</span></div>
                </div>
              </div>
              <div className="bg-brand-dark p-8 rounded-2xl text-white">
                <h3 className="font-medium mb-6">Tarifas de Ingreso</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Entrada General', sub: 'Mayores de 13 años', price: '$25.800' },
                    { name: 'Menores y Jubilados', sub: '4 a 12 años', price: '$21.000' },
                    { name: 'Menores de 4 años', sub: '', price: 'GRATIS' },
                  ].map((t) => (
                    <div key={t.name} className="bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                      <div><p className="text-sm font-medium">{t.name}</p>{t.sub && <p className="text-xs text-white/40 mt-0.5">{t.sub}</p>}</div>
                      <span className="text-xl font-medium">{t.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-white/40 mt-4">Tu entrada contribuye directamente al trabajo de la fundación.</p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-xl flex justify-between items-center">
              <div className="flex items-center gap-2"><Moon className="text-gray-400" size={16} /><span className="text-sm text-gray-600">Lunes, Martes, Miércoles</span></div>
              <span className="text-sm font-medium text-gray-500">CERRADO</span>
            </div>
          </div>

          {/* Mapa descargable */}
          <div className="text-center">
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Mapa del recorrido</h2>
            <p className="text-sm text-gray-500 mb-8">9 zonas temáticas. Descargá el mapa para planificar tu visita.</p>
            <a href={asset('/mapa-bubalco.jpg')} download="mapa-bubalco-patagonia.jpg" className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm rounded-full hover:bg-brand-dark transition-colors">
              <Download size={18} /> Descargar mapa
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
