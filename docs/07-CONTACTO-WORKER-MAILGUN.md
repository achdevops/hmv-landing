# Contacto: Cloudflare Worker + Mailgun

## 1. Contrato

Endpoint:

~~~text
POST https://[worker-domain]/v1/contact
Content-Type: application/json
Origin: https://holamundoverde.com
~~~

Request:

~~~json
{
  "name": "Nombre",
  "email": "persona@example.com",
  "organization": "Opcional",
  "interest": "pilot",
  "stage": "idea",
  "message": "Contexto suficiente...",
  "consent": true,
  "website": "",
  "turnstileToken": "token",
  "locale": "es",
  "sourcePath": "/es/proyectos/monitoreo-costero-ia-drones/"
}
~~~

Enums de interest:

- pilot;
- technical-collaboration;
- research;
- workshop;
- funding-program;
- community-press;
- other.

Enums de stage:

- idea;
- discovery;
- prototype;
- operating;
- not-applicable.

Respuesta exitosa:

~~~json
{
  "ok": true,
  "referenceId": "HMV-20260817-AB12CD"
}
~~~

Error:

~~~json
{
  "ok": false,
  "code": "VALIDATION_ERROR"
}
~~~

No devolver detalles internos.

## 2. Orden de procesamiento

1. aceptar solo POST y OPTIONS;
2. verificar Origin contra allowlist exacta;
3. limitar Content-Type y tamaño, recomendado 16 KB;
4. parsear JSON con manejo de error;
5. rechazar honeypot poblado con respuesta genérica;
6. normalizar y validar campos;
7. verificar consentimiento;
8. validar Turnstile en servidor;
9. aplicar rate limiting de plataforma;
10. construir email de texto y HTML escapado;
11. enviar a Mailgun;
12. registrar resultado no sensible;
13. devolver referenceId.

## 3. Validación

| Campo | Regla del Worker |
|---|---|
| name | string trim 2–80 |
| email | sintaxis razonable, máximo 254 |
| organization | string trim 0–120 |
| interest | enum |
| stage | enum opcional |
| message | string trim 30–3000 |
| consent | debe ser true |
| website | debe estar vacío |
| turnstileToken | string no vacía en producción |
| locale | es o en |
| sourcePath | ruta relativa allowlisted, máximo 200 |

No intentar validar que un correo “existe”. No hacer requests a URLs incluidas en el mensaje.

## 4. Turnstile

El widget cliente produce un token. El Worker debe enviarlo a Siteverify con:

- secret desde TURNSTILE_SECRET_KEY;
- response con el token;
- remoteip opcional si la política de privacidad lo permite;
- idempotency_key recomendado.

Aceptar solo success verdadero y, si se configuraron, hostname/action esperados. Los tokens expiran y son de un solo uso. Reiniciar el widget tras cada intento.

La sitekey es pública. El secret nunca llega al navegador.

## 5. Rate limiting

No implementar un contador en memoria global del Worker: no es consistente. Preferir:

1. Cloudflare Rate Limiting/WAF sobre /v1/contact;
2. Turnstile;
3. límite de tamaño;
4. honeypot;
5. si el abuso lo exige, Durable Object o KV con una política documentada.

Objetivo inicial sugerido: permitir uso humano normal y responder 429 con Retry-After. Ajustar después de observar tráfico; no fijar una cifra sin conocer el plan de Cloudflare y el patrón real.

## 6. CORS

Allowlist de producción:

- https://holamundoverde.com;
- https://www.holamundoverde.com si sirve contenido;
- origen local explícito solo en desarrollo.

Responder:

- Access-Control-Allow-Origin con el origen validado, nunca comodín;
- Vary: Origin;
- Access-Control-Allow-Methods: POST, OPTIONS;
- Access-Control-Allow-Headers: Content-Type;
- Access-Control-Max-Age limitado.

CORS no es autenticación; Turnstile, validación y rate limiting siguen siendo obligatorios.

## 7. Mailgun

Endpoint por región:

- US: https://api.mailgun.net/v3/{domain}/messages;
- EU: https://api.eu.mailgun.net/v3/{domain}/messages.

Autenticación Basic con usuario api y MAILGUN_API_KEY. Body multipart/form-data.

Campos:

- from: CONTACT_FROM en un dominio verificado;
- to: CONTACT_TO;
- subject: categoría + referenceId, generado por el Worker;
- text: versión legible;
- html: versión escapada;
- h:Reply-To: email validado del remitente;
- o:tag: hmv-contact opcional.

No colocar el email del visitante como From: perjudica autenticación y permite spoofing. Usar Reply-To.

Proteger contra header injection rechazando CR/LF en campos usados como headers. Nunca interpolar HTML sin escape.

## 8. Plantilla interna

Asunto:

~~~text
[HMV] Nueva consulta · {interestLabel} · {referenceId}
~~~

Cuerpo:

~~~text
Referencia: {referenceId}
Idioma: {locale}
Origen: {sourcePath}
Interés: {interestLabel}
Etapa: {stageLabel}

Nombre: {name}
Email: {email}
Organización: {organizationOrDash}

Mensaje:
{message}

Consentimiento registrado: sí
~~~

El email no es un sistema de archivo legal. Definir retención y eliminación en Mailgun y el buzón.

## 9. Secretos y configuración

Nunca versionar:

- MAILGUN_API_KEY;
- TURNSTILE_SECRET_KEY;
- archivos .dev.vars o .env con valores;
- tokens de prueba reales.

El .gitignore del Worker debe cubrir .dev.vars*, .env* y archivos locales de Wrangler. Mantener .dev.vars.example sin valores.

## 10. Privacidad

Antes de habilitar el formulario:

- confirmar responsable de tratamiento y email;
- describir finalidad y base aplicable;
- indicar proveedores Cloudflare y Mailgun;
- definir retención;
- indicar derechos/canal de consulta;
- decidir región de Mailgun;
- documentar transferencias internacionales si aplica;
- evitar capturar IP salvo necesidad y declaración.

Este documento no sustituye asesoramiento legal en Uruguay.

## 11. Pruebas

### Unitarias

- cada regla de validación;
- escape HTML;
- eliminación de CR/LF;
- mapeo de categorías;
- generación de referenceId;
- origen admitido/rechazado.

### Integración

- Turnstile válido, inválido, expirado y duplicado;
- Mailgun 200, 400, 401, 429 y 5xx;
- timeout de cada proveedor;
- request demasiado grande;
- JSON inválido;
- honeypot;
- rate limit;
- preflight CORS.

### E2E

- envío ES y EN;
- estados accesibles;
- el mensaje llega al buzón;
- Reply-To responde al visitante;
- no se registran datos del cuerpo.

## 12. Criterios de aceptación

- ninguna clave aparece en bundle, Git, logs o respuesta;
- solo orígenes permitidos reciben respuesta CORS;
- Turnstile se valida en el Worker;
- los errores no revelan Mailgun;
- la UI ofrece alternativa por email;
- hay tests para casos adversos;
- la política de privacidad coincide con la implementación real.

