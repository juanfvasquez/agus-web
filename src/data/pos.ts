export const valueProps = [
  { icon: 'ri-download-cloud-2-line', text: 'Sin instalación compleja' },
  { icon: 'ri-customer-service-2-line', text: 'Soporte incluido' },
  { icon: 'ri-refresh-line', text: 'Actualizaciones continuas' },
  { icon: 'ri-device-line', text: 'Tablet, PC y móvil' },
];

export const problemSolutions = [
  {
    problem: 'Pedidos perdidos entre mesa y cocina',
    solution: 'Comandas digitales en tiempo real',
    icon: 'ri-restaurant-2-line',
  },
  {
    problem: 'Caja sin cuadrar al cierre',
    solution: 'Arqueos y depósitos automatizados',
    icon: 'ri-safe-2-line',
  },
  {
    problem: 'Sin visibilidad del negocio',
    solution: 'Reportes e inventario (Pro+)',
    icon: 'ri-line-chart-line',
  },
];

export const modules = [
  {
    title: 'Operación diaria',
    icon: 'ri-store-3-line',
    plan: 'Standard',
    features: ['Mesas y estaciones', 'Comandas y ventas', 'Flujo de pedidos'],
  },
  {
    title: 'Caja y finanzas',
    icon: 'ri-money-dollar-circle-line',
    plan: 'Standard',
    features: ['Seguimiento de caja', 'Depósitos', 'Arqueos y cierres (Pro)'],
  },
  {
    title: 'Equipo',
    icon: 'ri-team-line',
    plan: 'Pro',
    features: [
      'App empleados (hasta 12)',
      'Pedidos en mesa',
      'Gestión de horarios (Empresarial)',
    ],
  },
  {
    title: 'Escala',
    icon: 'ri-building-4-line',
    plan: 'Empresarial',
    features: ['Multisucursal', 'Multi caja', 'Facturación electrónica'],
  },
];

export interface Plan {
  id: string;
  name: string;
  price: number;
  tagline: string;
  idealFor: string;
  features: string[];
  popular?: boolean;
}

export const plans: Plan[] = [
  {
    id: 'standard',
    name: 'Standard',
    price: 24900,
    tagline: 'Opera tu negocio desde el día uno',
    idealFor: 'Restaurantes pequeños, una caja',
    features: [
      'Gestión de mesas y estaciones',
      'Ventas y generación de comandas',
      'Seguimiento de caja y depósitos',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 59900,
    tagline: 'Crece con control total',
    idealFor: 'Negocios en crecimiento, hasta 12 empleados',
    popular: true,
    features: [
      'Todo lo de Standard',
      'Gestión de inventarios',
      'App empleados (hasta 12): pedidos en mesa + comandas',
      'Arqueos y cierres de caja',
    ],
  },
  {
    id: 'empresarial',
    name: 'Empresarial',
    price: 129900,
    tagline: 'Control total de tu operación',
    idealFor: 'Cadenas y multi-sucursal',
    features: [
      'Todo lo de Pro',
      'Multisucursal y multi caja',
      'Gestión de horarios',
      'Facturación electrónica',
    ],
  },
];

export interface ComparisonRow {
  feature: string;
  standard: boolean | string;
  pro: boolean | string;
  empresarial: boolean | string;
}

export const comparisonRows: ComparisonRow[] = [
  { feature: 'Gestión de mesas', standard: true, pro: true, empresarial: true },
  { feature: 'Estaciones y comandas', standard: true, pro: true, empresarial: true },
  { feature: 'Seguimiento de caja', standard: true, pro: true, empresarial: true },
  { feature: 'Depósitos', standard: true, pro: true, empresarial: true },
  { feature: 'Gestión de inventarios', standard: false, pro: true, empresarial: true },
  { feature: 'App empleados', standard: false, pro: 'Hasta 12', empresarial: 'Ilimitado' },
  { feature: 'Arqueos y cierres de caja', standard: false, pro: true, empresarial: true },
  { feature: 'Multisucursal', standard: false, pro: false, empresarial: true },
  { feature: 'Multi caja', standard: false, pro: false, empresarial: true },
  { feature: 'Gestión de horarios', standard: false, pro: false, empresarial: true },
  { feature: 'Facturación electrónica', standard: false, pro: false, empresarial: true },
];

export const posOnboardingSteps = [
  {
    step: 1,
    title: 'Escríbenos por WhatsApp',
    description: 'Cuéntanos sobre tu negocio y te asesoramos con el plan ideal.',
  },
  {
    step: 2,
    title: 'Configuramos tu negocio',
    description: 'Mesas, productos, usuarios y permisos listos para operar.',
  },
  {
    step: 3,
    title: 'Capacitación y arranque',
    description: 'Tu equipo queda listo para vender en menos de 48 horas.',
  },
];

export const posFaqs = [
  {
    q: '¿Necesito hardware especial?',
    a: 'No. Agus POS funciona en tablet, computador o celular. Solo necesitas conexión a internet. Impresoras térmicas son opcionales para comandas físicas.',
  },
  {
    q: '¿Puedo cambiar de plan después?',
    a: 'Sí. Puedes escalar de Standard a Pro o Empresarial en cualquier momento según crezca tu operación.',
  },
  {
    q: '¿Qué incluye la app de empleados?',
    a: 'Los meseros pueden tomar pedidos en mesa, enviar comandas a cocina y ver el estado de cada orden. Disponible en el plan Pro (hasta 12 empleados).',
  },
  {
    q: '¿Cómo funciona multisucursal?',
    a: 'Con el plan Empresarial gestionas varias sedes desde un panel central: reportes consolidados, inventario por sucursal y control de cajas independientes.',
  },
  {
    q: '¿Hay permanencia mínima?',
    a: 'No exigimos contratos de permanencia. Pagas mes a mes y puedes cancelar cuando lo necesites.',
  },
  {
    q: '¿El soporte está incluido?',
    a: 'Sí. Todos los planes incluyen soporte por WhatsApp y correo para resolver dudas operativas y técnicas.',
  },
  {
    q: '¿Funciona sin internet?',
    a: 'Recomendamos conexión estable para sincronización en tiempo real. Estamos trabajando en modo offline para operaciones críticas.',
  },
  {
    q: '¿Puedo probar antes de contratar?',
    a: 'Escríbenos y te mostramos una demo personalizada de acuerdo al tipo de negocio que manejas.',
  },
];

export function formatPrice(price: number): string {
  return `$${price.toLocaleString('es-CO')}`;
}
