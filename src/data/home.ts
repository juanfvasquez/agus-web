export const hero = {
  title: '¿Necesitas un domicilio o entregar un pedido?',
  subtitle:
    'Con Agus es fácil, rápido y confiable. Conectamos tu negocio con clientes y operadores en tiempo real.',
  tagline: 'Entregamos buenos momentos',
  image: '/img/phone-app.png',
  imageAlt: 'Agus App - Aplicación móvil',
  stats: [
    { value: 'Delivery', label: 'Logística en tiempo real' },
    { value: 'POS', label: 'Gestión de comercios' },
    { value: 'App + Web', label: 'iOS, Android y Navegador' },
  ],
};

export const productShowcase = {
  id: 'products',
  title: 'Soluciones para cada necesidad',
  subtitle: 'Elige la herramienta ideal para hacer crecer tu negocio o pedir sin complicaciones',
  products: [
    {
      href: '/deliveries',
      icon: 'ri-motorbike-fill',
      name: 'Agus Deliveries',
      hook: 'Solo pagas cuando vendes',
      description:
        'Conecta tu negocio con clientes que ya buscan lo que vendes. Domicilios, app de comercios y logística incluida.',
      badge: '18% comisión',
      highlights: ['Flota de repartidores activa', 'Catálogo digital en vivo', 'Sin mensualidades fijas'],
    },
    {
      href: '/pos',
      icon: 'ri-computer-line',
      name: 'Agus POS',
      hook: 'Desde $24.900/mes',
      description:
        'Gestiona mesas, comandas en cocina, inventario, arqueos de caja y empleados desde un solo sistema en la nube.',
      badge: '3 planes',
      highlights: ['Comandas en tiempo real', 'Control de inventario y caja', 'App para meseros incluida'],
    },
  ],
};

export const appSection = {
  id: 'app',
  title: 'Pide a domicilio desde la App o directo en la Web',
  description:
    'Encuentra los mejores restaurantes, tiendas y servicios de tu ciudad en un solo lugar. Accede a nuestra plataforma de pedidos para descargar la app en iOS y Android o pedir en línea desde tu navegador.',
  ctaLabel: 'Ir a Pedidos y Descargas',
  ctaHref: '/app',
  playStore: '/img/play-store.webp',
  appStore: '/img/app-store.webp',
  highlights: [
    {
      icon: 'ri-smartphone-line',
      title: 'App iOS y Android',
      description: 'Descarga directa desde App Store y Google Play.',
    },
    {
      icon: 'ri-Global-line',
      title: 'Pedidos por la Web',
      description: 'Pide desde tu computador o celular sin instalar nada.',
    },
    {
      icon: 'ri-map-pin-time-line',
      title: 'Rastreo en vivo',
      description: 'Sigue el estado de tu pedido minuto a minuto.',
    },
  ],
};

export const commerceSection = {
  id: 'business',
  title: 'Comercios aliados que venden más cada día',
  description:
    'Incrementa las ventas de tu negocio. Agus es tu mejor aliado para impulsar tu canal digital y llevar tus productos a la puerta de tus clientes.',
  image: '/img/img-shopkeeper.webp',
  imageAlt: 'Comerciante usando Agus App',
  features: [
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Impulsa tus ventas',
      description:
        'Aumenta el número de pedidos y llega a más clientes activos que buscan tus productos en nuestra App.',
    },
    {
      icon: 'ri-bar-chart-box-line',
      title: 'Gestiona tu negocio',
      description:
        'Administra tu menú, precios y haz seguimiento a tus pedidos en tiempo real desde nuestra plataforma.',
    },
  ],
  primaryCta: { label: 'Ver plan de vinculación', href: '/deliveries' },
  secondaryCta: { label: 'Conoce Agus POS', href: '/pos' },
};

export const onboardingSteps = {
  id: 'services',
  title: 'Inscribe tu negocio en minutos',
  subtitle: 'Empieza a vender por internet y recibir domicilios en 3 sencillos pasos',
  steps: [
    {
      icon: 'ri-store-2-line',
      title: 'Registra tu negocio',
      description: 'Escríbenos por WhatsApp y configuramos el perfil de tu comercio con nuestro equipo.',
    },
    {
      icon: 'ri-layout-grid-line',
      title: 'Agrega tus productos',
      description: 'Subimos tu carta digital con fotos, precios, adicionales y promociones.',
    },
    {
      icon: 'ri-motorbike-line',
      title: 'Recibe pedidos',
      description: 'Activa tu tienda con un toque y nuestra red de operadores entrega por ti.',
    },
  ],
};

export const operatorsSection = {
  id: 'operators',
  title: 'Operadores independientes con ingresos reales',
  description:
    'Incrementa tus ingresos ahora. Aprovecha tu vehículo y gana dinero por cada entrega convirtiéndote en operador aliado de Agus.',
  image: '/img/img-delivery.webp',
  imageAlt: 'Operador de delivery Agus',
  imagePosition: 'right' as const,
  features: [
    {
      icon: 'ri-money-dollar-circle-line',
      title: 'Aumenta tus ingresos',
      description: 'Gana el 100% del valor de cada domicilio realizado con pagos ágiles.',
    },
    {
      icon: 'ri-time-line',
      title: 'Gestiona tu tiempo',
      description: 'Conéctate cuando quieras: tú decides tus horarios y tu ritmo de trabajo.',
    },
  ],
  cta: { label: 'Quiero ser operador', whatsappKey: 'operator' as const },
};

export const clientsSection = {
  id: 'clients',
  title: 'Comercios que confían en Agus',
  subtitle: 'Restaurantes, cafés y tiendas líderes que crecen junto a nuestra red',
  logos: Array.from({ length: 11 }, (_, i) => ({
    src: `/img/clients/logo${i + 1}.jpg`,
    alt: `Cliente aliado ${i + 1}`,
  })),
};

export const contactSection = {
  id: 'contact',
  title: 'Contáctanos hoy mismo',
  subtitle: 'Estás a un clic de pedir a domicilio, vincular tu comercio o unirte como operador',
  mapSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.527824194459!2d-75.60725063423119!3d4.983043793807588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e477bf7b64f8c35%3A0x724799fce59ad3b3!2sCra.%208%20%2312-26%2C%20Chinchin%C3%A1%2C%20Caldas!5e0!3m2!1ses-419!2sco!4v1720851070284!5m2!1ses-419!2sco',
};

export const contactTabs = [
  {
    id: 'commerces',
    label: 'Comercios',
    title: 'Inscribe tu negocio en Agus',
    description:
      'Escríbenos por WhatsApp y un asesor te guiará paso a paso para activar tu comercio en Agus App o implementar Agus POS.',
    whatsappKey: 'commerce' as const,
    cta: 'Contactar asesor comercial',
  },
  {
    id: 'operators',
    label: 'Operadores',
    title: 'Únete a nuestra flota de operadores',
    description:
      'Cuéntanos sobre tu vehículo y disponibilidad. Te explicamos cómo activarte y empezar a generar ingresos con entregas.',
    whatsappKey: 'operator' as const,
    cta: 'Quiero ser operador',
  },
];
