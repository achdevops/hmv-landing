# Especificación de producto

## 1. Problema

La propuesta actual reúne sostenibilidad, tecnología y proyectos, pero no separa con claridad identidad, capacidades, exploraciones, proyectos y formas de colaboración. El visitante debe deducir demasiado y no obtiene evidencia ni un siguiente paso específico.

## 2. Resultado del MVP

Una persona debe poder responder en una visita breve:

1. ¿Qué es HMV?
2. ¿Qué capacidades tiene hoy?
3. ¿Qué está construyendo?
4. ¿En qué etapa está cada iniciativa?
5. ¿Cómo puedo colaborar o contactar?

## 3. Alcance incluido

- sitio estático y responsive en Astro;
- rutas independientes ES/EN;
- Home;
- Capabilities;
- Lab;
- Learn;
- Projects;
- detalle público del proyecto costero;
- teaser protegido del proyecto deportivo;
- Collaborate;
- About;
- Contact;
- Privacy;
- 404;
- design system y componentes reutilizables;
- Content Collections tipadas para proyectos;
- formulario conectado a un endpoint configurable;
- Worker separado con Turnstile, validación, CORS, rate limiting básico y Mailgun;
- SEO técnico, sitemap, robots, canonical, hreflang y Open Graph;
- GitHub Actions para checks y despliegue;
- analítica únicamente si se aprueba una opción respetuosa de privacidad.

## 4. Fuera de alcance

- CMS remoto;
- cuentas de usuario;
- panel administrativo;
- pagos, e-commerce o donaciones;
- blog/noticias;
- newsletter;
- carga de adjuntos;
- CRM;
- chat en vivo;
- mapa en tiempo real;
- operación real de drones;
- inferencia de IA desde la web institucional;
- publicación de detalles del proyecto deportivo;
- afirmaciones de impacto no verificadas.

## 5. Métricas iniciales

No se publicarán métricas ficticias. Internamente medir:

- porcentaje de visitantes que abre un proyecto;
- conversiones del formulario completadas;
- tipo de interés seleccionado;
- idioma y página de origen;
- errores del formulario;
- rendimiento Core Web Vitals;
- número de contactos calificados, propuestas de piloto y talleres.

Meta de MVP: una implementación medible y estable. Las metas numéricas se fijarán tras 30–60 días de línea base.

## 6. Historias principales

### Visitante institucional

Como institución, quiero entender el proyecto costero, su etapa y necesidades para decidir si puedo aportar un sitio piloto, datos o financiación.

### Partner tecnológico

Como partner de cloud, IA, IoT o drones, quiero conocer la arquitectura conceptual y los recursos buscados sin acceder a secretos ni información sensible.

### PYME

Como organización, quiero entender las capacidades activas y solicitar una conversación o taller.

### Participante de taller

Como profesional o estudiante, quiero conocer los temas educativos y registrar mi interés.

### Editor de HMV

Como editor, quiero añadir un proyecto mediante contenido tipado, imágenes y traducciones, sin modificar la Home.

## 7. Requisitos funcionales

| ID | Requisito |
|---|---|
| FR-001 | La raíz redirige a /es/ sin bucle |
| FR-002 | Cada página pública tiene equivalente ES/EN o una política explícita de no publicación |
| FR-003 | El selector conserva la página equivalente cuando existe |
| FR-004 | El listado de proyectos se genera desde contenido, no desde tarjetas duplicadas a mano |
| FR-005 | Estado, tags y carácter público/teaser se ven en cada tarjeta |
| FR-006 | El proyecto costero tiene página tipo mini pitch |
| FR-007 | El teaser deportivo no expone mecanismo, arquitectura, mercado específico ni claims de patente |
| FR-008 | El formulario valida en cliente y servidor |
| FR-009 | El envío muestra estados enviando, éxito y error sin recargar |
| FR-010 | El endpoint se configura por variable pública de build |
| FR-011 | Navegación por teclado y menú móvil son operables |
| FR-012 | Las páginas incluyen metadatos y previews sociales |
| FR-013 | La web funciona sin JavaScript salvo menú mejorado, selector y formulario |
| FR-014 | Existe una página de privacidad enlazada junto al formulario |

## 8. Requisitos no funcionales

- HTML semántico y progresive enhancement.
- Sin framework de UI pesado ni SPA cliente.
- JavaScript enviado al cliente solamente donde agrega valor.
- Objetivo Lighthouse en producción: Performance ≥ 90; Accessibility ≥ 95; Best Practices ≥ 95; SEO ≥ 95 en móvil, con tolerancia documentada por servicios externos.
- LCP objetivo ≤ 2.5 s, CLS ≤ 0.1 e INP ≤ 200 ms en percentil 75 cuando haya datos reales.
- Imágenes optimizadas, tamaños declarados y lazy loading fuera del hero.
- Dependencias mínimas y lockfile versionado.
- Sin secretos, datos personales de prueba ni correos reales en logs.

## 9. Modelo de conversión

CTA principal: Explorar proyectos / Explore projects.  
CTA secundario: Colaborar / Collaborate.

El formulario permite clasificar:

- piloto o proyecto;
- colaboración técnica;
- investigación;
- taller o capacitación;
- financiación o programa;
- prensa/comunidad;
- otro.

## 10. Definición global de terminado

El MVP está terminado cuando:

- todas las rutas del sitemap construyen sin error;
- contenido ES/EN fue revisado por una persona;
- no hay enlaces rotos ni placeholders visibles;
- el formulario funciona de extremo a extremo en producción;
- los secretos están fuera de Git;
- la política de privacidad refleja datos y proveedores reales;
- CI y despliegue pasan;
- el dominio personalizado resuelve por HTTPS;
- se completan los criterios P0 del documento 12.


