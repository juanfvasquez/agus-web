export const WHATSAPP_NUMBER = '573116456061';
export const WHATSAPP_DISPLAY = '311 645 6061';
export const EMAIL = 'agusdeliveryapp@gmail.com';
export const INSTAGRAM = 'https://instagram.com/agus.app';
export const WEBSITE = 'https://www.agusapp.com';
export const TAGLINE = 'Entregamos buenos momentos';
export const LOCATION = 'Chinchiná, Caldas, Colombia';

export function whatsappUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  general: 'Hola, quiero conocer más sobre Agus App',
  deliveries: 'Hola, quiero vincular mi negocio a Agus App',
  pos: 'Hola, quiero conocer los planes POS de Agus',
  posPlan: (plan: string) => `Hola, me interesa el plan ${plan} POS de Agus`,
  hub: 'Hola, quiero conocer las soluciones de Agus para mi negocio',
  operator: 'Hola, quiero ser operador de Agus App',
  commerce: 'Hola, quiero inscribir mi negocio en Agus App',
};

export type ProductPage = 'home' | 'deliveries' | 'pos';

export interface NavLink {
  href: string;
  label: string;
}

export const productLinks = [
  { href: '/deliveries', label: 'Deliveries', id: 'deliveries' as const },
  { href: '/pos', label: 'POS', id: 'pos' as const },
];
