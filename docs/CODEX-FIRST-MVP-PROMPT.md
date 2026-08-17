# Primer prompt para construir el MVP 0.1 con Codex

Este prompt está pensado para una tarea nueva de Codex abierta directamente en:

~~~text
/Users/ach/Projects/poc/repos/hmv-landing
~~~

El objetivo es obtener primero un sitio estático completo y revisable. La integración real Cloudflare Worker + Mailgun queda para el siguiente hito, evitando bloquear el desarrollo por credenciales, DNS o decisiones legales.

---

## Inicio del prompt

Trabaja en este repositorio y construye el MVP 0.1 navegable de Hola Mundo Verde 2.0.

### Objetivo de esta tarea

Entrega una primera versión estática, bilingüe y visualmente cuidada del landing y sus páginas principales usando Astro. Debe poder ejecutarse localmente, construirse sin errores y estar preparada para GitHub Pages, pero no debes desplegarla, hacer commit, modificar DNS ni conectar servicios externos.

### Antes de editar

1. Lee completamente AGENTS.md si existe.
2. Revisa el estado de Git y preserva cualquier cambio existente.
3. Lee docs/README.md y todos los documentos enlazados.
4. Trata docs/00, docs/01, docs/02, docs/03, docs/04, docs/05, docs/08, docs/09, docs/10, docs/11 y docs/12 como fuente de verdad del MVP visual.
5. Revisa media/README.md y utiliza los assets que ya existan en media/. Si un asset todavía no existe, crea un fallback con CSS o geometría simple y deja la integración preparada; no descargues imágenes de Internet.
6. Haz un plan breve y continúa con la implementación sin esperar confirmación, salvo que detectes riesgo de sobrescribir trabajo del usuario.

### Alcance que debes implementar ahora

- Astro estable, output static y TypeScript strict.
- Sitio responsive desde 320 px.
- Español como entrada en /es/ y equivalente inglés en /en/.
- Redirección estática accesible desde / hacia /es/.
- Home.
- Capacidades / Capabilities.
- Lab.
- Aprender / Learn.
- Proyectos / Projects.
- Página completa del proyecto de monitoreo costero.
- Teaser deportivo mínimo o completamente omitido según el default más seguro de docs/11.
- Colaborar / Collaborate.
- Nosotros / About.
- Contacto / Contact con formulario accesible en modo demostración, sin envío real.
- Privacidad / Privacy como borrador claramente marcado para revisión antes de producción.
- 404.
- Sitemap, robots, canonical, hreflang y metadata Open Graph básicos.
- Content Collection tipada para proyectos.
- README raíz con instalación, desarrollo, validación y build.
- Workflow de calidad y workflow de GitHub Pages preparados, pero no ejecutados contra producción.

### Fuera de alcance de esta primera tarea

- Cloudflare Worker real.
- Mailgun real.
- Turnstile real.
- Analítica.
- CMS.
- Blog.
- Registro de talleres.
- Operación de drones, datasets reales o modelos de IA.
- Deploy, DNS, secrets, commits o pushes.

### Dirección visual

Construye una identidad GreenTech sobria:

- 45% tecnología: capas, datos, nodos, mapas y precisión;
- 35% sostenibilidad: costa, territorio, ciclos y energía;
- 20% investigación: hipótesis, etapas, diagramas y evidencia.

Usa exactamente los tokens y reglas de docs/02-BRANDING-Y-DESIGN-SYSTEM.md. El flagship costero debe ser el bloque visual dominante de la Home.

Evita:

- apariencia genérica de ONG;
- neón o cliché de inteligencia artificial;
- exceso de hojas;
- carruseles;
- parallax;
- pop-ups;
- dashboards inventados;
- logos de proveedores o partners;
- métricas, testimonios o resultados ficticios.

Hasta contar con un logo aprobado, usa un wordmark tipográfico sencillo “Hola Mundo Verde” y un símbolo CSS discreto. No inventes una marca definitiva.

### Imágenes

Busca primero:

~~~text
media/01-hero-home-greentech.png
media/02-project-coast-hero.png
~~~

Las imágenes son visuales conceptuales, no evidencia de una operación real. Optimízalas para web durante el build o crea derivados en public/images/generated/, manteniendo el original en media/. Declara dimensiones, usa formatos modernos cuando el pipeline lo permita y escribe alt funcional o alt vacío si son decorativas.

No incrustes texto dentro de las imágenes. Todo copy debe ser HTML.

### Contenido

Usa el copy ES/EN de docs/04-CONTENIDO-ES-EN.md. Puedes ajustar longitud para composición, pero no cambies significado, etapa, capacidades ni claims.

Reglas:

- HMV es una iniciativa familiar, no una sociedad afirmada.
- Ubicación pública: Maldonado, Uruguay.
- No mostrar nombres, fotografías ni perfiles del equipo.
- Capacidades activas: Cloud, IA/Data, IoT y Education.
- El proyecto costero empieza en Research salvo evidencia local explícita.
- No presentar impactos potenciales como resultados.
- No publicar detalles del proyecto deportivo.
- Los talleres están previstos; no afirmar que ya se realizaron.

### Contacto en modo demostración

Construye toda la experiencia visual y accesible del formulario, pero no simules falsamente un envío exitoso.

Comportamiento:

- validación cliente progresiva;
- al enviar, mostrar un mensaje claro de que el backend se conectará en el siguiente hito;
- ofrecer mailto:hola@holamundoverde.com como alternativa;
- no almacenar ni transmitir datos;
- incluir advertencia de no enviar información confidencial;
- enlazar Privacy;
- dejar un módulo/adapter bien definido para conectar PUBLIC_CONTACT_API_URL más adelante.

### Arquitectura y componentes mínimos

- BaseLayout y ProjectLayout.
- Header, Footer, SkipLink y LanguageSwitcher.
- Button, Tag y StatusBadge.
- ProjectCard y ProjectStage.
- Hero, SectionIntro y CTASection.
- ContactForm.
- helpers de i18n y rutas equivalentes.
- tokens.css, global.css y estilos por componente o una convención coherente.

No agregues React, Vue, Svelte ni una librería de componentes para resolver interacciones simples.

### Calidad y pruebas

Configura y ejecuta:

- instalación reproducible con lockfile;
- astro check;
- lint;
- format check;
- tests unitarios para rutas/i18n/esquema;
- build;
- comprobación de links internos;
- pruebas E2E mínimas de las rutas principales si el entorno lo permite;
- axe sobre Home, Project Detail y Contact si el entorno lo permite.

Verifica manualmente o mediante capturas:

- Home a 320 px, tablet y desktop;
- menú con teclado;
- selector ES/EN;
- zoom 200%;
- prefers-reduced-motion;
- formulario con errores;
- proyecto costero;
- 404.

### Definición de terminado

No declares finalizada la tarea hasta que:

- todas las rutas construyan;
- no haya enlaces rotos;
- no existan Lorem ipsum, TODOs visibles o placeholders de contenido;
- ES y EN estén completos;
- no haya secretos;
- el teaser deportivo cumpla docs/11;
- el sitio funcione sin JavaScript salvo mejoras del menú y formulario;
- los criterios P0 aplicables de docs/12 estén revisados;
- npm run qa o su equivalente documentado pase.

### Entrega

Al terminar, informa:

1. qué implementaste;
2. rutas disponibles;
3. capturas o evidencia visual;
4. comandos ejecutados y resultados;
5. decisiones asumidas;
6. pendientes para Worker, Mailgun, Turnstile, privacidad y producción;
7. archivos clave;
8. cualquier criterio P0 todavía no cumplido.

No hagas commit ni push.

## Fin del prompt

