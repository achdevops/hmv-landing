import { parseContact } from './schema';
import { allowedOrigins, corsHeaders, MAX_BYTES, referenceId } from './security';
import { verifyTurnstile } from './turnstile';
import { sendMail } from './mailgun';
import type { Env } from './types';
const json = (status: number, body: Record<string, unknown>, headers: HeadersInit = {}) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...headers,
    },
  });
export async function handle(
  request: Request,
  env: Env,
  fetcher: typeof fetch = fetch,
): Promise<Response> {
  const origin = request.headers.get('Origin') ?? '';
  const allowed = allowedOrigins(env.ALLOWED_ORIGINS);
  if (!allowed.has(origin)) return json(403, { ok: false, code: 'ORIGIN_NOT_ALLOWED' });
  const cors = corsHeaders(origin);
  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: cors });
  if (request.method !== 'POST')
    return json(
      405,
      { ok: false, code: 'METHOD_NOT_ALLOWED' },
      { ...cors, Allow: 'POST, OPTIONS' },
    );
  const type = request.headers.get('Content-Type') ?? '';
  const declared = Number(request.headers.get('Content-Length') ?? 0);
  if (!type.toLowerCase().startsWith('application/json') || declared > MAX_BYTES)
    return json(413, { ok: false, code: 'INVALID_REQUEST' }, cors);
  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return json(400, { ok: false, code: 'INVALID_REQUEST' }, cors);
  }
  if (new TextEncoder().encode(raw).byteLength > MAX_BYTES)
    return json(413, { ok: false, code: 'INVALID_REQUEST' }, cors);
  let input: unknown;
  try {
    input = JSON.parse(raw);
  } catch {
    return json(400, { ok: false, code: 'INVALID_JSON' }, cors);
  }
  if (
    input &&
    typeof input === 'object' &&
    !Array.isArray(input) &&
    (input as Record<string, unknown>).website
  )
    return json(200, { ok: true, referenceId: referenceId() }, cors);
  const payload = parseContact(input);
  if (!payload) return json(400, { ok: false, code: 'VALIDATION_ERROR' }, cors);
  try {
    if (!(await verifyTurnstile(payload.turnstileToken, env, fetcher)))
      return json(400, { ok: false, code: 'CHALLENGE_FAILED' }, cors);
  } catch {
    return json(503, { ok: false, code: 'SERVICE_UNAVAILABLE' }, cors);
  }
  const limited = await env.CONTACT_RATE_LIMITER.limit({ key: `contact:${payload.locale}` });
  if (!limited.success)
    return json(429, { ok: false, code: 'RATE_LIMITED' }, { ...cors, 'Retry-After': '60' });
  const id = referenceId();
  try {
    if (!(await sendMail(payload, id, env, fetcher)))
      return json(503, { ok: false, code: 'SERVICE_UNAVAILABLE' }, cors);
  } catch {
    return json(503, { ok: false, code: 'SERVICE_UNAVAILABLE' }, cors);
  }
  return json(200, { ok: true, referenceId: id }, cors);
}
export default { fetch: handle } satisfies {
  fetch: (request: Request, env: Env) => Promise<Response>;
};
