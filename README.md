# Hola Mundo Verde 2.0

Sitio bilingüe ES/EN de Hola Mundo Verde, un GreenTech Innovation Lab familiar de Maldonado, Uruguay. El frontend es Astro estático y el formulario usa un Cloudflare Worker independiente. El contrato de producto está en [docs/README.md](docs/README.md).

## Requisitos y desarrollo

- Node.js 24 LTS (`.nvmrc`)
- npm 11 o compatible

```bash
npm ci
npm run dev
```

`npm run qa` ejecuta formato, lint, chequeo de Astro/TypeScript, tests, build, enlaces y Playwright/axe. Para la primera ejecución E2E: `npx playwright install chromium`.

## Build y preview

```bash
npm run build
npm run preview
```

La raíz genera una transición estática hacia `/es/`. El output queda en `dist/`.

## Configuración del formulario

Build: `SITE_URL` (por defecto `https://dev.holamundoverde.com`).

Frontend: `PUBLIC_CONTACT_API_URL`, `PUBLIC_TURNSTILE_SITE_KEY`.

Secretos del Worker: `MAILGUN_API_KEY`, `TURNSTILE_SECRET_KEY`.

Configuración del Worker: `MAILGUN_DOMAIN`, `MAILGUN_REGION`, `CONTACT_TO`, `CONTACT_FROM`, `ALLOWED_ORIGINS`, `ENVIRONMENT`, `TURNSTILE_HOSTNAMES`, `TURNSTILE_ACTION` y el binding `CONTACT_RATE_LIMITER`.

Sin las variables públicas, Contact funciona en modo local seguro y no envía correo. Los archivos example no contienen valores.

## Worker

```bash
npm run test --workspace @hmv/contact-worker
npm run typecheck --workspace @hmv/contact-worker
npm run dev --workspace @hmv/contact-worker
```

No ejecutar `deploy` hasta confirmar dominio, región, remitente, destinatario, privacidad y autorización.

## Añadir un proyecto

Crear una entrada validada en `src/content/projects/`. Un proyecto `public` exige traducciones, etapa, imagen, alt y necesidades; `teaser` solo almacena copy público aprobado. Nunca guardar información privada, secretos ni detalles protegidos aunque la entrada no se enlace.

## Operación

El workflow Quality valida cada cambio. Deploy Pages publica `develop` en el subdominio de desarrollo, que permanece con `noindex`. Los pasos de dominio, Worker, DNS, migración y rollback están en [docs/RUNBOOK-LANZAMIENTO.md](docs/RUNBOOK-LANZAMIENTO.md). Canal institucional propuesto, pendiente de verificación: `hola@holamundoverde.com`.
