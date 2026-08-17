# Registro de decisiones y pendientes

## 1. Decisiones aceptadas

| ID | Decisión | Razón |
|---|---|---|
| ADR-001 | GreenTech Innovation Lab | Flexible y honesto; no promete incubadora formal |
| ADR-002 | Iniciativa familiar, identidad institucional | Protege privacidad sin ocultar origen |
| ADR-003 | Astro static | SEO, rendimiento y páginas reales |
| ADR-004 | GitHub Pages | Hosting inicial simple con HTTPS |
| ADR-005 | ES/EN por rutas | SEO, compartir y accesibilidad |
| ADR-006 | Projects como corazón | Evidencia y colaboración |
| ADR-007 | Cloud/IA/IoT/Education activas | Refleja capacidad actual |
| ADR-008 | Worker entre web y Mailgun | Protege credenciales |
| ADR-009 | Turnstile server-side | Antispam sin secreto cliente |
| ADR-010 | Coast como flagship | Proyecto divulgable y alineado |
| ADR-011 | Sports como teaser mínimo | Protección de PI |
| ADR-012 | Maldonado, Uruguay | Ubicación suficiente |

## 2. Pendientes bloqueantes antes de producción

| ID | Pregunta | Owner sugerido | Bloquea |
|---|---|---|---|
| OQ-001 | ¿El remitente y destinatario será hola@holamundoverde.com? | HMV | Mailgun/contact |
| OQ-002 | ¿Qué dominio/subdominio enviará y en qué región Mailgun? | HMV técnico/legal | Mailgun/privacy |
| OQ-003 | ¿Quién controla DNS y cuenta GitHub Pages? | HMV técnico | dominio |
| OQ-004 | ¿Se verificó holamundoverde.com en GitHub? | HMV técnico | corte DNS |
| OQ-005 | ¿El repo y la organización serán públicos? | HMV | governance |
| OQ-006 | ¿Cuál es la etapa demostrable del proyecto costero? | proyecto | copy |
| OQ-007 | ¿Existe dataset autorizado o partner? | proyecto | claims/assets |
| OQ-008 | ¿El teaser deportivo puede publicarse? | asesor PI | proyecto 002 |
| OQ-009 | ¿Cuál es la figura/responsable de privacidad que debe figurar? | HMV/legal | privacy/form |
| OQ-010 | ¿Retención del buzón, Worker/Mailgun logs y solicitudes? | HMV/legal | privacy |
| OQ-011 | ¿Logo y assets definitivos? | diseño/HMV | lanzamiento |
| OQ-012 | ¿Qué URLs legacy requieren redirección? | SEO/técnico | migración |

## 3. Pendientes no bloqueantes

- perfiles GitHub/LinkedIn oficiales;
- analítica y proveedor;
- fechas/modalidad de talleres;
- nombre público del proyecto costero;
- proveedor cloud del prototipo;
- sistema futuro de registro de talleres;
- publicación de changelog/progress updates.

## 4. Defaults seguros para desarrollo

Hasta resolver:

- email visible: hola@holamundoverde.com, marcado para verificación interna;
- formulario en modo mock local, no envía;
- proyecto costero: Research;
- teaser deportivo: tarjeta no enlazada y excluida de sitemap, o totalmente omitida;
- analytics: desactivada;
- talleres: “Interés abierto · fechas por confirmar”;
- no logos de partners;
- no métricas de impacto;
- assets conceptuales etiquetados.

Los defaults no autorizan lanzamiento.

## 5. Registro de cambios

| Fecha | Cambio | Autor/aprobación |
|---|---|---|
| 2026-08-17 | Paquete MVP 1.0 consolidado | pendiente de aprobación HMV |

Agregar una fila por cambio de posicionamiento, alcance, visibilidad, etapa o proveedor. Los detalles de implementación ordinarios no necesitan ADR.

