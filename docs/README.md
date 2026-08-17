# holaMundoVerde 2.0 — paquete de definición del MVP

Versión: 1.0  
Fecha base: 2026-08-17  
Idioma de trabajo: español; producto público bilingüe ES/EN

Este paquete convierte las decisiones de la conversación de descubrimiento en un contrato de producto y construcción para un sitio estático en Astro desplegado en GitHub Pages.

## Resultado que se busca

Un sitio profesional, bilingüe, rápido y ampliable que presente a holaMundoVerde (HMV) como un GreenTech Innovation Lab familiar; demuestre trabajo real mediante proyectos; facilite alianzas, pilotos y talleres; y evite publicar información que comprometa propiedad intelectual.

## Orden recomendado de lectura

1. [00-VISION-Y-DECISIONES.md](00-VISION-Y-DECISIONES.md)
2. [01-ESPECIFICACION-DE-PRODUCTO.md](01-ESPECIFICACION-DE-PRODUCTO.md)
3. [02-BRANDING-Y-DESIGN-SYSTEM.md](02-BRANDING-Y-DESIGN-SYSTEM.md)
4. [03-UX-UI-Y-SITEMAP.md](03-UX-UI-Y-SITEMAP.md)
5. [04-CONTENIDO-ES-EN.md](04-CONTENIDO-ES-EN.md)
6. [05-MODELO-DE-CONTENIDO-DE-PROYECTOS.md](05-MODELO-DE-CONTENIDO-DE-PROYECTOS.md)
7. [06-ARQUITECTURA-TECNICA.md](06-ARQUITECTURA-TECNICA.md)
8. [07-CONTACTO-WORKER-MAILGUN.md](07-CONTACTO-WORKER-MAILGUN.md)
9. [08-ESTRUCTURA-DEL-REPOSITORIO.md](08-ESTRUCTURA-DEL-REPOSITORIO.md)
10. [09-SEO-ACCESIBILIDAD-SEGURIDAD.md](09-SEO-ACCESIBILIDAD-SEGURIDAD.md)
11. [10-PROYECTO-001-COSTAS-IA-DRONES.md](10-PROYECTO-001-COSTAS-IA-DRONES.md)
12. [11-PROYECTO-002-TEASER-DEPORTIVO-PI.md](11-PROYECTO-002-TEASER-DEPORTIVO-PI.md)
13. [12-ROADMAP-BACKLOG-Y-ACEPTACION.md](12-ROADMAP-BACKLOG-Y-ACEPTACION.md)
14. [brand/ASSETS-Y-BRIEFS.md](brand/ASSETS-Y-BRIEFS.md)
15. [13-REGISTRO-DE-DECISIONES-Y-PENDIENTES.md](13-REGISTRO-DE-DECISIONES-Y-PENDIENTES.md)
16. [CODEX-FIRST-MVP-PROMPT.md](CODEX-FIRST-MVP-PROMPT.md)
17. [CODEX-MASTER-PROMPT.md](CODEX-MASTER-PROMPT.md)

## Cómo usarlo con Codex

1. Abrir este repositorio como espacio de trabajo.
2. Para construir primero el sitio estático revisable, entregar a Codex el contenido de CODEX-FIRST-MVP-PROMPT.md.
3. Revisar los assets disponibles y sus prompts en media/README.md.
4. Usar CODEX-MASTER-PROMPT.md para completar integraciones y hardening por hitos.
5. Aprobar las decisiones abiertas antes de producción.
6. No conectar el formulario a credenciales reales hasta haber verificado dominio, remitente, destinatario y política de privacidad.

## Fuentes técnicas oficiales verificadas

- Astro puede desplegarse en GitHub Pages mediante GitHub Actions y su acción oficial: https://docs.astro.build/en/guides/deploy/github/
- GitHub Pages admite dominio personalizado y HTTPS; GitHub recomienda verificar el dominio antes de configurarlo: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
- Los secretos de Workers deben guardarse como bindings secretos, no en el repositorio: https://developers.cloudflare.com/workers/configuration/secrets/
- Turnstile exige validación en servidor mediante Siteverify: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- La API de Mailgun envía mensajes por POST multipart al endpoint del dominio: https://documentation.mailgun.com/docs/mailgun/api-reference/send/mailgun/messages/post-v3--domain-name--messages

## Definición de terminado del paquete

- Todos los archivos Markdown existen y se enlazan desde este índice.
- Las rutas ES/EN, el modelo de proyectos y las reglas de PI son coherentes.
- La arquitectura no expone claves de Mailgun ni Turnstile.
- El backlog contiene criterios verificables, no adjetivos subjetivos.
- El prompt maestro puede entregarse a Codex sin depender de la conversación original.
