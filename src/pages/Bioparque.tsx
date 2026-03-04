import { Clock, DollarSign, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { asset } from '../utils/asset';

export default function Bioparque() {
  const { ref, isVisible } = useScrollAnimation();

  const zones = [
    'Área Silvestre', 'Parque de Loros', 'Primates', 'Llanura Pampeana',
    'Felinos', 'Invernadero y Fosas', 'Costa de Río', 'Aviario', 'Corrales',
  ];

  return (
    <div className="pt-[7.5rem] pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Bioparque</p>
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-4">Bioparque Bubalcó Patagonia</h1>
          <p className="text-base text-gray-500 leading-relaxed mb-12 max-w-3xl">
            34 hectáreas a orillas del Río Negro dedicadas al rescate, rehabilitación y conservación de fauna silvestre. Un espacio de educación y concientización ambiental abierto a la comunidad.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            <Link to="/horarios" className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:border-gray-200 transition-colors">
              <Clock size={24} className="text-gray-400 mb-4" />
              <h3 className="text-base font-medium text-gray-900 mb-1">Horarios</h3>
              <p className="text-sm text-gray-500 mb-3">Lun-Vie 12-18hs · Fines de semana 10-17hs</p>
              <span className="text-sm text-brand flex items-center gap-1">Ver horarios <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
            </Link>
            <Link to="/tarifas" className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:border-gray-200 transition-colors">
              <DollarSign size={24} className="text-gray-400 mb-4" />
              <h3 className="text-base font-medium text-gray-900 mb-1">Tarifas</h3>
              <p className="text-sm text-gray-500 mb-3">Desde $21.000 · Menores de 4 gratis</p>
              <span className="text-sm text-brand flex items-center gap-1">Ver tarifas <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
            </Link>
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <Users size={24} className="text-gray-400 mb-4" />
              <h3 className="text-base font-medium text-gray-900 mb-1">Visitas educativas</h3>
              <p className="text-sm text-gray-500 mb-3">Grupos escolares y actividades de concientización</p>
              <span className="text-sm text-gray-400">Consultar disponibilidad</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Mapa del recorrido</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Recorré nuestras 9 zonas temáticas a orillas del Río Negro. Cada área está diseñada para el bienestar de las especies que la habitan.
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
    </div>
  );
}
