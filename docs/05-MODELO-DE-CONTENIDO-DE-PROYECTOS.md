# Modelo de contenido de proyectos

## 1. Objetivo

Agregar, traducir y ordenar proyectos sin editar componentes. Astro Content Collections valida contenido durante el build.

## 2. Visibilidad

| Tipo | Uso | Página |
|---|---|---|
| public | Información aprobada para divulgación | Completa |
| teaser | Existencia y tema general aprobados | Mínima |
| private | Solo repositorio privado o gestor externo | No se genera |

La visibilidad no sustituye una revisión de PI. El repositorio del sitio puede ser público; por ello no se almacena información confidencial ni siquiera con draft: true.

## 3. Estados

Idea → Research → Prototype → Pilot → MVP → Active → Completed

Reglas:

- la etapa describe evidencia, no ambición;
- el cambio de etapa requiere nota de decisión;
- “Pilot” implica partner/contexto y criterios acordados;
- “MVP” implica una propuesta usable por su audiencia objetivo;
- “Active” no significa comercialmente disponible.

## 4. Esquema lógico

~~~yaml
id: project-001
slug:
  es: monitoreo-costero-ia-drones
  en: ai-drone-coastal-monitoring
visibility: public
stage: research
featured: true
order: 10
title:
  es: Monitoreo de costas con IA y drones
  en: AI and drone coastal monitoring
summary:
  es: ...
  en: ...
tags: [ai, cloud, drones, computer-vision, coast]
capabilities: [ai-data, cloud, iot]
impactThemes: [environmental, operational, public-interest]
heroImage: /images/projects/coast/hero.webp
heroAlt:
  es: ...
  en: ...
ogImage: /images/og/project-coast-es.png
updatedAt: 2026-08-17
contactInterest: pilot
evidence:
  - type: hypothesis
    label:
      es: Hipótesis inicial
      en: Initial hypothesis
needs:
  - pilot-site
  - data
  - research
  - cloud-credits
seo:
  noindex: false
  title:
    es: ...
    en: ...
~~~

El cuerpo Markdown contiene: problema, contexto, hipótesis, enfoque, impacto potencial, evidencia, roadmap, colaboración, riesgos y disclaimer.

## 5. Validación propuesta con Zod

Enums:

- visibility: public, teaser, private;
- stage: idea, research, prototype, pilot, mvp, active, completed;
- capability: ai-data, cloud, iot, education;
- need: pilot-site, data, research, cloud-credits, equipment, funding, mentorship, workshop-host;
- impact theme: environmental, social, educational, operational, economic, public-interest.

Validaciones:

- id sigue project-NNN;
- slugs distintos y no vacíos para ES/EN si visibility no es private;
- summary máximo 180 caracteres por idioma;
- updatedAt es fecha ISO;
- public exige heroImage, alt, problem, hypothesis, stage y needs;
- teaser prohíbe campos sensibles y limita body;
- private produce error si intenta generar URL;
- noindex es true por defecto para teaser hasta aprobación.

## 6. Campos prohibidos

No almacenar:

- secretos o credenciales;
- nombres de personas sin consentimiento;
- coordenadas precisas de pruebas sensibles;
- dataset privado o muestras identificables;
- acuerdos, presupuestos o contactos de partners;
- detalles técnicos no divulgados del proyecto deportivo;
- borradores de reivindicaciones de patente;
- documentos legales.

## 7. Reglas de traducción

- ambos idiomas viven en una misma entidad lógica o comparten el mismo id;
- no se publica una traducción vacía;
- stage, tags y fechas son comunes;
- título, summary, alt, SEO y cuerpo son localizados;
- hreflang enlaza solo equivalentes reales;
- x-default apunta a /es/ o a una página de selección si se crea.

## 8. Card

Campos visibles:

- stage o private;
- title;
- summary;
- máximo tres tags;
- updatedAt opcional si aporta valor;
- CTA si la página existe.

Un teaser no usa “Ver proyecto”; usa “Conocer la exploración” o no tiene enlace.

## 9. Flujo editorial

1. Crear issue con propósito y nivel de visibilidad.
2. Completar checklist de PI, privacidad y evidencia.
3. Redactar ES.
4. Traducir/adaptar EN.
5. Añadir assets y licencias.
6. Ejecutar validación de contenido y build.
7. Revisión técnica.
8. Revisión humana de contenido.
9. Merge y publicación.

## 10. Checklist antes de publicar un proyecto

- [ ] El título no revela información protegida.
- [ ] La etapa coincide con evidencia.
- [ ] Las metas se describen como potenciales.
- [ ] Toda persona identificable dio consentimiento.
- [ ] Datos, mapas y fotografías tienen licencia.
- [ ] Se explican riesgos y revisión humana si hay IA.
- [ ] ES y EN son equivalentes.
- [ ] Open Graph no expone información adicional.
- [ ] La persona responsable aprobó el contenido.


