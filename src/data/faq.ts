import type { FaqItem } from '../components/FaqAccordion';

export interface FaqSection {
  title: string;
  items: FaqItem[];
}

export const faqSections: FaqSection[] = [
  {
    title: 'Antes de ir',
    items: [
      {
        question: '¿Cuándo puedo visitar el bioparque?',
        answer: 'El bioparque abre durante todo el año. Podés consultar la información vigente en la página de Horarios y Tarifas.',
      },
      {
        question: '¿Necesito reservar?',
        answer: 'No. Podés llegar directamente el día que quieras. La única excepción son las visitas escolares, que requieren coordinación previa.',
      },
      {
        question: '¿Qué conviene saber antes de ir?',
        answer: 'El bioparque es al aire libre, así que te recomendamos revisar el clima y venir con ropa y calzado cómodo.\n\nY algo importante: estás ingresando al hogar de los animales. Las reglas del recorrido existen para protegerlos y respetarlos.',
      },
      {
        question: '¿Puedo llevar comida?',
        answer: 'Sí. Podés ingresar con bebida y alimentos. Te pedimos que sean responsables con los residuos dentro del parque.',
      },
      {
        question: '¿Puedo ingresar con mi mascota?',
        answer: 'No. Por la seguridad de los animales del bioparque no está permitido el ingreso con mascotas.',
      },
      {
        question: '¿Cómo es el ingreso con Certificado Único de Discapacidad (CUD)?',
        answer: 'Las personas con CUD ingresan sin costo. Su acompañante abona únicamente el valor del seguro de entrada. Esta condición aplica solo a entradas individuales, no a grupos o contingentes.',
      },
      {
        question: '¿Mi entrada contribuye al cuidado de los animales?',
        answer: 'Sí, directamente. Cada entrada financia el trabajo de la Fundación: el cuidado diario de los animales, los programas de rescate, recuperación y reinserción de especies. Venir es también una forma de apoyar la conservación.',
      },
    ],
  },
  {
    title: 'El recorrido',
    items: [
      {
        question: '¿Cómo es el recorrido y cuánto dura?',
        answer: 'El recorrido es al aire libre, sobre camino de ripio, y toma aproximadamente 3 horas dependiendo del ritmo de cada uno.\n\nPodés hacerlo de forma libre usando el mapa y los carteles informativos, o sumarte a uno de los guiados incluidos con tu entrada.\n\nRecomendamos venir un día completo: para hacer el recorrido con tranquilidad, tener tiempo de volver a los sectores, y hacer un picnic en la costa del río.',
      },
      {
        question: '¿Los guiados tienen costo adicional?',
        answer: 'No, los guiados están incluidos con tu entrada. Los fines de semana y feriados salen a las 11, 13 y 15 hs desde la plaza de ingreso. Los jueves y viernes consultá horarios disponibles en boletería.',
      },
      {
        question: '¿Necesito reservar para el guiado?',
        answer: 'No. Los guiados son abiertos para todos los visitantes del día. Solo las visitas de grupos escolares requieren coordinación previa.',
      },
      {
        question: '¿Hay servicios dentro del parque?',
        answer: 'Sí. En la plaza de ingreso encontrás confitería, sanitarios y juegos para los más chicos. A mitad del recorrido hay sanitarios, y sobre la costa del río hay mesas para descansar y comer.',
      },
      {
        question: '¿Es accesible para sillas de ruedas o carriolas?',
        answer: 'El recorrido es de ripio, lo que puede dificultar el acceso con sillas de ruedas, sillas de paseo u otros dispositivos. Depende la silla o el carrito se puede hacer sin dificultad.',
      },
    ],
  },
  {
    title: 'Los animales',
    items: [
      {
        question: '¿De dónde vienen los animales del bioparque?',
        answer: 'Todos tienen una historia. Algunos llegaron rescatados o decomisados por Fauna de Neuquén y Río Negro. Otros fueron recibidos desde zoológicos, parques o reservas del país para brindarles mejores condiciones. Algunos fueron rescatados heridos y no pudieron regresar a su hábitat. Ninguno fue capturado de la naturaleza para traerlo al parque.',
      },
      {
        question: '¿Por qué los animales no vuelven a la naturaleza?',
        answer: 'Porque no pueden. Los animales que conocés en el recorrido están habituados a la presencia humana y no tienen las condiciones para sobrevivir en libertad. El bioparque es su hogar permanente, y su historia es parte del trabajo de educación y conservación que hacemos cada día.',
      },
      {
        question: '¿Cuáles son las principales amenazas de las especies?',
        answer: 'Organismos como Bubalcó buscan contribuir a la conservación y protección de los animales y el medioambiente cuyas principales amenazas son:\n\n— Pérdida de hábitat\nLa expansión de los humanos, la deforestación, la urbanización y la agricultura intensiva reducen el espacio disponible para que los animales vivan, encuentren alimento y se reproduzcan.\n\n— Explotación y comercio ilegal\nLa caza furtiva, la pesca excesiva y el comercio ilegal de animales y sus partes, por mascotismo, medicina, coleccionismo y falta de conciencia, peligra su supervivencia y desequilibran los ecosistemas.\n\n— Cambio climático y contaminación\nAfecta directamente la disponibilidad de recursos alimenticios y reproductivos de las especies.',
      },
    ],
  },
];

export const faqItems: FaqItem[] = faqSections.flatMap((s) => s.items);
