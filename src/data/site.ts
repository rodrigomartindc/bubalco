export const ROUTES = {
  home: '/',
  bioparque: '/bioparque',
  horarios: '/bioparque/horarios-y-tarifas',
  faq: '/bioparque/preguntas-frecuentes',
  visitasEscolares: '/visitas-escolares',
  donaciones: '/donaciones',
  nuestroTrabajo: '/nuestro-trabajo',
} as const;

export const WHATSAPP_PHONE = '5492984731612';

const whatsappUrl = (text: string) =>
  `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;

export const WHATSAPP_URL_GENERAL = whatsappUrl('¡Hola, Bubalcó!');
export const WHATSAPP_URL_DONACIONES = whatsappUrl('¡Hola, quiero consultar sobre donaciones!');
export const WHATSAPP_URL_VISITAS_ESCOLARES = whatsappUrl('¡Hola, quiero info sobre visitas escolares!');
export const WHATSAPP_URL_GUIADOS = whatsappUrl('¡Hola, consulta sobre guiados!');
export const WHATSAPP_URL_FAQ = whatsappUrl('¡Hola, tengo una consulta!');

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/bubalcopatagonia/',
  facebook: 'https://www.facebook.com/bubalcopatagonia',
  tiktok: 'https://www.tiktok.com/@bubalcopatagonia',
  linkedin: 'https://www.linkedin.com/company/bubalcopatagonia',
} as const;

export const CONTACT = {
  phoneVisible: '+54 9 298 473-1612',
  address: 'Isla 19, Contralmirante Guerrico',
  location: 'Allen, Río Negro, Argentina',
  donationEmail: 'bubalco@bubalco.com',
} as const;

export const MAP_EMBED_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.5!2d-67.7601751!3d-39.0595151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a30fb8b3461c5%3A0x4edf452aaba697d8!2sFundaci%C3%B3n%20Bubalc%C3%B3%20Patagonia!5e0!3m2!1ses!2sar!4v1714600000000!5m2!1ses!2sar';
