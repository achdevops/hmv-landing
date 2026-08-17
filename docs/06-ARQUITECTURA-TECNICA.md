# Arquitectura técnica

## 1. Decisión

Astro en modo estático, HTML generado en build, TypeScript estricto, contenido local tipado y JavaScript cliente mínimo. GitHub Pages sirve el sitio; Cloudflare Worker existe únicamente como backend del formulario.

~~~text
GitHub repository
├── Astro source + content
├── quality workflow
└── deploy workflow
         │
         ▼
    GitHub Pages
    holamundoverde.com

Browser contact form
         │ HTTPS POST
         ▼
 Cloudflare Worker
 ├── origin validation
 ├── validation + anti-spam
 ├── Turnstile Siteverify
 └── Mailgun API
         │
         ▼
 hola@holamundoverde.com
~~~

## 2. Arquitectura del sitio

- output: static;
- site: https://holamundoverde.com;
- sin base al usar dominio raíz;
- trailingSlash: always para URLs consistentes en hosting estático;
- rutas generadas en build;
- assets con hash en dist;
- Content Collections para proyectos;
- ningún adapter SSR;
- ningún secreto en variables PUBLIC_.

Configuración conceptual:

~~~js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://holamundoverde.com",
  output: "static",
  trailingSlash: "always"
});
~~~

La raíz / debe producir una redirección estática compatible con GitHub Pages hacia /es/. Preferir un HTML mínimo con meta refresh y enlace canónico, o evaluar una página de selección accesible. No depender de redirección de servidor.

## 3. i18n

- rutas explícitas por idioma;
- defaultLocale: es;
- traducciones de UI en archivos TypeScript;
- contenido de proyectos localizado y asociado por id;
- helper central para rutas equivalentes;
- lang correcto en html;
- canonical por URL;
- hreflang es, en y x-default;
- no detectar idioma y redirigir automáticamente de forma irreversible.

## 4. Integraciones

| Integración | Cliente | Secreto |
|---|---|---|
| GitHub Pages | build/deploy | token efímero de Actions |
| Cloudflare Worker | fetch desde Contact | URL pública solamente |
| Turnstile | widget | sitekey pública |
| Turnstile Siteverify | Worker | secret binding |
| Mailgun | Worker | API key secret binding |
| Analytics opcional | sitio | id público; sin cookies salvo aprobación |

Variables públicas de build:

- PUBLIC_CONTACT_API_URL;
- PUBLIC_TURNSTILE_SITE_KEY;
- PUBLIC_ANALYTICS_ID, solo si se aprueba.

Bindings del Worker:

- MAILGUN_API_KEY, secret;
- TURNSTILE_SECRET_KEY, secret;
- MAILGUN_DOMAIN, configuración;
- MAILGUN_REGION, configuración US o EU;
- CONTACT_TO, configuración;
- CONTACT_FROM, configuración;
- ALLOWED_ORIGINS, configuración;
- ENVIRONMENT, configuración.

## 5. GitHub Actions

Workflow de calidad para pull requests y main:

1. checkout;
2. instalar Node según .nvmrc;
3. npm ci;
4. format check;
5. lint;
6. astro check;
7. unit tests;
8. build;
9. links internos;
10. pruebas de accesibilidad/rutas sobre preview estática.

Workflow de despliegue:

~~~yaml
name: Deploy site to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Build and upload
        uses: withastro/action@v3

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
~~~

El lockfile debe estar versionado. No usar versiones latest en acciones. Antes de implementar, contrastar las versiones con documentación oficial y Dependabot.

## 6. Dominio y migración

Secuencia segura:

1. crear y probar Pages en la URL temporal;
2. verificar holamundoverde.com en la organización/cuenta de GitHub;
3. registrar el dominio personalizado en Settings → Pages;
4. configurar DNS apex y www según GitHub;
5. esperar propagación;
6. activar Enforce HTTPS;
7. probar apex, www, HTTPS y canonical;
8. mantener el sitio legacy hasta verificar rutas y formulario;
9. hacer corte DNS;
10. observar errores y conservar plan de reversión.

No configurar DNS antes de asociar y verificar el dominio, para reducir riesgo de takeover. Con despliegue por Actions, la configuración en GitHub Pages es la fuente de verdad; no depender exclusivamente de CNAME en el build.

## 7. Arquitectura conceptual del flagship

Esto describe un objetivo de investigación, no un sistema desplegado:

~~~text
Plan de misión y permisos
          │
          ▼
Captura aérea o dataset autorizado
          │
          ▼
Ingesta segura en Cloud
          │
          ├── metadatos
          ├── almacenamiento original
          └── control de acceso y retención
          │
          ▼
Preparación y control de calidad
          │
          ▼
Modelo de visión / análisis
          │
          ▼
Revisión humana y registro de confianza
          │
          ▼
Indicadores, mapa o reporte para decisión
          │
          ▼
Feedback, evaluación y mejora
~~~

Capas:

- captura: drones u otras fuentes, sujeta a permisos;
- edge/IoT: telemetría y metadatos si se valida la necesidad;
- cloud: ingesta, storage, jobs, catálogo y observabilidad;
- IA: modelos versionados, dataset lineage y métricas;
- aplicación: visualización, revisión y exportación;
- gobernanza: roles, privacidad, retención, auditoría y respuesta a incidentes.

No seleccionar proveedor cloud ni modelo en el MVP institucional. La selección depende de créditos, residencia de datos, costo, capacidades del piloto y evaluación técnica.

## 8. Arquitectura de Education

El MVP solo publica oferta e interés. No procesa inscripciones ni pagos. Flujo:

~~~text
Learn page → Contact with workshop preselected → Worker → shared mailbox
~~~

Un sistema de eventos, calendario, streaming o certificados queda fuera de alcance.

## 9. Observabilidad

Sitio:

- resultados de build y deploy;
- pruebas periódicas de rutas;
- reporte Lighthouse programado opcional;
- errores del formulario en cliente sin contenido del mensaje.

Worker:

- request id;
- resultado por categoría;
- latencia de Turnstile y Mailgun;
- códigos de error normalizados;
- sin cuerpo, email, nombre, token ni API key en logs;
- alertas por picos de 429/5xx.

## 10. Recuperación y reversión

- Pages puede redeployar un commit anterior sin reescribir historial;
- el Worker se despliega versionado y conserva versión anterior;
- cambiar CONTACT_API_URL solo mediante build controlado;
- si el Worker falla, mostrar email alternativo;
- documentar DNS anterior antes del corte;
- no apagar hosting legacy hasta completar la lista de aceptación de migración.

