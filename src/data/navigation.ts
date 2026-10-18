import type { NavLink } from './site';

export const homeNav: NavLink[] = [
  { href: '/app', label: 'Pedir a domicilio' },
  { href: '/#business', label: 'Comercios' },
  { href: '/#products', label: 'Soluciones' },
  { href: '/#operators', label: 'Operadores' },
  { href: '/#clients', label: 'Aliados' },
  { href: '/#contact', label: 'Contacto' },
];

export const footerProductLinks: NavLink[] = [
  { href: '/app', label: 'Agus App (Pedir a domicilio)' },
  { href: '/deliveries', label: 'Agus Deliveries (Comercios)' },
  { href: '/pos', label: 'Agus POS (Restaurantes)' },
];

export const footerHomeLinks: NavLink[] = [
  { href: '/#hero', label: 'Inicio' },
  { href: '/app', label: 'Descargar App y Pedidos Web' },
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
