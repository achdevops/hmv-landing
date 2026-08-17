# Plan de imágenes del MVP

Carpeta de originales generados y referencias visuales. Los archivos dentro de media/ no deben usarse automáticamente como evidencia de proyectos reales.

## Orden de generación

| Orden | Archivo | Prioridad | Uso | Método | Estado |
|---:|---|---|---|---|---|
| 01 | 01-hero-home-greentech.png | P0 | Hero de Home | ImageGen raster | en generación |
| 02 | 02-project-coast-hero.png | P0 | Hero y card del proyecto costero | ImageGen raster | pendiente |
| 03 | 03-learning-workshops.png | P1 | Sección Learn | ImageGen raster | pendiente |
| 04 | 04-about-maldonado-lab.png | P1 | About/CTA institucional | ImageGen raster | pendiente |
| 05 | 05-sports-private-abstract.png | P2 | Teaser deportivo, solo con aprobación PI | ImageGen abstracto | bloqueado por PI |
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

Una escena editorial de taller pequeño y diverso, sin rostros protagonistas ni logos, con mesa de prototipado, tarjetas de ideas, sensor genérico y visuales de energía. Se genera después de validar el look de 01 y 02.

## 04 — About

Una composición humana y abstracta sobre experimentación familiar en Maldonado: manos construyendo un pequeño prototipo junto a mapas y notas, sin identificar integrantes. Evitar stock corporativo.

## 05 — Sports private

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

