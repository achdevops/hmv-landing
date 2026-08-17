export type Locale = 'es' | 'en';

export const routePairs = {
  home: { es: '/es/', en: '/en/' },
  projects: { es: '/es/proyectos/', en: '/en/projects/' },
  capabilities: { es: '/es/capacidades/', en: '/en/capabilities/' },
  lab: { es: '/es/lab/', en: '/en/lab/' },
  learn: { es: '/es/aprender/', en: '/en/learn/' },
  collaborate: { es: '/es/colaborar/', en: '/en/collaborate/' },
  about: { es: '/es/nosotros/', en: '/en/about/' },
  contact: { es: '/es/contacto/', en: '/en/contact/' },
  privacy: { es: '/es/privacidad/', en: '/en/privacy/' },
  coast: {
    es: '/es/proyectos/monitoreo-costero-ia-drones/',
    en: '/en/projects/ai-drone-coastal-monitoring/',
  },
} as const;

export type RouteKey = keyof typeof routePairs;
export const route = (key: RouteKey, locale: Locale) => routePairs[key][locale];
