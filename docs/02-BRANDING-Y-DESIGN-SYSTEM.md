# Branding y design system

## 1. Posicionamiento visual

La marca debe sentirse como un pequeño laboratorio tecnológico con propósito ambiental: precisa, curiosa, optimista y humana. Proporción guía:

- 45% tecnología: sistemas, datos, mapas, sensores, geometría;
- 35% sostenibilidad: costa, territorio, energía, ciclos, biodiversidad;
- 20% research: hipótesis, experimentos, etapas, diagramas.

Evitar la estética genérica de ONG verde, el exceso de hojas, el neón “IA”, las fotografías corporativas de banco y las promesas futuristas.

## 2. Concepto de identidad

Idea recomendada para explorar en el nuevo logo: un símbolo modular que combine horizonte/onda, brote y nodo de datos. Debe leerse primero como HMV y funcionar a 16 px.

Entregables mínimos:

- logotipo horizontal;
- versión compacta;
- isotipo;
- monocromo claro y oscuro;
- favicon SVG e ICO/PNG;
- archivos SVG originales;
- zona de seguridad y tamaño mínimo;
- prueba sobre fondo claro, oscuro y fotografía.

No generar una marca basada solo en una hoja dentro de un círculo.

## 3. Paleta propuesta

| Token | Valor | Uso |
|---|---|---|
| forest-900 | #073B2A | fondos oscuros, footer |
| forest-700 | #0B5D42 | botón primario, enlaces destacados |
| leaf-500 | #2E8B57 | ilustración, gráficos, tags no textuales |
| lime-300 | #BCEB67 | acento, highlights, foco sobre oscuro |
| cloud-050 | #F5F7F2 | fondo general |
| white | #FFFFFF | superficies |
| ink-900 | #14211D | texto principal |
| slate-600 | #51605A | texto secundario grande |
| ocean-500 | #4B8FA8 | datos/costa; no usar con texto blanco pequeño |
| danger-700 | #A52828 | error |

Contrastes verificados para combinaciones centrales:

| Combinación | Ratio aproximado | Resultado |
|---|---:|---|
| white sobre forest-900 | 12.59:1 | AAA |
| white sobre forest-700 | 7.90:1 | AAA |
| ink-900 sobre cloud-050 | 15.39:1 | AAA |
| ink-900 sobre lime-300 | 12.03:1 | AAA |
| lime-300 sobre forest-900 | 9.12:1 | AAA |

Leaf y ocean son acentos; no se presuponen aptos para texto blanco pequeño.

## 4. Tipografía

Opción libre y estable:

- títulos: Manrope Variable, fallback Arial, sans-serif;
- cuerpo/UI: Inter Variable, fallback system-ui, sans-serif;
- datos/etapas: IBM Plex Mono, fallback ui-monospace.

Si se decide reducir descargas, usar una única variable font o el stack del sistema. Servir fuentes desde el sitio; no depender de Google Fonts en producción.

Escala fluida sugerida:

| Rol | Tamaño |
|---|---|
| display | clamp(2.6rem, 7vw, 6rem) |
| h1 | clamp(2.25rem, 5vw, 4.5rem) |
| h2 | clamp(1.75rem, 3.5vw, 3rem) |
| h3 | clamp(1.25rem, 2vw, 1.75rem) |
| body-lg | 1.125–1.25rem |
| body | 1rem |
| small | 0.875rem |

Ancho de línea: 45–75 caracteres. No justificar texto.

## 5. Espaciado, grid y forma

- base de espaciado: 4 px;
- container máximo: 1200 px;
- gutters: 20 px móvil, 32 px tablet, 48 px desktop;
- grid: 4 columnas móvil, 8 tablet, 12 desktop;
- radios: 8 px controles, 16 px tarjetas, 28 px paneles hero;
- bordes: 1 px con ink al 12–16%;
- sombras suaves y escasas; priorizar borde y contraste;
- secciones: 72–96 px móvil, 112–144 px desktop.

## 6. Componentes

### Header

Logo, navegación principal, selector ES/EN y CTA. Sticky solo si no roba altura. Menú móvil modal o disclosure accesible; foco atrapado si se implementa como diálogo.

### Botones

- primario: forest-700 con texto blanco;
- secundario: transparente con borde forest-700;
- tertiary/link: texto subrayado al hover y focus;
- altura mínima 44 px;
- focus visible de 3 px con offset.

### Project card

Imagen o ilustración, eyebrow de etapa, título, descripción de máximo 160 caracteres, tags, CTA. Toda la tarjeta no debe convertirse en un único bloque de texto duplicado para lectores de pantalla.

### Status badge

Texto + icono; nunca solo color. Estados:

Idea → Research → Prototype → Pilot → MVP → Active → Completed.

### Evidence card

Usar “Objetivo”, “Hipótesis”, “En exploración” o “Por validar” cuando no exista evidencia. Nunca presentar una meta como logro.

### Forms

Label persistente arriba del campo, ayuda y error asociados por aria-describedby, no usar placeholder como etiqueta, autocomplete correcto y resumen de error.

## 7. Movimiento

- duración 160–240 ms;
- movimiento con intención: navegación, feedback, diagrama;
- respetar prefers-reduced-motion;
- sin parallax;
- sin autoplay de video;
- no bloquear contenido con animación de entrada.

## 8. Imágenes

Dirección fotográfica:

- costa uruguaya y territorio real;
- drones/sensores en contexto, solo si son propios o licenciados;
- personas aprendiendo o prototipando sin poses corporativas;
- visualización de datos superpuesta con moderación.

Reglas:

- AVIF/WebP con fallback cuando corresponda;
- ancho/alto declarados;
- texto alternativo funcional;
- no insertar texto importante dentro de imágenes;
- registrar autor, licencia y fecha.

## 9. Voz visual

Usar espacio en blanco, diagramas simples, fotografías amplias y pequeños detalles de datos. La identidad debe poder convivir con proyectos distintos sin que cada uno parezca otra marca.

## 10. Criterios de aceptación de marca

- el isotipo se reconoce a 16, 32 y 48 px;
- funciona en un solo color;
- ningún logo o asset incorpora material sin licencia;
- los tokens existen en CSS y no se duplican colores arbitrarios;
- el foco es visible en todos los controles;
- las combinaciones de texto pasan contraste;
- se entrega un template Open Graph de 1200 × 630.


