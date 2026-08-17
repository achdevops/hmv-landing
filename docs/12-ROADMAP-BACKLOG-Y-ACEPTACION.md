# Roadmap, backlog y criterios de aceptación

## 1. Roadmap de producto 12–18 meses

### Horizonte 1 — Fundamentos y MVP, semanas 1–8

- identidad y contenido aprobados;
- web bilingüe;
- proyecto costero documentado en etapa real;
- teaser deportivo resuelto por PI;
- formulario seguro;
- dominio y medición base.

Resultado: HMV puede explicar quién es, mostrar evidencia y recibir contactos.

### Horizonte 2 — Discovery y talleres, meses 2–6

- entrevistas para caso costero;
- dataset y permisos;
- primera prueba técnica;
- taller piloto GreenTech Labs;
- taller introductorio sobre cultura de tokenización;
- registro de aprendizajes y actualización del sitio.

Resultado: una hipótesis priorizada, un taller repetible y una base de colaboración.

### Horizonte 3 — Prototipo y partner, meses 5–12

- prototipo costero;
- evaluación contra baseline;
- interfaz/reporte con revisión humana;
- partner o sitio piloto;
- financiación/créditos/equipamiento;
- contenidos de proyecto actualizados con evidencia.

Resultado: proyecto preparado para Gate Pilot.

### Horizonte 4 — Piloto/MVP, meses 9–18

- acuerdos y permisos;
- piloto medible;
- evaluación de impacto, costo y riesgos;
- decisión MVP/iterar/cerrar;
- talleres realizados y documentados;
- nueva planificación del portafolio.

Resultado objetivo: un proyecto IA+Cloud desplegado en contexto validado, sin prejuzgar que necesariamente será un producto comercial.

## 2. Hitos de construcción web

### M0 — Decisions ready

- resolver pendientes bloqueantes;
- copy aprobado;
- visibilidad deportiva aprobada;
- logo/assets con licencia;
- cuentas/proveedores confirmados.

### M1 — Foundation

- Astro y TypeScript;
- scripts;
- CI de calidad;
- tokens;
- layout y navegación;
- rutas ES/EN vacías pero válidas.

### M2 — Content experience

- Home;
- Capabilities;
- Lab;
- Learn;
- Projects;
- Collaborate;
- About;
- Privacy y 404.

### M3 — Project system

- colección tipada;
- Project Card;
- detail template;
- proyecto costero;
- teaser según aprobación;
- OG de proyectos.

### M4 — Contact

- formulario;
- Worker;
- Turnstile;
- Mailgun;
- privacy;
- pruebas de error y abuso.

### M5 — Hardening and launch

- accesibilidad;
- SEO;
- rendimiento;
- dominio;
- deploy;
- migración;
- smoke test;
- observación.

## 3. Backlog priorizado

| ID | P | Historia/entregable | Aceptación resumida |
|---|---|---|---|
| WEB-001 | P0 | Scaffold Astro static TS strict | build limpio y sin adapter SSR |
| WEB-002 | P0 | Design tokens y global CSS | paleta/tipo/spacing centralizados |
| WEB-003 | P0 | Base layout | metadata, skip link, landmarks |
| WEB-004 | P0 | Header/footer responsive | teclado, móvil, idioma |
| WEB-005 | P0 | Sistema de rutas ES/EN | equivalentes, lang, canonical |
| WEB-006 | P0 | Home ES/EN | todas las secciones definidas |
| WEB-007 | P0 | Páginas institucionales | capacidades, lab, learn, colaborar, nosotros |
| PRJ-001 | P0 | Content Collection | esquema y build validation |
| PRJ-002 | P0 | Project listing/cards | generado desde contenido |
| PRJ-003 | P0 | Detail template | mini pitch accesible |
| PRJ-004 | P0 | Proyecto costero | copy, etapa, riesgos, CTA |
| PRJ-005 | P0 | Teaser deportivo | decisión PI aplicada |
| CNT-001 | P0 | Contact form | validación, estados, consentimiento |
| CNT-002 | P0 | Worker schema/security | CORS, size, origin, escape |
| CNT-003 | P0 | Turnstile | validación server-side |
| CNT-004 | P0 | Mailgun | envío, Reply-To, error mapping |
| LEG-001 | P0 | Privacy notice | refleja implementación real |
| SEO-001 | P0 | Metadata/canonical/hreflang | pruebas por ruta |
| SEO-002 | P0 | Sitemap/robots/OG | solo URLs aprobadas |
| A11Y-001 | P0 | WCAG templates | axe + revisión manual |
| OPS-001 | P0 | Quality workflow | qa requerido en PR |
| OPS-002 | P0 | Pages deploy | Actions, permissions mínimos |
| OPS-003 | P0 | Domain/HTTPS | apex/www/canonical probados |
| OPS-004 | P0 | Secret handling | scan limpio |
| WEB-008 | P1 | Animaciones discretas | reduced motion |
| SEO-003 | P1 | JSON-LD Organization | solo hechos confirmados |
| OPS-005 | P1 | Lighthouse programado | baseline y tendencias |
| ANA-001 | P1 | Analítica privacy-friendly | decisión y política |
| CNT-005 | P1 | Monitor/alerta del Worker | sin PII |
| WEB-009 | P2 | Filtros de proyectos | solo al superar seis |
| EDU-001 | P2 | Eventos/inscripción | fuera del MVP |

## 4. Criterios P0 globales

### Build y rutas

- [ ] Clone limpio + npm ci + npm run qa funcionan.
- [ ] El build no hace requests de runtime para contenido.
- [ ] Cada ruta del sitemap responde 200.
- [ ] / redirige o conduce claramente a /es/.
- [ ] 404 existe y navega de regreso.
- [ ] No hay links internos rotos.

### Contenido

- [ ] No hay Lorem ipsum, TODO, [pendiente] ni afirmaciones no aprobadas.
- [ ] Español e inglés transmiten el mismo alcance.
- [ ] “familiar” no implica sociedad registrada.
- [ ] La ubicación pública es Maldonado, Uruguay.
- [ ] No hay nombres/fotos del equipo.
- [ ] Capacidades activas: Cloud, IA/Data, IoT, Education.
- [ ] Proyecto costero está en etapa respaldada.
- [ ] Teaser deportivo cumple decisión de PI.

### UX/UI

- [ ] Home explica qué es, qué hace, qué construye y cómo colaborar.
- [ ] Capabilities y Projects son conceptos distintos.
- [ ] Todos los CTAs tienen destino real.
- [ ] Responsive desde 320 px a desktop.
- [ ] No hay carrusel, pop-up promocional ni autoplay.
- [ ] El sitio funciona con JS desactivado salvo envío enriquecido.

### Accesibilidad

- [ ] Navegación completa por teclado.
- [ ] Focus visible.
- [ ] Skip link.
- [ ] Contraste AA.
- [ ] Reflow 320 px y zoom 200%.
- [ ] Menú móvil accesible.
- [ ] Formularios con labels, errores y estado.
- [ ] Axe sin problemas críticos/serios no justificados.
- [ ] reduced motion.

### SEO

- [ ] Titles/descriptions únicos.
- [ ] Canonicals absolutos.
- [ ] Hreflang recíprocos.
- [ ] OG 1200 × 630.
- [ ] Sitemap excluye privados.
- [ ] Robots enlaza sitemap.
- [ ] Un h1 por página.

### Contacto

- [ ] Validación coincide en cliente/servidor.
- [ ] Worker permite solo origen/forma/tamaño esperados.
- [ ] Turnstile server-side.
- [ ] Rate limit.
- [ ] Mailgun usa dominio verificado y Reply-To.
- [ ] Secretos no expuestos.
- [ ] Mensaje de éxito y fallback por email.
- [ ] Política de privacidad aprobada.
- [ ] No PII en logs/analytics.

### Operación

- [ ] main protegida.
- [ ] Actions con permisos mínimos.
- [ ] Dependencias y lockfile.
- [ ] Pages usa GitHub Actions.
- [ ] dominio verificado antes de DNS.
- [ ] HTTPS forzado.
- [ ] smoke test postdeploy.
- [ ] rollback documentado.

## 5. Matriz de pruebas de página

| Template | Visual | Keyboard | Axe | SEO | 320 px | 200% | ES/EN |
|---|---|---|---|---|---|---|---|
| Home | Sí | Sí | Sí | Sí | Sí | Sí | Sí |
| Listing | Sí | Sí | Sí | Sí | Sí | Sí | Sí |
| Project detail | Sí | Sí | Sí | Sí | Sí | Sí | Sí |
| Institutional | Muestreo | Sí | Sí | Sí | Sí | Sí | Sí |
| Contact | Sí | Sí | Sí | Sí | Sí | Sí | Sí |
| Privacy | Muestreo | Sí | Sí | Sí | Sí | Sí | Sí |
| 404 | Sí | Sí | Sí | noindex | Sí | Sí | n/a |

## 6. Go/no-go

No publicar si:

- falta revisión de PI;
- el formulario expone secretos o no valida Turnstile;
- política y proveedores no coinciden;
- dominio no fue verificado;
- proyecto costero presenta resultados ficticios;
- existe un blocker de accesibilidad;
- no hay rollback.

Se puede publicar sin:

- analítica;
- teaser deportivo;
- animaciones;
- perfiles sociales;
- fechas de talleres;
- métricas de impacto.

## 7. Post-lanzamiento

Primeras 24 horas:

- rutas, TLS, formulario, buzón, 404 y logs.

Primera semana:

- Search Console, spam, 5xx, Web Vitals, feedback.

Primer mes:

- revisar consultas, lenguaje, abandono y primer contenido de progreso;
- fijar metas numéricas con línea base.

