import type { NavLink } from './site';

export const homeNav: NavLink[] = [
  { href: '/#app', label: 'App' },
  { href: '/#business', label: 'Comercios' },
  { href: '/#operators', label: 'Operadores' },
  { href: '/#clients', label: 'Clientes' },
  { href: '/#contact', label: 'Contacto' },
];

export const footerProductLinks: NavLink[] = [
  { href: '/deliveries', label: 'Agus Deliveries' },
  { href: '/pos', label: 'Agus POS' },
];

export const footerHomeLinks: NavLink[] = [
  { href: '/#hero', label: 'Inicio' },
  { href: '/#app', label: 'Descarga la app' },
  { href: '/#business', label: 'Comercios' },
  { href: '/#operators', label: 'Operadores' },
  { href: '/#contact', label: 'Contacto' },
];

export const deliveriesNav: NavLink[] = [
  { href: '/deliveries#beneficios', label: 'Beneficios' },
  { href: '/deliveries#plataforma', label: 'Plataforma' },
  { href: '/deliveries#modelo', label: 'Modelo' },
  { href: '/deliveries#vinculacion', label: 'Vinculación' },
  { href: '/deliveries#faq', label: 'FAQ' },
];

export const posNav: NavLink[] = [
  { href: '/pos#modulos', label: 'Módulos' },
  { href: '/pos#planes', label: 'Planes' },
  { href: '/pos#comparativa', label: 'Comparativa' },
  { href: '/pos#faq', label: 'FAQ' },
];
