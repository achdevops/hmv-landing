# Plan de imágenes del MVP

Carpeta de originales generados y referencias visuales. Los archivos dentro de media/ no deben usarse automáticamente como evidencia de proyectos reales.

## Marca e iconos

- [Logo reformulado y reglas](brand/README.md)
- [Iconos individuales de áreas](icons/README.md)
- Isotipo: brand/logo-hmv-isotype-v1.png
- Logo horizontal: brand/logo-hmv-horizontal-v1.png
- Green Solutions: icons/icon-green-solutions-v1.png
- AI for Green: icons/icon-ai-for-green-v1.png
- Innovation Lab: icons/icon-innovation-lab-v1.png
- Education: icons/icon-education-v1.png

## Orden de generación

| Orden | Archivo | Prioridad | Uso | Método | Estado |
|---:|---|---|---|---|---|
| 01 | 01-hero-home-greentech.png | P0 | Hero de Home | ImageGen raster | generado · revisión pendiente |
| 02 | 02-project-coast-hero.png | P0 | Hero y card del proyecto costero | ImageGen raster | generado · revisión pendiente |
| 03 | 03-learning-workshops.png | P1 | Sección Learn | ImageGen raster | generado · revisión pendiente |
| 04 | 04-about-maldonado-lab.png | P1 | About/CTA institucional | ImageGen raster | generado · revisión pendiente |
| 05 | 05-digital-infrastructure-footprint-v1.png | P1 | Sección “Por qué GreenTech ahora” | ImageGen raster | generado · integrado |
| 06 | 06-sports-private-abstract.png | P2 | Teaser deportivo, solo con aprobación PI | ImageGen abstracto | bloqueado por PI |
| 06 | og-home-es.png | P1 | Preview social Home ES | Composición HTML/SVG + export | pendiente |
| 07 | og-home-en.png | P1 | Preview social Home EN | Composición HTML/SVG + export | pendiente |
| 08 | og-coast-es.png | P1 | Preview social Coast ES | Composición HTML/SVG + export | pendiente |
| 09 | og-coast-en.png | P1 | Preview social Coast EN | Composición HTML/SVG + export | pendiente |

Los cuatro iconos de capacidades y el diagrama Capture → Cloud → IA → Human Review → Insight deben construirse como SVG/HTML accesible dentro del código, no como imágenes raster generadas.

## 01 — Hero Home GreenTech

Prompt de producción:

~~~text
Use case: stylized-concept
Asset type: landing page hero background
Primary request: visual conceptual de un pequeño GreenTech Innovation Lab familiar que conecta territorio costero, sostenibilidad, datos e investigación tecnológica
Scene/backdrop: paisaje costero atlántico inspirado de forma general en Maldonado, Uruguay, sin hitos identificables ni ubicación precisa; horizonte sereno, agua y formaciones naturales abstractas
Subject: capas discretas de observación, puntos de datos y líneas topográficas integradas en el paisaje; la tecnología se percibe como una herramienta de comprensión, no como ciencia ficción
Style/medium: ilustración editorial premium, mezcla de matte painting suave y visualización de datos minimalista, realismo conceptual
Composition/framing: formato panorámico para hero web; copy en el lado izquierdo y foco visual hacia el centro-derecha; bastante espacio negativo limpio; debe tolerar recorte responsive
Lighting/mood: luz natural suave de primera mañana, serena, curiosa y optimista
Color palette: forest #073B2A, green #0B5D42, leaf #2E8B57, lime #BCEB67, off-white #F5F7F2 y pequeños matices ocean #4B8FA8
Constraints: sin texto, sin logotipos, sin marcas de agua, sin personas identificables, sin edificios icónicos, sin dashboard, sin números, sin paneles flotantes, sin evidencia aparente de un sistema ya desplegado
Avoid: cliché de hoja tecnológica, cerebro con circuitos, ciudad futurista, neón, estética de ONG genérica, saturación excesiva, stock-photo look
~~~

Uso: imagen atmosférica decorativa; alt vacío. Añadir junto al componente una nota visual no visible: conceptual artwork.

## 02 — Proyecto costero

Prompt de producción:

~~~text
Use case: stylized-concept
Asset type: project hero image
Primary request: visual conceptual de investigación para monitoreo responsable de playas turísticas mediante captura aérea autorizada, Cloud y visión computacional
Scene/backdrop: vista aérea oblicua de una costa atlántica natural y no identificable, agua, arena y vegetación, sin multitudes
Subject: un único dron pequeño y genérico a distancia; grilla topográfica tenue y regiones de observación abstractas integradas con sutileza; ninguna detección sobre personas
Style/medium: ilustración editorial tecnológica de alta calidad con realismo moderado, no fotografía documental
Composition/framing: panorámica amplia, foco principal en la geometría natural de la costa, espacio seguro para recortes 16:9 y 4:3
Lighting/mood: luz de día limpia, analítica pero humana
Color palette: forest, ocean blue, sand/off-white y acentos lime muy moderados
Constraints: sin texto, sin logos, sin marcas de agua, sin interfaz flotante, sin bounding boxes sobre personas, sin ubicación exacta, sin resultados o métricas, debe leerse claramente como visual conceptual
Avoid: vigilancia policial, escena de emergencia, multitudes, reconocimiento facial, sci-fi, saturación, dron militar
~~~

Uso: alt ES “Visual conceptual de observación costera mediante captura aérea y análisis de datos.” Alt EN “Conceptual visual of coastal observation using aerial capture and data analysis.”

## 03 — Learn

Prompt de producción:

~~~text
Use case: photorealistic-natural
Asset type: landing page Learn section image
Primary request: escena editorial auténtica de un pequeño taller introductorio GreenTech donde un grupo reducido aprende mediante conversación y prototipado
Scene/backdrop: espacio luminoso y sencillo de laboratorio comunitario, mesa de madera con tarjetas de ideas, notebook sin marca, sensor ambiental genérico, pequeño módulo solar educativo y cuaderno
Subject: tres o cuatro adultos diversos colaborando alrededor de la mesa, encuadrados principalmente desde hombros o manos, sin una persona protagonista y sin rostros claramente identificables
Style/medium: fotografía editorial natural, realista, textura humana y materiales cotidianos, no stock corporativo
Composition/framing: horizontal amplio para sección web, grupo hacia el centro-derecha y margen respirable; acciones naturales, manos interactuando con el prototipo
Lighting/mood: luz natural cálida y suave, curiosidad, aprendizaje y colaboración
Color palette: off-white, madera, forest green y acentos lime discretos
Constraints: sin texto legible, sin logos, sin marcas de agua, sin certificados, sin escenario de conferencia, sin pantallas futuristas, sin afirmar que es un taller ya realizado por HMV; debe funcionar como imagen conceptual editorial
Avoid: poses mirando a cámara, apretones de manos, oficina corporativa genérica, exceso de plantas, iluminación artificial azul, estética publicitaria
~~~

## 04 — About

Prompt de producción:

~~~text
Use case: photorealistic-natural
Asset type: About section editorial image
Primary request: imagen íntima y auténtica de experimentación familiar en un pequeño GreenTech Lab de Maldonado, mostrada sin identificar a sus integrantes
Scene/backdrop: mesa doméstica de trabajo junto a una ventana con luz atlántica suave; mapa costero abstracto sin nombres, cuadernos, piezas de sensor genérico, pequeño prototipo electrónico y materiales cotidianos
Subject: dos pares de manos de personas de generaciones adultas distintas colaborando en el prototipo, señalando notas y conectando componentes; no mostrar rostros
Style/medium: fotografía editorial natural con realismo cálido, detalle de manos y materiales, no stock corporativo
Composition/framing: horizontal para sección About, vista ligeramente cenital, foco en la colaboración y el proceso; espacio limpio en un lateral para composición web
Lighting/mood: tarde luminosa y tranquila, curiosidad, confianza y construcción gradual
Color palette: off-white, madera natural, forest green, ocean blue apagado y lime muy sutil
Constraints: sin texto legible, sin logos, sin marcas de agua, sin personas identificables, sin credenciales, sin pantallas con código, sin producto terminado; debe comunicar iniciativa familiar y experimentación, no empresa consolidada
Avoid: apretón de manos, poses corporativas, laboratorio científico de bata blanca, oficina lujosa, familia posando, estética publicitaria, exceso de decoración ecológica
~~~

## 05 — Infraestructura digital y huella

Generado el 2026-08-17. Derivado optimizado: `public/images/generated/digital-infrastructure-footprint.webp`.

Prompt de producción:

~~~text
Create one wide editorial hero photograph for the website of holaMundoVerde, a small family-led GreenTech Innovation Lab in Maldonado, Uruguay. Subject: the physical footprint behind digital systems—an elegant compact data-center aisle seen through glass, with visible efficient cooling infrastructure, subtly connected in the same landscape to wind turbines and solar panels; a restrained layer of fine data nodes and transparent ledger-like blocks suggests AI, cloud workloads and tokenized traceability. The image must communicate research, measurement, energy awareness and organizational learning, not crypto speculation. Authentic contemporary documentary/editorial photography with a slightly conceptual overlay, calm daylight, sophisticated forest green, ocean teal, warm sand and small lime accents matching a premium sustainability-tech brand. Composition: 16:9, main visual weight on the right and lower center, quieter darker/neutral negative space on the left for website text. No people, no logos, no letters, no numbers, no readable dashboards, no coins, no cryptocurrency symbols, no neon cyberpunk, no glowing globe, no generic leaf icon, no excessive futuristic effects. High realism, subtle depth, restrained contrast, consistent with an existing coastal GreenTech website.
~~~

Uso: pieza editorial conceptual para explicar que toda infraestructura digital tiene componentes físicos y energéticos. No representa instalaciones propias ni una alianza con operadores de centros de datos.

## 06 — Sports private

No generar hasta aprobación de PI. Si se aprueba, usar geometría abstracta sobre reconocimiento y logro; no mostrar deporte, flujo, premio, token, app, interfaz ni mecanismo.

## Open Graph

No pedir a ImageGen que escriba titulares. Reutilizar fondos aprobados y componer logo, títulos y etapa mediante HTML/SVG o una herramienta determinista. Exportar a 1200 × 630 y revisar ES/EN.

## Reglas de archivos

- conservar el original PNG generado;
- producir AVIF/WebP optimizados dentro de public/images/generated durante implementación;
- no sobrescribir una versión aprobada; usar sufijos -v2, -v3;
- registrar prompt final y fecha;
- no subir material confidencial;
- marcar assets conceptuales cuando puedan confundirse con evidencia;
- revisar licencias y procedencia de cualquier referencia externa.
