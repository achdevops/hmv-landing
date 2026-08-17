# Auditoría UI/UX y criterios gráficos

Fecha: 2026-08-17  
Alcance: implementación Astro bilingüe del MVP y assets disponibles en `media/`.

## 1. Resumen ejecutivo

La dirección visual existente es adecuada: costa, paleta sobria, tipografía editorial y geometría de datos construyen una identidad tecnológica vinculada al territorio. El problema no era falta de calidad gráfica, sino falta de continuidad narrativa. La portada concentraba casi todo el impacto visual en el hero; después aparecían grandes áreas de texto sin apoyo, el descriptor desaparecía del header y los iconos de Cloud e IoT no coincidían literalmente con sus etiquetas.

La revisión adopta cuatro decisiones:

1. `holaMundoVerde` se presenta siempre unida y en camel case; `GreenTech Innovation Lab` es un descriptor separado.
2. La propuesta de valor prioriza investigación y formación, sin borrar las capacidades técnicas reales.
3. Se incorpora un bloque editorial que explica la huella física de IA, Cloud y sistemas tokenizados con fuentes primarias.
4. Cada tramo largo de la portada recibe una función visual concreta: territorio, origen familiar, infraestructura, proyecto o aprendizaje.

## 2. Hallazgos y respuesta aplicada

| Hallazgo | Impacto | Respuesta |
|---|---|---|
| El header mostraba solo el nombre | el visitante perdía el posicionamiento al salir del hero | wordmark HTML + descriptor visible en escritorio y footer |
| Hero potente pero demasiado genérico | no distinguía a HMV de un estudio de innovación | nuevo H1 centrado en investigar, formar y diseñar transiciones |
| Cloud usaba hoja + engranaje e IoT usaba bombilla | incoherencia semántica entre texto e icono | las áreas se renombran por propósito: infraestructura sostenible e investigación aplicada |
| El relato no explicaba por qué GreenTech es urgente | faltaba puente entre tecnología y sostenibilidad organizacional | nueva sección sobre infraestructura física, energía, hardware y medición |
| Learn y About eran mayormente texto | ritmo plano y sensación de espacios vacíos | integración de las imágenes de taller y laboratorio ya generadas |
| “Tokenización” podía leerse como promesa sostenible | riesgo de greenwashing o interpretación financiera | copy crítico: utilidad posible, impacto dependiente de arquitectura y aviso educativo |
| Las imágenes generadas podían parecer evidencia | riesgo reputacional | caption visible “Imagen conceptual” y lenguaje de proyecto por etapas |

## 3. Arquitectura narrativa de Home

1. **Hero:** quiénes somos, qué hacemos y dos rutas de entrada: proyectos y formación.
2. **Nuestra perspectiva:** origen de la marca y método familiar de laboratorio.
3. **Por qué GreenTech ahora:** vínculo entre digitalización e infraestructura física.
4. **Áreas de trabajo:** cuatro pilares orientados al propósito.
5. **Investigación en curso:** proyecto costero y teaser protegido por PI.
6. **Método:** Research → Prototype → Pilot → MVP.
7. **Formación:** talleres previstos, alcance y aviso sobre tokenización.
8. **Colaboración:** pregunta enfocada en la capacidad sostenible de la organización.

## 4. Principios de contenido

- Hablar de **investigación**, **aprendizaje**, **hipótesis** y **potencial** hasta que exista evidencia operativa.
- No afirmar que toda tokenización tiene un alto consumo ni que una tecnología es sostenible por definición.
- Explicar que el impacto cambia según energía, intensidad de carbono, eficiencia de software, utilización y vida útil del hardware.
- Presentar sostenibilidad como una capacidad transversal: estrategia, tecnología, operaciones, compras, datos y formación.
- Usar fuentes con fecha para cifras temporales; mantener el copy principal sin números cuando no sean necesarios.
- Separar educación cultural sobre tokenización de asesoramiento financiero, legal o de inversión.

## 5. Sistema gráfico y uso de assets

| Asset público | Ubicación | Función | Alt/caption |
|---|---|---|---|
| `hero-home-greentech.webp` | Home hero | territorio + observación | decorativo, alt vacío |
| `about-maldonado-lab.webp` | Home/About | iniciativa familiar + investigación | alt descriptivo + conceptual |
| `digital-infrastructure-footprint.webp` | Home/Capabilities | infraestructura física + energía | alt descriptivo + fuente |
| `learning-workshops.webp` | Home/Learn | formación y transferencia | alt descriptivo + conceptual |
| `project-coast-hero.webp` | proyectos | investigación costera | alt conceptual, no evidencia |

Reglas:

- no reutilizar la imagen costera para representar centros de datos o talleres;
- no usar iconos raster a menos de 40 px;
- migrar iconos y favicon a SVG cuando se cierre la identidad definitiva;
- conservar `width` y `height`, `loading="lazy"` fuera del hero y WebP optimizado;
- no poner texto esencial dentro de imágenes;
- mantener el teaser deportivo sin visual específico hasta aprobación de PI.

## 6. Fuentes editoriales

- IEA, *Energy and AI* (2025): https://www.iea.org/reports/energy-and-ai
- IEA, *Executive summary — Energy and AI*: https://www.iea.org/reports/energy-and-ai/executive-summary
- Green Software Foundation, *Software Carbon Intensity*: https://greensoftware.foundation/standards/sci/
- Green Software Foundation, *Learn Green Software*: https://learn.greensoftware.foundation/introduction/

La portada enlaza directamente a la IEA para sostener la proyección temporal. La página de capacidades enlaza la IEA y SCI para presentar una ruta de medición, no una declaración de certificación de HMV.

## 7. Criterios de aceptación visual

- El header muestra `holaMundoVerde` sin espacios y el descriptor en pantallas de escritorio.
- El nombre no se parte entre `hola`, `Mundo` y `Verde`.
- Cada imagen conceptual está identificada o es puramente decorativa.
- Home contiene apoyo visual en identidad, propósito, proyecto y formación.
- Ningún asset sugiere una instalación, taller o despliegue ya realizado.
- Los cuatro iconos se relacionan semánticamente con el título de su área.
- No aparecen monedas, símbolos cripto, dashboards inventados ni claims de “cero impacto”.
- Las cifras temporales incluyen fuente primaria enlazada.
- El contenido ES y EN mantiene intención equivalente, no traducción literal forzada.
- La página sigue siendo legible y navegable sin imágenes.

## 8. Próximos pasos de diseño

1. Redibujar isotipo e iconos en SVG sobre una cuadrícula común.
2. Crear favicon simplificado específico para 16 y 32 px.
3. Producir plantillas Open Graph ES/EN de forma determinista.
4. Validar el lockup definitivo en monocromo y sobre fotografía.
5. Reemplazar imágenes conceptuales por fotografía propia cuando existan actividades reales y permisos de uso.
