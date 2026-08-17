# SEO, accesibilidad y seguridad

## 1. SEO técnico

Cada URL indexable incluye:

- title único, idealmente 30–60 caracteres;
- description única, idealmente 120–160 caracteres sin forzar cortes;
- canonical absoluto;
- hreflang es/en y x-default;
- Open Graph title, description, type, URL, image y alt;
- Twitter card summary_large_image;
- html lang;
- un solo h1;
- JSON-LD únicamente con datos reales.

Generar:

- sitemap-index.xml o sitemap-0.xml;
- robots.txt que apunte al sitemap;
- 404.html;
- web manifest;
- favicon;
- Open Graph de 1200 × 630 para Home y proyecto costero.

No indexar:

- previews de CI;
- páginas teaser no aprobadas;
- rutas duplicadas;
- páginas con traducción incompleta;
- endpoint del Worker.

## 2. Datos estructurados

Usar Organization solo con información verificada:

- name: Hola Mundo Verde;
- url;
- logo;
- email institucional;
- areaServed o addressLocality: Maldonado;
- sameAs solo para perfiles oficiales existentes.

No declarar:

- legalName o taxID sin figura jurídica;
- founders;
- awards;
- offers;
- aggregateRating;
- partnerships no formalizadas.

Para talleres, no usar Event hasta confirmar fecha, lugar/modalidad y disponibilidad.

## 3. Migración SEO

Antes de apagar legacy:

1. inventariar URLs actuales;
2. mapear cada URL con tráfico/backlinks a una ruta nueva;
3. evaluar cómo implementar 301; GitHub Pages por sí solo no ofrece reglas arbitrarias;
4. conservar titles y contenido valioso cuando sea pertinente;
5. validar Search Console;
6. enviar sitemap;
7. revisar 404, indexación y canonical durante 8–12 semanas.

Si se requieren 301 complejos, considerar Cloudflare delante de Pages o conservar redirecciones en el hosting previo. No reemplazar 301 por meta refresh salvo limitación aceptada.

## 4. Accesibilidad

Objetivo: WCAG 2.2 AA.

### Estructura

- skip link visible al foco;
- landmarks header, nav, main, footer;
- headings sin saltos arbitrarios;
- listas y botones semánticos;
- breadcrumbs con nav y aria-label;
- idioma correcto y cambios de idioma marcados.

### Interacción

- todo operable con teclado;
- focus visible;
- sin keyboard traps;
- target mínimo 24 × 24 CSS px según WCAG 2.2; diseño HMV adopta 44 × 44 como objetivo;
- no usar hover como única vía;
- reduced motion;
- tiempo ilimitado para leer/enviar salvo expiración visible de Turnstile.

### Visual

- texto normal ≥ 4.5:1;
- texto grande ≥ 3:1;
- componentes y estados ≥ 3:1;
- zoom a 200% sin pérdida;
- reflow a 320 CSS px;
- no usar color como única señal;
- subtítulos/transcripción si se agrega video.

### Formularios

- label programático;
- required comunicado;
- autocomplete;
- error textual junto al campo;
- resumen de error y foco;
- aria-live prudente para estado;
- consentimiento comprensible;
- alternativa de email.

### Imágenes

- alt que comunica función/contexto;
- alt vacío en decoración;
- diagramas con explicación textual;
- mapas con resumen equivalente;
- no repetir captions literalmente en alt.

## 5. Pruebas de accesibilidad

Automáticas:

- axe en cada template;
- Lighthouse;
- validación HTML;
- contraste de tokens;
- enlaces y nombres accesibles.

Manuales:

- teclado completo;
- VoiceOver en Safari y NVDA/Firefox o equivalente;
- 200% zoom;
- 320 px;
- reduced motion;
- alto contraste del sistema;
- envío del formulario con errores.

Las herramientas automáticas no sustituyen revisión manual.

## 6. Seguridad del sitio

El sitio estático reduce superficie, pero todavía requiere:

- dependencias actualizadas;
- lockfile;
- Dependabot;
- permisos mínimos en Actions;
- acciones versionadas por tag mayor aprobado o SHA si la política lo exige;
- sin HTML no confiable;
- sanitización si se habilita Markdown con HTML;
- enlaces externos con rel apropiado cuando abren nueva pestaña;
- Subresource Integrity cuando sea viable para scripts externos;
- solo HTTPS.

## 7. Content Security Policy

GitHub Pages no permite configurar todos los headers por archivo. Una CSP en meta puede aportar defensa parcial, pero no soporta todas las directivas ni sustituye headers.

Política de partida a adaptar:

~~~text
default-src 'self';
base-uri 'self';
object-src 'none';
frame-ancestors 'none';
img-src 'self' data:;
font-src 'self';
style-src 'self';
script-src 'self' https://challenges.cloudflare.com;
frame-src https://challenges.cloudflare.com;
connect-src 'self' https://[worker-domain] https://challenges.cloudflare.com;
form-action 'self';
upgrade-insecure-requests;
~~~

Turnstile puede requerir directivas actualizadas. Probar la CSP contra la documentación vigente y usar report-only antes de bloquear. Para headers completos, colocar una capa controlable delante de Pages o migrar hosting; no fingir que un archivo _headers funciona en GitHub Pages.

## 8. Headers deseados

Si una capa proxy los permite:

- Content-Security-Policy;
- Strict-Transport-Security tras estabilizar HTTPS;
- X-Content-Type-Options: nosniff;
- Referrer-Policy: strict-origin-when-cross-origin;
- Permissions-Policy negando cámara, micrófono y geolocalización al sitio institucional;
- Cross-Origin-Opener-Policy según compatibilidad;
- frame-ancestors en CSP.

No activar HSTS preload sin entender permanencia, subdominios y operación.

## 9. Privacidad

Principios:

- minimización;
- finalidad clara;
- retención limitada;
- acceso restringido;
- proveedores declarados;
- sin cookies no esenciales por defecto;
- sin datos sensibles en formulario;
- mecanismo de consulta/eliminación;
- revisión legal local antes de producción.

La política final debe incluir fecha, responsable, contacto, campos recogidos, finalidad, conservación, proveedores, transferencias, derechos y cambios.

## 10. Supply chain y CI

- repositorio con 2FA para administradores;
- branch protection;
- secret scanning;
- push protection si está disponible;
- revisión de cambios de workflows;
- GitHub environment para Pages;
- Worker secrets en Cloudflare;
- ningún secreto en GitHub necesario para el sitio estático;
- npm audit se usa como señal, no como único gate sin triage.

## 11. Criterios

- no hay hallazgos axe críticos/serios sin excepción documentada;
- Lighthouse cumple objetivos del Product Spec;
- no hay mixed content;
- canonical y hreflang forman pares correctos;
- teaser privado no aparece en sitemap si no fue aprobado;
- CSP/Turnstile se prueban juntos;
- robots no se usa como mecanismo de confidencialidad;
- el formulario no registra PII en herramientas de analítica.

