import { Sun, Moon, ArrowRight, Download, Instagram, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { asset } from '../utils/asset';

const WA_URL = 'https://api.whatsapp.com/send/?phone=5492984731612&text=%C2%A1Hola%2C+Bubalc%C3%B3%21&type=phone_number&app_absent=0';
const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.5!2d-67.7601751!3d-39.0595151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a30fb8b3461c5%3A0x4edf452aaba697d8!2sFundaci%C3%B3n%20Bubalc%C3%B3%20Patagonia!5e0!3m2!1ses!2sar!4v1714600000000!5m2!1ses!2sar';

export default function Bioparque() {
  return (
    <>
      {/* Mobile: scroll-snap slides */}
      <div className="bioparque-slides md:hidden">
        {/* Slide 1: Hero */}
        <section className="bp-slide" style={{ padding: 0 }}>
          <div className="w-full h-full bg-white">
            <div className="h-full flex flex-col">
              <div className="overflow-hidden" style={{ flex: '0 0 40%' }}>
                <img src={asset('/bubalco-fondo.png')} alt="Bubalcó Patagonia" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center px-6 py-4 text-center">
                <p className="text-xs tracking-widest text-brand uppercase mb-2">Bioparque</p>
                <h1 className="text-2xl font-medium text-gray-900 mb-2">Bubalcó Patagonia</h1>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  Refugio y centro de rescate de fauna en la Patagonia. Un recorrido educativo para conocer de cerca las historias de los animales y comprender por qué proteger la naturaleza es fundamental.
                </p>
                <div className="flex flex-col gap-3 w-full">
                  <button onClick={() => { const el = document.getElementById('tarifas-horarios-m'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="px-6 py-3 bg-brand text-white text-sm rounded-full hover:bg-brand-dark transition-colors">
                    Tarifas y Horarios
                  </button>
                  <Link to="/visitas-escolares" className="px-6 py-3 border border-gray-200 text-gray-900 text-sm rounded-full text-center hover:bg-gray-50 transition-colors">
                    Visitas Escolares
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slide 2: Qué es + Legislatura */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="h-full flex flex-col">
              <div className="flex-1 flex flex-col items-center justify-center px-6 py-5 text-center bg-brand-dark rounded-t-[14px]">
                <p className="text-xs tracking-widest text-white/40 uppercase mb-2">Conservación en acción</p>
                <h2 className="text-lg font-medium text-white mb-2">Un refugio para animales que no pueden volver a la naturaleza</h2>
                <p className="text-xs text-white/60 leading-relaxed">
                  En 34 hectáreas de la Patagonia argentina, cuidamos a nuestros habitantes, protegemos a las especies y enseñamos por qué conservar la naturaleza es responsabilidad de todos.
                </p>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center px-6 py-5 text-center">
                <h2 className="text-lg font-medium text-gray-900 mb-3">Un proyecto reconocido por su aporte a la conservación y la educación</h2>
                <img src={asset('/certif-legislatura-bubalco.webp')} alt="Declarado de interés por la Legislatura de Río Negro" className="h-24 mx-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 3: Visitas escolares */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="px-6 py-8 h-full flex flex-col justify-center text-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-3">Educación</p>
              <img src={asset('/bubalco-visitas.jpg')} alt="Visitas escolares en Bubalcó" className="w-full h-28 object-cover rounded-xl mb-3" />
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
          <div className="bp-card bg-white overflow-hidden">
            <div className="h-full flex flex-col">
              <div className="bg-brand/5 px-6 pt-6 pb-5 text-center">
                <p className="text-xs tracking-widest text-brand uppercase mb-3">Historias que merecen<br />ser contadas</p>
                <h2 className="text-xl font-medium text-gray-900 mb-3">De dónde vienen<br />los habitantes del parque</h2>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Cada animal tiene su historia y conocerla nos ayuda a entender por qué protegemos la fauna y sus ecosistemas.
                </p>
              </div>
              <div className="flex-1 flex flex-col justify-center px-6 py-5 text-center">
                <p className="text-sm text-gray-600 leading-relaxed font-medium italic mb-4">
                  Algunos animales llegaron como rescates, otros nacen y se crían en cautiverio dentro de programas de conservación de especies en peligro.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed font-medium italic mb-5">
                  Cada historia nos muestra los desafíos que enfrentan y por qué su cuidado es esencial: en el bioparque y en la naturaleza.
                </p>
                <img src={asset('/leaves-img.png')} alt="" className="h-12 mx-auto opacity-40" />
              </div>
            </div>
          </div>
        </section>

        {/* Slide 5: Por qué abrimos */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="px-6 py-5 h-full flex flex-col justify-center text-center">
              <p className="text-xs tracking-widest text-brand uppercase mb-2">Nuestra misión</p>
              <h2 className="text-lg font-medium text-gray-900 mb-4">Por qué abrimos el bioparque<br />al público</h2>
              <div className="space-y-2">
                {[
                  { n: '1', title: 'Educación para generar cambio', desc: 'Compartimos información sobre las especies y la historia de cada animal, porque conocimiento y empatía son la base para un vínculo responsable con la naturaleza.' },
                  { n: '2', title: 'Animales que necesitan cuidado humano', desc: 'Los animales del recorrido no pueden volver a la naturaleza y están habituados a la presencia respetuosa de las personas. Les damos un hogar seguro.' },
                  { n: '3', title: 'Conectar con la naturaleza', desc: 'Cada vez estamos más alejados de la naturaleza. Conocer a los animales y sus historias nos ayuda a reconectar y comprender por qué protegerla es fundamental.' },
                ].map((b) => (
                  <div key={b.n} className="rounded-xl p-3 text-left" style={{ background: ['rgba(65,117,88,0.06)', 'rgba(43,89,98,0.06)', 'rgba(65,117,88,0.03)'][Number(b.n)-1] }}>
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-brand/15 text-brand text-[11px] font-medium flex items-center justify-center flex-shrink-0 mt-0.5">{b.n}</span>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 mb-0.5">{b.title}</h3>
                        <p className="text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slide 6: Tarifas y Horarios */}
        <section id="tarifas-horarios-m" className="bp-slide">
          <div className="bp-card bg-brand-dark text-white">
            <div className="px-6 pt-5 pb-[50px] h-full flex flex-col justify-between text-center">
              <div>
                <p className="text-xs tracking-widest text-white/40 uppercase mb-2">Planificá tu visita</p>
                <h2 className="text-xl font-medium text-white mb-1">Horarios y Tarifas</h2>
                <p className="text-xs text-white/40">Tu entrada contribuye directamente al trabajo de la fundación</p>
              </div>

              <div className="w-full">
                <h3 className="text-sm font-medium text-white/70 mb-2 text-left">Horarios</h3>
                <div className="bg-white/10 p-4 rounded-xl border border-white/10 mb-2">
                  <div className="flex items-center gap-2 mb-3">
                    <Sun className="text-white/50" size={16} />
                    <span className="text-base font-medium">Jueves a Domingo</span>
                  </div>
                  <div className="flex justify-between text-sm"><span className="text-white/60">Boletería</span><span>10:00 - 16:00</span></div>
                  <div className="flex justify-between text-sm mt-1"><span className="text-white/60">Cierre</span><span>18:00 hs</span></div>
                </div>
                <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-2"><Moon className="text-white/40" size={14} /><span className="text-sm">Lun, Mar, Mié</span></div>
                  <span className="text-sm text-white/50">CERRADO</span>
                </div>
              </div>

              <div className="w-full">
                <h3 className="text-sm font-medium text-white/70 mb-2 text-left">Tarifas</h3>
                <div className="space-y-2">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between text-sm">
                    <span>Entrada General</span><span className="font-medium">$25.800</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between text-sm">
                    <span>Menores y Jubilados</span><span className="font-medium">$21.000</span>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex justify-between text-sm">
                    <span>Menores de 4</span><span className="font-medium">GRATIS</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Slide 7: Descargar mapa */}
        <section className="bp-slide">
          <div className="bp-card bg-white">
            <div className="px-6 py-6 h-full flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-medium text-gray-900 mb-3">Mapa del recorrido</h2>
              <img src={asset('/bubalco-map-0.png')} alt="Mapa del recorrido Bubalcó" className="w-56 h-56 rounded-full object-cover mb-4 mx-auto" />
              <p className="text-sm font-medium text-gray-700 mb-1">9 zonas temáticas.</p>
              <p className="text-sm text-gray-500 mb-6">Descargá el mapa para planificar tu visita.</p>
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
              <div className="relative h-[38%] flex-shrink-0">
                <iframe title="Ubicación Bubalcó" src={embedUrl} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
              <div className="flex-1 px-6 py-4 flex flex-col justify-between items-center text-center">
                <div className="flex flex-col items-center">
                  <Link to="/"><img src={asset('/logos/logo-blanco.png')} alt="Bubalcó Patagonia" className="h-9 mb-3" /></Link>
                  <div className="flex gap-2 mb-3">
                    <a href="https://www.instagram.com/bubalcopatagonia/" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="Instagram"><Instagram size={14} /></a>
                    <a href="https://www.facebook.com/bubalcopatagonia" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="Facebook"><svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
                    <a href="https://www.tiktok.com/@bubalcopatagonia" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="TikTok"><svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
                    <a href="https://www.linkedin.com/company/bubalcopatagonia" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="LinkedIn"><svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                    <a href={WA_URL} target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="WhatsApp"><svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
                  </div>
                  <h4 className="text-sm font-medium mb-2">Contacto</h4>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2"><Phone size={13} className="text-gray-500" /><a href={WA_URL} target="_blank" rel="noreferrer" className="text-sm text-gray-400">+54 9 298 473-1612</a></div>
                    <div className="flex items-center gap-2"><MapPin size={13} className="text-gray-500" /><span className="text-sm text-gray-400">Isla 19, Contralmirante Guerrico</span></div>
                    <p className="text-sm text-gray-400">Allen, Río Negro, Argentina</p>
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
            <img src={asset('/bubalco-map-0.png')} alt="Mapa del recorrido Bubalcó" className="w-72 h-72 rounded-full object-cover mb-6 mx-auto" />
            <p className="text-sm font-medium text-gray-700 mb-1">9 zonas temáticas.</p>
            <p className="text-sm text-gray-500 mb-8">Descargá el mapa para planificar tu visita.</p>
            <a href={asset('/mapa-bubalco.jpg')} download="mapa-bubalco-patagonia.jpg" className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm rounded-full hover:bg-brand-dark transition-colors">
              <Download size={18} /> Descargar mapa
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
