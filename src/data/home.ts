export const hero = {
  title: '¿Necesitas un domicilio o entregar un pedido?',
  subtitle:
    'Con Agus es fácil, rápido y confiable. Conectamos tu negocio con clientes y operadores en tiempo real.',
  tagline: 'Entregamos buenos momentos',
  image: '/img/phone-app.png',
  imageAlt: 'Agus App - Aplicación móvil',
  stats: [
    { value: 'Delivery', label: 'Logística incluida' },
    { value: 'POS', label: 'Gestión de comercios' },
    { value: 'App', label: 'iOS y Android' },
  ],
};

export const productShowcase = {
  id: 'products',
  title: 'Soluciones para cada necesidad',
  subtitle: 'Elige la herramienta ideal para hacer crecer tu negocio',
  products: [
    {
      href: '/deliveries',
      icon: 'ri-motorbike-fill',
      name: 'Agus Deliveries',
      hook: 'Solo pagas cuando vendes',
      description:
        'Conecta tu negocio con clientes que ya buscan lo que vendes. Domicilios, app y logística incluida.',
      badge: '18% comisión',
    },
    {
      href: '/pos',
      icon: 'ri-computer-line',
      name: 'Agus POS',
      hook: 'Desde $24.900/mes',
      description:
        'Gestiona mesas, comandas, inventario, caja y empleados desde un solo sistema.',
      badge: '3 planes',
    },
  ],
};

export const appSection = {
  id: 'app',
  title: 'Descarga la app',
  description:
    'Encuentra los mejores productos y servicios en un solo lugar. Agus es tu mejor aliado para llevar tus productos a la puerta de tu casa.',
  qrImage: '/img/qr.svg',
  playStore: '/img/play-store.webp',
  appStore: '/img/app-store.webp',
};

export const commerceSection = {
  id: 'business',
  title: 'Comercios',
  description:
    'Incrementa las ventas de tu negocio. Agus es tu mejor aliado para impulsar tus ventas y llevar tus productos a la puerta de tus clientes.',
  image: '/img/img-shopkeeper.webp',
  imageAlt: 'Comerciante usando Agus App',
  features: [
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Impulsa tus ventas',
      description:
        'Aumenta el número de pedidos y llega a un mayor número de clientes que usan nuestra App.',
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: 'Gestiona tu negocio',
      description:
        'Administra tus productos y haz seguimiento a tus pedidos a través de nuestra web de comercios.',
    },
  ],
  primaryCta: { label: 'Ver plan de vinculación', href: '/deliveries' },
  secondaryCta: { label: 'Conoce Agus POS', href: '/pos' },
};

export const onboardingSteps = {
  id: 'services',
  title: 'Inscribe tu negocio',
  subtitle: 'Empieza a vender en 3 sencillos pasos',
  steps: [
    { icon: 'ri-add-circle-line', title: 'Registra tu negocio', description: '' },
    { icon: 'ri-layout-grid-line', title: 'Agrega tus productos', description: '' },
    { icon: 'ri-dashboard-line', title: 'Recibe pedidos', description: '' },
  ],
};

export const operatorsSection = {
  id: 'operators',
  title: 'Operadores',
  description:
    'Incrementa tus ingresos ahora. Aprovecha tu vehículo y gana dinero convirtiéndote en operador independiente.',
  image: '/img/img-delivery.webp',
  imageAlt: 'Operador de delivery Agus',
  imagePosition: 'right' as const,
  features: [
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Aumenta tus ingresos',
      description: 'Gana dinero por cada domicilio realizado.',
    },
    {
      icon: 'ri-time-line',
      title: 'Gestiona tu tiempo',
      description: 'Tienes libertad de horario por lo que tú decides tu ritmo laboral.',
    },
  ],
  cta: { label: 'Quiero ser operador', whatsappKey: 'operator' as const },
};

export const clientsSection = {
  id: 'clients',
  title: 'Clientes',
  subtitle: 'Comercios que confían en nosotros',
  logos: Array.from({ length: 11 }, (_, i) => ({
    src: `/img/clients/logo${i + 1}.jpg`,
    alt: `Cliente aliado ${i + 1}`,
  })),
};

export const contactSection = {
  id: 'contact',
  title: 'Contáctanos',
  subtitle: 'Estás a un click de ser parte de Agus',
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.527824194459!2d-75.60725063423119!3d4.983043793807588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e477bf7b64f8c35%3A0x724799fce59ad3b3!2sCra.%208%20%2312-26%2C%20Chinchin%C3%A1%2C%20Caldas!5e0!3m2!1ses-419!2sco!4v1720851070284!5m2!1ses-419!2sco',
};

export const contactTabs = [
  {
    id: 'commerces',
    label: 'Comercios',
    title: 'Inscribe tu negocio',
    description:
      'Escríbenos por WhatsApp y un asesor te guiará para vincular tu comercio a Agus App.',
    whatsappKey: 'commerce' as const,
    cta: 'Contactar por WhatsApp',
  },
  {
    id: 'operators',
    label: 'Operadores',
    title: 'Únete como operador',
    description:
      'Cuéntanos sobre tu vehículo y disponibilidad. Te explicamos cómo empezar a generar ingresos.',
    whatsappKey: 'operator' as const,
    cta: 'Quiero ser operador',
  },
];
