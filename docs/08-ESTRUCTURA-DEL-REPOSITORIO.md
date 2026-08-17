# Estructura del repositorio

## 1. Monorepo simple

~~~text
hmv-landing/
├── .github/
│   ├── dependabot.yml
│   └── workflows/
│       ├── quality.yml
│       └── deploy-pages.yml
├── docs/
│   ├── README.md
│   ├── 00-VISION-Y-DECISIONES.md
│   ├── ...
│   └── brand/
│       ├── ASSETS-Y-BRIEFS.md
│       └── licenses/
├── public/
│   ├── favicon.svg
│   ├── icons/
│   ├── images/
│   │   ├── brand/
│   │   ├── projects/coast/
│   │   └── og/
│   ├── robots.txt
│   └── site.webmanifest
├── src/
│   ├── components/
│   │   ├── global/
│   │   ├── home/
│   │   ├── projects/
│   │   ├── contact/
│   │   └── ui/
│   ├── content/
│   │   └── projects/
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── capabilities.ts
│   │   └── workshops.ts
│   ├── i18n/
│   │   ├── ui.ts
│   │   └── routes.ts
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ProjectLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├── es/
│   │   └── en/
│   ├── scripts/
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   └── utilities.css
│   ├── content.config.ts
│   └── env.d.ts
├── tests/
│   ├── unit/
│   └── e2e/
├── worker/
│   ├── src/
│   │   ├── index.ts
│   │   ├── schema.ts
│   │   ├── turnstile.ts
│   │   ├── mailgun.ts
│   │   └── security.ts
│   ├── test/
│   ├── .dev.vars.example
│   ├── package.json
│   ├── tsconfig.json
│   └── wrangler.jsonc
├── .editorconfig
├── .gitignore
├── .nvmrc
├── astro.config.mjs
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
~~~

## 2. Reglas de organización

- components/ui contiene primitivas sin contenido de negocio;
- components/projects representa el modelo tipado;
- pages solo compone y resuelve datos;
- i18n centraliza UI y equivalencias de rutas;
- data contiene listas pequeñas; proyectos viven en Content Collections;
- public solo contiene archivos que se sirven sin transformación;
- no duplicar páginas enteras si un layout puede recibir locale;
- worker tiene dependencias y tests independientes.

## 3. Nombres

- archivos Astro y componentes: PascalCase;
- utilidades TypeScript: camelCase;
- rutas y assets: kebab-case ASCII;
- ids de proyecto: project-NNN;
- textos de UI: claves semánticas, no el texto original;
- variables de entorno: UPPER_SNAKE_CASE.

## 4. Scripts esperados

Raíz:

- dev;
- build;
- preview;
- check;
- lint;
- format:check;
- test;
- test:e2e;
- test:links;
- qa.

Worker:

- dev;
- typecheck;
- test;
- deploy.

El script qa ejecuta todo lo requerido antes de merge sin desplegar.

## 5. Git

Ramas:

- main protegida;
- ramas cortas feat/, fix/, content/, docs/.

Pull request requiere:

- checks verdes;
- captura o preview para cambios visuales;
- revisión de copy para contenido público;
- checklist de PI para proyectos;
- sin secretos;
- changelog no obligatorio en MVP.

Conventional Commits es opcional. Priorizar mensajes claros.

## 6. Dependencias

- instalar Astro localmente;
- TypeScript strict;
- usar integración sitemap oficial si es compatible;
- ESLint/Prettier con plugins mínimos;
- Vitest para lógica;
- Playwright para rutas, formulario y accesibilidad;
- axe-core integrado en pruebas E2E;
- evitar librería de componentes si CSS nativo cubre el diseño;
- no añadir React/Vue/Svelte para interacciones simples;
- commit del package-lock.json;
- Dependabot semanal agrupado.

Las versiones se resuelven al iniciar la implementación, usando releases estables y documentación oficial. No copiar números de versión de este documento como si fueran permanentes.

## 7. Archivos ignorados

Como mínimo:

~~~text
node_modules/
dist/
.astro/
.DS_Store
.env*
!.env.example
.dev.vars*
!.dev.vars.example
coverage/
playwright-report/
test-results/
.wrangler/
~~~

## 8. Root README

Debe contener:

- qué es el repo;
- requisitos;
- instalación;
- desarrollo;
- validación;
- build;
- preview;
- despliegue del sitio;
- despliegue del Worker;
- configuración sin valores secretos;
- cómo añadir un proyecto;
- enlace a docs/README.md;
- responsables/canal institucional.

## 9. Ownership

Si aún no hay usuarios públicos del equipo, no inventar CODEOWNERS. Cuando existan cuentas:

- branding/content: aprobación institucional;
- worker/security: aprobación técnica;
- proyectos: aprobación del responsable de PI;
- workflows: aprobación técnica.

## 10. Criterios de aceptación

- npm ci funciona desde clone limpio;
- npm run qa pasa;
- npm run build genera todas las rutas;
- worker puede instalarse y probarse por separado;
- ninguna ruta importa un secreto;
- añadir un proyecto no exige editar Home;
- README permite que otra persona ejecute el proyecto sin la conversación original.

