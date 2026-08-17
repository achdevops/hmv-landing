# Proyecto 001 — Monitoreo de costas con IA y drones

Estado documental: definición inicial; requiere validación con actores locales.  
Visibilidad: pública, con límites.  
Etapa pública inicial: Research, salvo evidencia que justifique otra.  
Nombre de trabajo: Costa Observada. No adoptar como marca sin búsqueda.

## 1. Pitch

### ES

Investigamos cómo la captura aérea, la nube y la visión computacional pueden apoyar una observación más consistente y responsable de playas turísticas.

### EN

We are exploring how aerial capture, cloud computing and computer vision can support more consistent and responsible observation of tourist beaches.

## 2. Problema

La observación de costas puede ser periódica, manual, fragmentada o difícil de comparar. Actores locales podrían beneficiarse de información repetible y contextual para comprender cambios, priorizar revisiones y coordinar respuestas.

Esta formulación es una hipótesis. Antes del prototipo se debe entrevistar a operadores, autoridades, especialistas ambientales y comunidades relevantes para identificar decisiones reales.

## 3. Usuarios y decisiones por validar

| Usuario potencial | Decisión | Pregunta de descubrimiento |
|---|---|---|
| Gestión costera/municipal | dónde revisar | ¿Qué señales cambiarían una inspección? |
| Operador turístico | mantenimiento y operación | ¿Qué observaciones son útiles y permitidas? |
| Equipo ambiental | seguimiento | ¿Qué variables son interpretables y científicamente válidas? |
| Investigación | análisis longitudinal | ¿Qué resolución, frecuencia y metadata se requieren? |
| Protección civil | evaluación situacional | ¿Qué uso es apropiado sin prometer respuesta de emergencia? |

No afirmar que el sistema reemplaza inspección, ciencia, salvamento o decisión pública.

## 4. Casos de uso candidatos

Priorizar después de discovery, no implementar todos:

- cambios de línea o superficie costera;
- acumulación visible de residuos;
- ocupación o patrones agregados, con privacidad;
- zonas de erosión aparente para revisión experta;
- objetos o condiciones que ameritan inspección;
- comparación visual entre misiones autorizadas.

Excluir del primer piloto:

- identificación de personas;
- reconocimiento facial;
- seguimiento individual;
- vigilancia policial;
- decisiones automatizadas de sanción;
- predicción de seguridad para bañistas sin validación especializada;
- vuelo autónomo fuera de permisos.

## 5. Hipótesis

H1: Un protocolo consistente de captura mejora la comparabilidad respecto de imágenes ad hoc.

H2: Un modelo de visión puede priorizar áreas para revisión humana con precisión útil en un caso estrecho.

H3: Una interfaz con evidencia, confianza y trazabilidad es más útil que alertas binarias.

H4: El valor depende tanto de gobernanza, operación y datos como del modelo.

Cada hipótesis debe tener método, métrica, umbral y decisión de continuar/detener antes del piloto.

## 6. Alcance del prototipo

1. Elegir un solo caso de uso.
2. Utilizar dataset autorizado y acotado.
3. Definir protocolo de captura y metadata.
4. Etiquetar una muestra con guía y revisión.
5. Entrenar/evaluar baseline.
6. Producir un reporte o visor conceptual con revisión humana.
7. Probar utilidad con 3–5 usuarios representativos.
8. Documentar límites, costo y siguiente decisión.

No es necesario volar un dron para validar toda la cadena; un dataset autorizado puede reducir riesgo temprano.

## 7. Flujo conceptual

~~~text
Misión autorizada / dataset
  → carga cifrada
  → originales inmutables + metadata
  → control de calidad
  → tiles/frames de trabajo
  → modelo versionado
  → resultados con score y evidencia
  → revisión humana
  → indicador o reporte
  → feedback etiquetado
~~~

## 8. Datos

Ficha mínima del dataset:

- origen y responsable;
- autorización/licencia;
- ubicación general y sensibilidad;
- fechas/estaciones;
- condiciones de captura;
- altitud/resolución si es divulgable;
- clases/labels;
- guía de anotación;
- acuerdo entre anotadores;
- población/personas incidentales;
- retención y eliminación;
- partición train/validation/test por misión o zona para evitar leakage;
- limitaciones y sesgos.

No subir imágenes reales al repositorio público.

## 9. Evaluación de IA

Las métricas dependen del caso. Considerar:

- precision, recall, F1 por clase;
- IoU/mAP para detección o segmentación;
- falsos negativos en riesgos prioritarios;
- calibración/confianza;
- rendimiento por playa, estación, luz, clima, altura y dispositivo;
- tasa de revisión humana;
- tiempo ahorrado o decisión mejorada;
- deriva entre misiones.

Definir baseline no-IA. Un modelo no avanza si no supera el proceso de referencia con un beneficio claro.

## 10. Human in the loop

- toda detección es candidata, no hecho definitivo;
- el revisor puede aceptar, corregir o descartar;
- conservar modelo, versión y fuente;
- mostrar incertidumbre;
- registrar feedback sin identificar personas;
- permitir “no concluyente”.

## 11. Privacidad, seguridad y uso responsable

Antes de capturar:

- validar normativa aeronáutica y permisos aplicables con especialistas;
- coordinar con autoridad/propietario;
- evaluar aviso público;
- minimizar personas en captura;
- definir zonas, horario y retención;
- evaluar DPIA o equivalente;
- restringir acceso;
- documentar incidente y eliminación.

Tratamiento recomendado:

- blur o exclusión de personas/vehículos cuando corresponda;
- resultados agregados;
- cifrado en tránsito y reposo;
- roles mínimos;
- URLs firmadas y expirables;
- audit log;
- borrado verificable.

No publicar asesoramiento legal específico en la web.

## 12. Impacto potencial

Ambiental: observación más consistente y priorización de revisión.  
Operativo: menos tiempo de inspección de material irrelevante.  
Público: mejor contexto para colaboración y aprendizaje.

No cuantificar hasta tener línea base. Medir también impactos negativos: energía cloud, vuelos, almacenamiento, falsos positivos y riesgo de vigilancia.

## 13. Roadmap

### Gate 0 — Discovery

- sponsor/problema;
- entrevistas;
- permisos y privacidad;
- caso único;
- baseline;
- criterio de éxito.

### Gate 1 — Dataset

- fuente autorizada;
- ficha;
- guía de anotación;
- muestra evaluable.

### Gate 2 — Technical proof

- pipeline reproducible;
- baseline y modelo;
- evaluación segmentada;
- cost estimate.

### Gate 3 — Prototype

- interfaz/reporte;
- human review;
- pruebas de utilidad;
- risk review.

### Gate 4 — Pilot

- partner y sitio;
- acuerdo;
- operación;
- métricas;
- decisión.

### Gate 5 — MVP

- caso validado;
- operación sostenible;
- soporte, seguridad y ownership;
- financiación o modelo de continuidad.

## 14. Colaboración buscada

- sitio piloto y problema validable;
- especialistas ambientales/costeros;
- dataset autorizado;
- metodología de investigación;
- drones y operadores habilitados;
- créditos Cloud y tooling;
- anotación/validación;
- mentoría en MLOps/geospatial;
- financiación de prototipo/piloto.

## 15. Contenido público permitido

- problema general;
- hipótesis;
- flujo conceptual;
- etapa;
- impacto potencial;
- límites;
- tipos de colaboración.

Sujeto a aprobación:

- ubicación precisa;
- partner;
- muestra de imagen;
- modelo/proveedor;
- métricas;
- fechas;
- costos;
- datos operativos.

## 16. Criterios para afirmar “Prototype”

- caso de uso único;
- dataset autorizado;
- pipeline reproducible;
- salida revisable;
- métrica contra baseline;
- límites documentados;
- revisión de privacidad;
- demo que no use datos ficticios como prueba real.

## 17. Criterios para afirmar “Pilot”

- partner confirmado;
- sitio y período;
- permisos/acuerdos;
- éxito y stop criteria;
- roles y soporte;
- incident response;
- evaluación de costo e impacto;
- consentimiento/aprobación de comunicación pública.

