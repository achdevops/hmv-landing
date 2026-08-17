# Prompt maestro para Codex

Copiar desde “Inicio del prompt” hasta “Fin del prompt” en una nueva tarea de Codex abierta en el repositorio hmv-landing.

---

## Inicio del prompt

Construye el MVP de Hola Mundo Verde 2.0 en este repositorio.

### Resultado

Implementa un sitio bilingüe ES/EN que presente a Hola Mundo Verde como un GreenTech Innovation Lab familiar en Maldonado, Uruguay. Debe destacar capacidades reales en Cloud, IA/Data, IoT y Education; mostrar como flagship el proyecto de monitoreo costero con IA y drones; proteger estrictamente la iniciativa deportiva; facilitar colaboración y contacto; y desplegar como sitio Astro estático en GitHub Pages.

### Fuente de verdad

Lee completamente, en orden, todos los archivos enlazados por docs/README.md antes de editar. Trátalos como el contrato del producto. Si hay una contradicción:

1. seguridad, privacidad, PI y accesibilidad tienen prioridad;
2. decisiones del registro prevalecen sobre copy ilustrativo;
3. no inventes hechos, métricas, partners, fechas, estatus legal ni resultados;
4. registra la discrepancia y aplica el default más seguro.

No dependas de la conversación que originó los documentos.

### Antes de construir

1. Inspecciona AGENTS.md, README, estado de Git y archivos existentes.
2. Preserva cambios del usuario.
3. Verifica las versiones estables y guías oficiales actuales de Astro, GitHub Pages, Cloudflare Workers, Turnstile y Mailgun antes de fijar configuración.
4. Crea un plan por hitos M0–M5 del documento 12.
5. Identifica los pendientes bloqueantes del documento 13.
6. Puedes avanzar con defaults seguros en local, pero no desplegar ni conectar producción con pendientes bloqueantes.

### Restricciones obligatorias

- Astro output static y TypeScript strict.
- No React/Vue/Svelte salvo necesidad demostrada y aprobada.
- No SPA cliente.
- JavaScript mínimo y progressive enhancement.
- Contenido ES/EN con rutas reales y equivalencias.
- Content Collections tipadas para Projects.
- Proyecto deportivo omitido o teaser mínimo; nunca guardar detalles privados en este repo.
- No exponer secrets en código, variables PUBLIC_, bundles, logs, ejemplos o Git.
- El browser nunca llama Mailgun ni Turnstile Siteverify directamente.
- El Worker valida Origin, método, tamaño, esquema, honeypot, consentimiento, Turnstile y rate limit antes de Mailgun.
- Reply-To contiene el email del visitante; From pertenece al dominio verificado.
- No registrar PII ni cuerpo del formulario.
- WCAG 2.2 AA.
- No usar datos, dashboards, testimonios, logos de partner ni resultados ficticios.
- No realizar deploy, DNS, compra, envío real ni cambio externo sin autorización expresa.

### Implementación esperada

#### Hito M1 — Foundation

- scaffold Astro dentro del repo sin eliminar docs;
- scripts dev, build, preview, check, lint, format:check, test, test:e2e, test:links y qa;
- package-lock y .nvmrc;
- tokens CSS del design system;
- BaseLayout, ProjectLayout;
- Header, Footer, LanguageSwitcher, SkipLink, Button, Tag, StatusBadge;
- navegación responsive accesible;
- rutas ES/EN y 404;
- CI de calidad.

#### Hito M2 — Content experience

- Home completa;
- Capabilities;
- Lab;
- Learn;
- Collaborate;
- About;
- Contact shell;
- Privacy draft marcado para revisión;
- copy de docs/04 adaptado a componentes;
- no placeholders visibles en build de producción.

#### Hito M3 — Projects

- esquema del documento 05;
- listing y cards generados desde contenido;
- template detail;
- proyecto costero del documento 10;
- teaser deportivo según default seguro del documento 11;
- diagrama conceptual accesible;
- assets temporales propios, abstractos y claramente conceptuales; no descargues imágenes sin licencia.

#### Hito M4 — Contact

- formulario con campos, estados y accesibilidad;
- endpoint configurable;
- Worker TypeScript separado;
- validación compartida o equivalente;
- Turnstile server-side;
- Mailgun por región;
- CORS allowlist;
- rate limit mediante mecanismo apropiado de Cloudflare, no memoria global;
- tests unitarios/integración con proveedores mock;
- modo local que no envía email real;
- archivos example sin valores.

#### Hito M5 — Hardening/deploy

- sitemap, robots, canonical, hreflang, OG;
- JSON-LD solo con hechos confirmados;
- axe/Playwright;
- link checker;
- Lighthouse objetivo;
- GitHub Actions Pages conforme a documentación oficial;
- README raíz operativo;
- runbook de dominio/migración/rollback;
- no ejecutar el despliegue sin autorización.

### Calidad visual

Implementa una identidad GreenTech con proporción 45% tecnología, 35% sostenibilidad y 20% research. Usa los tokens definidos; amplio espacio, geometría de datos, detalles costeros y diagramas precisos. Evita estética de ONG genérica, neón IA, exceso de hojas, carousels, pop-ups, parallax y animaciones que bloquean contenido.

El resultado debe ser sobrio, distintivo y usable desde 320 px. No conviertas todos los bloques en tarjetas. El flagship debe dominar visualmente la Home.

### Pruebas y evidencia

Antes de declarar terminado:

1. ejecuta instalación limpia;
2. ejecuta qa y build;
3. verifica todas las rutas ES/EN;
4. revisa a 320, tablet y desktop;
5. prueba teclado, zoom 200% y reduced motion;
6. ejecuta axe en todos los templates;
7. prueba Contact con éxito y cada error usando mocks;
8. busca secretos, TODO, placeholders, claims no aprobados y links rotos;
9. compara contra cada P0 del documento 12;
10. informa cualquier excepción con archivo, impacto y recomendación.

### Forma de trabajo

- Trabaja por hitos pequeños verificables.
- No cambies el alcance silenciosamente.
- Si un pendiente impide una decisión irreversible, implementa la interfaz segura y marca el bloqueo.
- Mantén docs sincronizados si una decisión técnica cambia.
- No hagas commit ni push salvo que se solicite.

### Entrega

Al finalizar, informa:

- qué quedó implementado;
- rutas;
- arquitectura;
- pruebas y resultados;
- pendientes P0;
- variables/configuración requeridas, sin valores;
- pasos manuales para GitHub Pages, Cloudflare, Turnstile, Mailgun y DNS;
- riesgos y rollback;
- archivos clave.

No digas “listo para producción” si queda cualquier bloqueo de M0 o P0.

## Fin del prompt

