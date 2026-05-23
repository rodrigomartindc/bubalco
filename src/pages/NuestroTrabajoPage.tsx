import React from 'react';
import { ArrowRight, Instagram, Phone, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { asset } from '../utils/asset';

const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.5!2d-67.7601751!3d-39.0595151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a30fb8b3461c5%3A0x4edf452aaba697d8!2sFundaci%C3%B3n%20Bubalc%C3%B3%20Patagonia!5e0!3m2!1ses!2sar!4v1714600000000!5m2!1ses!2sar';

const objetivos = [
  'Apoyar la conservación de especies y ecosistemas en peligro de extinción en Argentina y la región patagónica.',
  'Incrementar el conocimiento científico aplicado directamente a la conservación de fauna silvestre.',
  'Promover la conciencia pública sobre la importancia de conservar la naturaleza, convirtiendo cada visita en un acto de cambio.',
];

const amenazas = [
  { title: 'Pérdida de hábitat', desc: 'La expansión humana, la deforestación, la urbanización y la agricultura intensiva reducen el espacio disponible para que los animales silvestres vivan, encuentren alimento y se reproduzcan. Es la principal causa de extinción de especies en Argentina.' },
  { title: 'Explotación y comercio ilegal', desc: 'La caza furtiva, la pesca excesiva y el tráfico ilegal de animales silvestres —impulsado por el mascotismo, la medicina alternativa y el coleccionismo— ponen en peligro la supervivencia de especies y desequilibran ecosistemas completos.' },
  { title: 'Cambio climático y contaminación', desc: 'Afectan directamente la disponibilidad de recursos alimenticios y reproductivos de la fauna silvestre, alterando ciclos naturales que tardaron millones de años en establecerse.' },
];

const valores = [
  { title: 'Bienestar animal', desc: 'Cada decisión parte del bienestar real de cada animal bajo nuestro cuidado. No hay compromiso posible en ese punto.' },
  { title: 'Conocimiento riguroso', desc: 'Actuamos desde el saber científico. Creemos que el conocimiento verdadero es la mejor herramienta contra la indiferencia y la ignorancia.' },
  { title: 'Impacto regional', desc: 'Somos patagónicos. Nuestro trabajo construye identidad, orgullo y responsabilidad sobre el territorio que habitamos.' },
  { title: 'Comunidad', desc: 'La conservación de la fauna silvestre no es tarea de unos pocos. Invitamos a cada persona a ser parte activa de algo que trasciende lo individual.' },
  { title: 'Transparencia', desc: 'Abrimos nuestras puertas, mostramos lo que hacemos y rendimos cuentas. La confianza se construye con hechos.' },
  { title: 'Respeto por la vida', desc: 'Todo ser vivo merece existir en condiciones dignas. Esa convicción guía cada proyecto, cada rescate, cada decisión.' },
];

function PhotoPlaceholder({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`bg-gray-100 flex items-center justify-center ${className}`} style={style}>
      <p className="text-xs text-gray-400 tracking-widest uppercase">Foto</p>
    </div>
  );
}

function FooterSlideContent() {
  const WA = 'https://api.whatsapp.com/send/?phone=5492984731612&text=%C2%A1Hola%2C+Bubalc%C3%B3%21&type=phone_number&app_absent=0';
  return (
    <div className="w-full bg-gray-900 text-white">
      <div className="flex flex-col">
        <div className="relative h-64 flex-shrink-0">
          <iframe title="Ubicación Bubalcó" src={embedUrl} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
        <div className="px-6 py-8 flex flex-col items-center text-center gap-6">
          <div className="flex flex-col items-center">
            <Link to="/"><img src={asset('/logos/logo-blanco.png')} alt="Bubalcó Patagonia" className="h-9 mb-3" /></Link>
            <div className="flex gap-2 mb-3">
              <a href="https://www.instagram.com/bubalcopatagonia/" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="Instagram"><Instagram size={14} /></a>
              <a href="https://www.facebook.com/bubalcopatagonia" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="Facebook"><svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a>
              <a href="https://www.tiktok.com/@bubalcopatagonia" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="TikTok"><svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg></a>
              <a href="https://www.linkedin.com/company/bubalcopatagonia" target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="LinkedIn"><svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              <a href={WA} target="_blank" rel="noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center" aria-label="WhatsApp"><svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg></a>
            </div>
            <h4 className="text-sm font-medium mb-2">Contacto</h4>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2"><Phone size={13} className="text-gray-500" /><a href="https://api.whatsapp.com/send/?phone=5492984731612" target="_blank" rel="noreferrer" className="text-sm text-gray-400">+54 9 298 473-1612</a></div>
              <div className="flex items-center gap-2"><MapPin size={13} className="text-gray-500" /><span className="text-sm text-gray-400">Isla 19, Contralmirante Guerrico</span></div>
              <p className="text-sm text-gray-400">Allen, Río Negro, Argentina</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-4 w-full flex flex-col items-center gap-0.5">
            <p className="text-xs text-gray-500 flex items-center gap-1">Hecho con <Heart size={12} className="text-accent" fill="currentColor" /> para los animales</p>
            <p className="text-xs text-gray-600">© 2026 Fundación Bubalcó Patagonia</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NuestroTrabajoPage() {
  return (
    <>
      {/* ── Mobile: scroll-snap slides ────────────────────────────── */}
      <div className="md:hidden pt-[135px] bg-white">

        {/* Bloque 1: Hero */}
        <section className="w-full bg-white">
          <PhotoPlaceholder className="h-64 w-full" />
          <div className="px-6 pt-8 pb-10 text-center">
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Fundación Bubalcó Patagonia Argentina</p>
            <h1 className="text-3xl font-medium text-gray-900 leading-snug mb-5">Proteger la Biodiversidad</h1>
            <p className="text-base text-gray-500 leading-relaxed mb-3">
              En una isla del río Negro, en el corazón de la Patagonia argentina, Bubalcó trabaja para proteger la fauna silvestre, conservar especies en peligro de extinción y concientizar a la comunidad.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Más de 400 animales refugiados y proyectos activos de rescate, conservación y educación en la región.
            </p>
          </div>
        </section>

        {/* Bloque 2: Misión — fondo suave */}
        <section className="w-full bg-gray-50 border-t border-gray-100">
          <div className="px-6 pt-10 pb-10 text-center">
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Nuestra razón de ser</p>
            <h2 className="text-2xl font-medium text-gray-900 mb-5">Misión y compromiso</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-3">
              Nuestra misión es proteger la fauna silvestre, restaurar el equilibrio natural y concientizar a la comunidad sobre la importancia de conservar la naturaleza.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Trabajamos para que la biodiversidad de la Patagonia, de Argentina y del mundo tenga defensores concretos, con proyectos reales y resultados medibles.
            </p>
            <div className="space-y-3">
              {objetivos.map((o, i) => (
                <div key={i} className="flex gap-4 bg-white rounded-2xl px-5 py-4 border border-gray-100 text-left shadow-sm">
                  <span className="w-6 h-6 rounded-full bg-brand/15 text-brand text-xs font-medium flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{o}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bloque 3: Amenazas — blanco */}
        <section className="w-full bg-white border-t border-gray-100">
          <div className="px-6 pt-10 pb-10 text-center">
            <p className="text-xs tracking-widest text-brand uppercase mb-4">El contexto que nos convoca</p>
            <h2 className="text-2xl font-medium text-gray-900 mb-5">Las principales amenazas a la fauna silvestre</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              Organismos como Fundación Bubalcó nacen como respuesta a una crisis real: la fauna silvestre enfrenta amenazas crecientes que ponen en riesgo la biodiversidad de toda la región y del mundo.
            </p>
            <div className="space-y-4">
              {amenazas.map((a, i) => (
                <div key={i} className="rounded-2xl px-5 py-5 border-l-4 border-brand/30 bg-gray-50 text-left">
                  <p className="text-sm font-semibold text-gray-900 mb-2">{a.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bloque 4: Valores — oscuro */}
        <section className="w-full bg-brand-dark text-white">
          <div className="px-6 pt-10 pb-10 text-center">
            <p className="text-xs tracking-widest text-white/40 uppercase mb-4">Nuestros valores</p>
            <h2 className="text-2xl font-medium text-white mb-5">Lo que nos mueve</h2>
            <p className="text-base text-white/60 leading-relaxed mb-8">
              Bubalcó es una convicción: que la naturaleza merece defensores concretos y que el conocimiento verdadero es la herramienta de cambio más poderosa.
            </p>
            <div className="space-y-3">
              {valores.map((v, i) => (
                <div key={i} className="rounded-2xl px-5 py-4 text-left" style={{ background: 'rgba(255,255,255,0.07)' }}>
                  <p className="text-sm font-medium text-white mb-1.5">{v.title}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bloque 5: Refugio — foto + texto */}
        <section className="w-full bg-white">
          <PhotoPlaceholder className="h-64 w-full" />
          <div className="px-6 pt-8 pb-10 text-center">
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Refugio</p>
            <h2 className="text-2xl font-medium text-gray-900 mb-5">Una casa para animales que no pueden volver a la naturaleza</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              El Bioparque Bubalcó Patagonia es un espacio con instalaciones únicas en la región para el cuidado de animales silvestres que no pueden regresar a su hábitat natural.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Ubicado en una isla del río Negro, con 34 hectáreas íntegramente destinadas a los animales. Es hogar de más de 400 animales silvestres y cuenta con un equipo dedicado a garantizarles una vida digna y con bienestar.
            </p>
          </div>
        </section>

        {/* Bloque 6: Conservación — fondo suave + foto */}
        <section className="w-full bg-gray-50 border-t border-gray-100">
          <PhotoPlaceholder className="h-64 w-full" />
          <div className="px-6 pt-8 pb-10 text-center">
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Conservación</p>
            <h2 className="text-2xl font-medium text-gray-900 mb-5">Acciones para proteger</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              Desarrollamos proyectos activos de conservación de fauna silvestre con especies de Argentina y de todo el mundo.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Trabajamos en la conservación de especies en peligro de extinción a través de programas concretos: reproducción controlada, reinserción en hábitat natural, investigación científica aplicada y educación ambiental.
            </p>
          </div>
        </section>

        {/* Bloque 7: Rescate — blanco */}
        <section className="w-full bg-white border-t border-gray-100">
          <div className="px-6 pt-10 pb-10 text-center">
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Rescate</p>
            <h2 className="text-2xl font-medium text-gray-900 mb-5">Cuando la fauna silvestre necesita ayuda</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-4">
              Rescate y rehabilitación de fauna silvestre en Río Negro y Neuquén.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-6">
              En Bubalcó asistimos con rescates, tránsitos, liberaciones y cuidados permanentes de fauna silvestre a Fauna Río Negro y Neuquén. Colaboramos con instituciones afines y con la comunidad cuando es necesario.
            </p>
            <div className="bg-brand/5 rounded-2xl px-5 py-5 border border-brand/10 mb-6 text-left">
              <p className="text-base text-gray-700 leading-relaxed">
                Hoy el <strong>40%</strong> de los animales que habitan el bioparque provienen de rescates cuya reinserción en la naturaleza no fue posible.
              </p>
            </div>
            <p className="text-base text-gray-500 leading-relaxed">
              También recibimos animales de otros centros, antiguos zoológicos y particulares que ya no pueden garantizarles las mejores condiciones. Para todos ellos, Bubalcó es una segunda oportunidad.
            </p>
          </div>
        </section>

        {/* Bloque 8: Educación — oscuro */}
        <section className="w-full bg-brand-dark text-white">
          <div className="px-6 pt-10 pb-10 text-center">
            <p className="text-xs tracking-widest text-white/40 uppercase mb-4">Educación Ambiental</p>
            <h2 className="text-2xl font-medium text-white mb-5">El conocimiento es la base del cambio</h2>
            <p className="text-base text-white/60 leading-relaxed mb-4">
              Abrimos nuestras puertas a la comunidad, las escuelas y a todo aquel que quiera conectar con la naturaleza y sumar al proyecto.
            </p>
            <p className="text-base text-white/60 leading-relaxed mb-4">
              En Bubalcó creemos que la conservación de la fauna silvestre empieza por el conocimiento y la empatía. Por eso trabajamos de la mano con la comunidad de Río Negro y la Patagonia, recibimos escuelas y desarrollamos espacios de aprendizaje para todo público.
            </p>
            <p className="text-base text-white/60 leading-relaxed mb-4">
              Una experiencia de educación ambiental concreta: una forma de enseñar, concientizar y lograr que el amor por los animales se convierta en acción real.
            </p>
            <p className="text-base text-white/40 italic leading-relaxed mb-8">
              Que nada le gane al verdadero conocimiento.
            </p>
            <Link to="/visitas-escolares" className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 text-sm tracking-wide rounded-full hover:bg-gray-100 transition-colors">
              Visitas educativas <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>

        {/* Bloque 9: Footer */}
        <section className="w-full">
          <FooterSlideContent />
        </section>

      </div>

      {/* ── Desktop: normal flow ───────────────────────────────────── */}
      <div className="hidden md:block pt-[9rem] pb-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-24">

          {/* Hero */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest text-brand uppercase mb-4">Fundación Bubalcó Patagonia Argentina</p>
              <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Proteger la Biodiversidad</h1>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                En una isla del río Negro, en el corazón de la Patagonia argentina, Bubalcó trabaja para proteger la fauna silvestre, conservar especies en peligro de extinción y concientizar a la comunidad.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Más de 400 animales refugiados y proyectos activos de rescate, conservación y educación en la región.
              </p>
            </div>
            <PhotoPlaceholder className="rounded-2xl h-80" />
          </div>

          {/* Misión */}
          <div>
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Nuestra razón de ser</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-4">Misión y compromiso</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-4 max-w-3xl">
              Nuestra misión es proteger la fauna silvestre, restaurar el equilibrio natural y concientizar a la comunidad sobre la importancia de conservar la naturaleza.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-3xl">
              Trabajamos para que la biodiversidad de la Patagonia, de Argentina y del mundo tenga defensores concretos, con proyectos reales y resultados medibles.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {objetivos.map((o, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex gap-4">
                  <span className="w-6 h-6 rounded-full bg-brand/15 text-brand text-xs font-medium flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{o}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Amenazas */}
          <div>
            <p className="text-xs tracking-widest text-brand uppercase mb-4">El contexto que nos convoca</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-4">Las principales amenazas a la fauna silvestre</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-3xl">
              Organismos como Fundación Bubalcó nacen como respuesta a una crisis real: la fauna silvestre enfrenta amenazas crecientes que ponen en riesgo la biodiversidad de toda la región y del mundo.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {amenazas.map((a, i) => (
                <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-sm font-medium text-gray-900 mb-3">{a.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Valores */}
          <div className="bg-brand-dark rounded-2xl p-10">
            <p className="text-xs tracking-widest text-white/40 uppercase mb-4">Nuestros valores</p>
            <h2 className="text-3xl font-medium text-white mb-4">Lo que nos mueve</h2>
            <p className="text-base text-white/60 leading-relaxed mb-8 max-w-2xl">
              Bubalcó es una convicción: que la naturaleza merece defensores concretos y que el conocimiento verdadero es la herramienta de cambio más poderosa.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {valores.map((v, i) => (
                <div key={i} className="bg-white/8 rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.07)' }}>
                  <h3 className="text-sm font-medium text-white mb-2">{v.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Refugio */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <PhotoPlaceholder className="rounded-2xl h-80" />
            <div>
              <p className="text-xs tracking-widest text-brand uppercase mb-4">Refugio</p>
              <h2 className="text-3xl font-medium text-gray-900 mb-4">Una casa para animales que no pueden volver a la naturaleza</h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                El Bioparque Bubalcó Patagonia es un espacio con instalaciones únicas en la región para el cuidado de animales silvestres que no pueden regresar a su hábitat natural.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Ubicado en una isla del río Negro, con 34 hectáreas íntegramente destinadas a los animales. Es hogar de más de 400 animales silvestres y cuenta con un equipo dedicado a garantizarles una vida digna y con bienestar.
              </p>
            </div>
          </div>

          {/* Conservación */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest text-brand uppercase mb-4">Conservación</p>
              <h2 className="text-3xl font-medium text-gray-900 mb-4">Acciones para proteger</h2>
              <p className="text-base text-gray-500 leading-relaxed mb-4">
                Desarrollamos proyectos activos de conservación de fauna silvestre con especies de Argentina y de todo el mundo.
              </p>
              <p className="text-base text-gray-500 leading-relaxed">
                Trabajamos en la conservación de especies en peligro de extinción a través de programas concretos: reproducción controlada, reinserción en hábitat natural, investigación científica aplicada y educación ambiental.
              </p>
            </div>
            <PhotoPlaceholder className="rounded-2xl h-80" />
          </div>

          {/* Rescate */}
          <div>
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Rescate</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-4">Cuando la fauna silvestre necesita ayuda</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-4 max-w-3xl">
              Rescate y rehabilitación de fauna silvestre en Río Negro y Neuquén.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-6 max-w-3xl">
              En Bubalcó asistimos con rescates, tránsitos, liberaciones y cuidados permanentes de fauna silvestre a Fauna Río Negro y Neuquén. Colaboramos con instituciones afines y con la comunidad cuando es necesario.
            </p>
            <div className="bg-brand/5 rounded-2xl px-8 py-6 border border-brand/10 mb-6 max-w-2xl">
              <p className="text-base text-gray-700 leading-relaxed">
                Hoy el <strong>40%</strong> de los animales que habitan el bioparque provienen de rescates cuya reinserción en la naturaleza no fue posible.
              </p>
            </div>
            <p className="text-base text-gray-500 leading-relaxed max-w-3xl">
              También recibimos animales de otros centros, antiguos zoológicos y particulares que ya no pueden garantizarles las mejores condiciones. Para todos ellos, Bubalcó es una segunda oportunidad.
            </p>
          </div>

          {/* Educación */}
          <div>
            <p className="text-xs tracking-widest text-brand uppercase mb-4">Educación Ambiental</p>
            <h2 className="text-3xl font-medium text-gray-900 mb-4">El conocimiento es la base del cambio</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-4 max-w-3xl">
              Abrimos nuestras puertas a la comunidad, las escuelas y a todo aquel que quiera conectar con la naturaleza y sumar al proyecto.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-4 max-w-3xl">
              En Bubalcó creemos que la conservación de la fauna silvestre empieza por el conocimiento y la empatía. Por eso trabajamos de la mano con la comunidad de Río Negro y la Patagonia, recibimos escuelas y desarrollamos espacios de aprendizaje para todo público.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-4 max-w-3xl">
              Una experiencia de educación ambiental concreta: una forma de enseñar, concientizar y lograr que el amor por los animales se convierta en acción real.
            </p>
            <p className="text-base text-gray-500 italic leading-relaxed mb-8 max-w-3xl">
              Que nada le gane al verdadero conocimiento.
            </p>
            <Link to="/visitas-escolares" className="group inline-flex items-center gap-2 px-8 py-4 bg-brand text-white text-sm tracking-wide rounded-full hover:bg-brand-dark transition-colors">
              Visitas educativas <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
