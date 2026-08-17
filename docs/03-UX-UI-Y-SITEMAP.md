# UX/UI y sitemap

## 1. Arquitectura de información

El sitio se siente moderno y fluido, pero usa páginas reales. Español es el idioma de entrada; la raíz redirige a /es/.

~~~text
/
├── es/
│   ├── capacidades/
│   ├── lab/
│   ├── aprender/
│   ├── proyectos/
│   │   ├── monitoreo-costero-ia-drones/
│   │   └── iniciativa-deportiva/
│   ├── colaborar/
│   ├── nosotros/
│   ├── contacto/
│   └── privacidad/
├── en/
│   ├── capabilities/
│   ├── lab/
│   ├── learn/
│   ├── projects/
│   │   ├── ai-drone-coastal-monitoring/
│   │   └── sports-initiative/
│   ├── collaborate/
│   ├── about/
│   ├── contact/
│   └── privacy/
└── 404.html
~~~

La ruta del teaser deportivo puede retirarse antes del lanzamiento si la revisión de PI indica riesgo. En ese caso, solo habrá una tarjeta no enlazada.

## 2. Navegación

Desktop:

Logo · Proyectos · Capacidades · Lab · Aprender · Colaborar · Nosotros · ES/EN · Contacto

El lockup de escritorio muestra `holaMundoVerde` en camel case y el descriptor `GreenTech Innovation Lab`. En móvil estrecho puede ocultarse solo el descriptor.

En anchos limitados, priorizar:

Logo · Proyectos · Colaborar · ES/EN · Menú

Reglas:

- Contacto es CTA visual, no una navegación paralela.
- El selector de idioma enlaza al equivalente semántico.
- aria-current identifica página actual.
- Escape cierra menú móvil.
- El foco vuelve al disparador al cerrar.

## 3. Home

### 3.1 Hero

Objetivo: explicar HMV en cinco segundos.

Contenido:

- eyebrow: holaMundoVerde · GreenTech Innovation Lab;
- titular centrado en investigación, formación y transición sostenible;
- propuesta de valor que declare iniciativa familiar, sin presentarla como consultora consolidada;
- CTA “Explorar proyectos”;
- CTA “Colaborar”;
- visual GreenTech con costa, datos y nodos; no mostrar un producto terminado.

### 3.2 Perspectiva de marca

Texto breve sobre iniciativa familiar, origen de `holaMundoVerde` y método. Acompañar con la imagen conceptual de mesa, sensores y territorio; no mostrar perfiles personales.

### 3.3 Por qué GreenTech ahora

Bloque editorial que explica:

- que IA, Cloud y tokenización dependen de centros de datos, redes y dispositivos físicos;
- que la huella depende de energía, intensidad de carbono, hardware y arquitectura;
- que tokenizar puede aportar trazabilidad o incentivos, pero no garantiza sostenibilidad;
- que las organizaciones necesitan tres prácticas: medir, diseñar y formar;
- que una cifra temporal debe enlazar una fuente primaria y mostrar su año.

Usar el visual de infraestructura digital y renovables. No usar monedas, símbolos cripto, dashboards inventados ni claims de “cero carbono”.

### 3.4 Áreas de trabajo

Cuatro tarjetas con nombres comprensibles para organizaciones:

1. Infraestructura digital sostenible — Cloud, eficiencia y observabilidad.
2. IA & datos para sostenibilidad — modelos, datos y revisión humana.
3. Investigación aplicada — IoT, sensores y prototipos.
4. Formación GreenTech — lenguaje, criterios y prácticas.

La tecnología habilitante sigue siendo Cloud + IA/Data + IoT + Education, pero la interfaz prioriza el propósito. Cada área enlaza a Capabilities o Learn.

### 3.5 Proyecto flagship

Bloque dominante para monitoreo costero:

- problema;
- hipótesis;
- etapa real;
- recursos buscados;
- CTA a detalle.

No mostrar dashboards inventados como evidencia. Un mockup debe marcarse “Vista conceptual”.

### 3.6 Otros experimentos

Teaser deportivo minimalista con etiqueta “Private exploration / Exploración reservada”. Sin detalles.

### 3.7 Método

Research → Prototype → Pilot → MVP. Explicar que no todo experimento se convierte en producto.

### 3.8 Formación

Presentar talleres previstos, no celebrados:

- GreenTech Labs: de la idea al experimento;
- cultura y fundamentos de tokenización de energías renovables;
- IA, Cloud e IoT para desafíos sostenibles.
- huella física del software y la infraestructura digital.

La imagen debe estar etiquetada como conceptual para no implicar que el taller ya ocurrió.

### 3.9 Colaboración

Mostrar aportes concretos: sitio piloto, datos, investigación, cloud credits, hardware, drones, mentores, financiación.

### 3.10 CTA final

Una sola pregunta: “¿Qué pilar sostenible necesita fortalecer tu organización?”

## 4. Capabilities

Propósito: separar “lo que sabemos hacer” de “lo que estamos construyendo”.

Para cada capacidad:

- qué es;
- qué problemas habilita;
- aplicaciones honestas;
- relación con proyectos;
- CTA de colaboración.

No usar una grilla de logos de proveedores sin autorización o partnership formal.

## 5. Lab

Explica el método:

1. observar un problema;
2. definir una hipótesis;
3. investigar datos, restricciones y actores;
4. construir prueba técnica;
5. buscar partner y sitio piloto;
6. medir, aprender y decidir;
7. convertir, iterar o cerrar.

Incluir principios de innovación responsable, privacidad y documentación.

## 6. Learn

Catálogo simple de temas, sin sistema de reservas:

- talleres previstos;
- audiencia;
- modalidad a definir;
- estado “Interés abierto”;
- CTA que precarga el formulario con “Taller o capacitación”.

No mostrar fechas ni cupos hasta confirmarlos.

## 7. Projects

Filtros opcionales solo si existen más de seis proyectos. MVP:

- introducción;
- tarjetas ordenadas: featured, etapa, fecha;
- leyenda de etapas;
- CTA de colaboración.

No crear filtros vacíos ni buscador innecesario.

## 8. Project detail

La página pública se comporta como mini pitch:

1. nombre, tagline, etapa y tags;
2. problema;
3. por qué importa;
4. hipótesis;
5. enfoque conceptual;
6. flujo “captura → nube → IA → revisión → información”;
7. impacto potencial, claramente marcado;
8. etapa y evidencia disponible;
9. roadmap;
10. colaboración buscada;
11. límites y uso responsable;
12. CTA contextual.

## 9. Collaborate

Rutas de colaboración:

- ofrecer un problema o sitio piloto;
- investigación y validación;
- datos;
- cloud y software;
- IoT, drones o hardware;
- apoyo financiero/programa;
- talleres;
- mentoría técnica.

Cada opción abre Contact con la categoría preseleccionada mediante query string permitida, no datos sensibles.

## 10. About

Contenido institucional:

- qué es la iniciativa;
- por qué nace;
- ubicación general;
- principios;
- etapa actual;
- contacto abierto.

No incluir “Team” vacío ni avatares genéricos.

## 11. Contact

Layout de dos columnas en desktop:

- izquierda: expectativas, usos del contacto y email alternativo;
- derecha: formulario.

Campos:

| Campo | Tipo | Regla |
|---|---|---|
| Nombre | text | requerido, 2–80 |
| Email | email | requerido, máximo 254 |
| Organización | text | opcional, máximo 120 |
| Interés | select | requerido, enum |
| Etapa | select | opcional, enum |
| Mensaje | textarea | requerido, 30–3000 |
| Consentimiento | checkbox | requerido |
| Website | honeypot | oculto visualmente, debe quedar vacío |
| Turnstile token | token | obligatorio en producción |

Estados:

- idle;
- validación local;
- enviando;
- éxito con identificador no sensible;
- error recuperable;
- rate limited;
- servicio no disponible.

## 12. Responsive

- diseño desde 320 px;
- sin scroll horizontal a 320 px;
- tarjetas 1/2/3 columnas según ancho, no según dispositivo;
- hero visual debajo del texto en móvil;
- tablas documentales no se trasladan literalmente a la web;
- objetivos táctiles mínimos 44 × 44 px;
- menú usable a 200% zoom.

## 13. Wireframes textuales

### Home

~~~text
[Header]
[Hero: mensaje + CTAs | visual conceptual]
[Qué es HMV]
[4 capacidades]
[Proyecto flagship]
[Teaser reservado]
[Método por etapas]
[Talleres]
[Formas de colaborar]
[CTA final]
[Footer]
~~~

### Proyecto

~~~text
[Breadcrumb]
[Etapa + título + resumen]
[Problema | por qué importa]
[Hipótesis]
[Diagrama conceptual]
[Impacto potencial]
[Etapa + evidencia]
[Roadmap]
[Qué buscamos]
[Uso responsable]
[CTA]
~~~

## 14. Criterios UX

- cualquier destino principal está a dos interacciones desde Home;
- el usuario distingue capacidad de proyecto;
- etapa es legible sin depender del color;
- el teaser privado no parece un proyecto público vacío;
- no hay carruseles;
- no hay modales promocionales;
- el formulario preserva los valores tras un error recuperable;
- el éxito no promete tiempo de respuesta no acordado.
