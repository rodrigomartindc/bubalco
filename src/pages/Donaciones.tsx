import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Donaciones() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="pt-[7.5rem] pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={ref} className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-6">Donaciones</p>
          <h1 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Tu apoyo salva vidas</h1>
          <p className="text-base text-gray-500 leading-relaxed mb-12 max-w-2xl mx-auto">
            Cada aporte nos ayuda a continuar nuestro trabajo de rescate, rehabilitación y conservación
            de fauna silvestre en la Patagonia Argentina.
          </p>
          <div className="rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-16">
            <p className="text-base text-gray-400">Opciones de donación próximamente</p>
          </div>
        </div>
      </div>
    </div>
  );
}
