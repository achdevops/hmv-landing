# Runbook de lanzamiento, migración y rollback

Estado: no ejecutar hasta resolver OQ-001–OQ-012 y autorizar expresamente el despliegue.

## GitHub Pages

1. Confirmar owner del repositorio, visibilidad y protección de `main`.
2. Verificar `holamundoverde.com` en la cuenta u organización de GitHub.
3. En Settings → Pages, seleccionar GitHub Actions como source.
4. Ejecutar Quality y revisar el artefacto antes de ejecutar Deploy.
5. Configurar el dominio personalizado en Pages antes de cambiar DNS.

## Cloudflare Worker, Turnstile y Mailgun

1. Crear widgets Turnstile separados para desarrollo y producción, restringidos a hostnames propios.
2. Confirmar región y dominio verificado de Mailgun, `From` y buzón `To`.
3. Completar las variables no secretas de `worker/wrangler.jsonc` y cargar secretos con `wrangler secret put`.
4. Confirmar el binding `CONTACT_RATE_LIMITER`, límites adecuados al plan y observabilidad sin PII.
5. Probar primero con destinatarios controlados y verificar SPF, DKIM, Reply-To y todos los errores.
6. Desplegar una versión del Worker, guardar su versión anterior y configurar `PUBLIC_CONTACT_API_URL` y la sitekey solo en un build controlado.

## DNS y migración

1. Inventariar URLs legacy y definir redirecciones 301; Pages no ofrece reglas arbitrarias.
2. Registrar valores DNS actuales y TTL antes del corte.
3. Configurar apex y `www` según GitHub, esperar propagación y activar Enforce HTTPS.
4. Validar apex, `www`, TLS, canonical, hreflang, sitemap, 404 y formulario.
5. Mantener el hosting anterior durante la observación inicial.

## Rollback

- Sitio: redesplegar el commit previamente verificado desde GitHub Actions.
- Worker: restaurar la versión previa; si falla, retirar temporalmente el endpoint para activar el fallback por email.
- DNS: restaurar los registros documentados y el TTL anterior.
- No reescribir historia Git ni borrar la versión funcional durante el incidente.
