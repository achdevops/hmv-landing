import { describe, expect, it, vi } from 'vitest';
import { handle } from '../src/index';
import type { Env } from '../src/types';
const env: Env = {
  MAILGUN_API_KEY: 'test',
  TURNSTILE_SECRET_KEY: 'test',
  MAILGUN_DOMAIN: 'mg.example.test',
  MAILGUN_REGION: 'US',
  CONTACT_TO: 'to@example.test',
  CONTACT_FROM: 'from@example.test',
  ALLOWED_ORIGINS: 'https://holamundoverde.com',
  ENVIRONMENT: 'development',
  TURNSTILE_HOSTNAMES: 'holamundoverde.com',
  TURNSTILE_ACTION: 'contact',
  CONTACT_RATE_LIMITER: { limit: vi.fn().mockResolvedValue({ success: true }) },
};
const payload = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  organization: '',
  interest: 'research',
  stage: 'discovery',
  message: 'A sufficiently detailed message for this inquiry.',
  consent: true,
  website: '',
  turnstileToken: 'token',
  locale: 'es',
  sourcePath: '/es/contacto/',
};
const request = (body: unknown = payload, origin = 'https://holamundoverde.com') =>
  new Request('https://worker.test/v1/contact', {
    method: 'POST',
    headers: { Origin: origin, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
const fetcher = vi
  .fn()
  .mockImplementation(
    async () =>
      new Response(
        JSON.stringify({ success: true, hostname: 'holamundoverde.com', action: 'contact' }),
        { status: 200 },
      ),
  );
describe('worker endpoint', () => {
  it('rejects an unknown origin', async () =>
    expect((await handle(request(payload, 'https://evil.test'), env, fetcher)).status).toBe(403));
  it('handles preflight', async () => {
    const r = await handle(
      new Request('https://worker.test/v1/contact', {
        method: 'OPTIONS',
        headers: { Origin: 'https://holamundoverde.com' },
      }),
      env,
      fetcher,
    );
    expect(r.status).toBe(204);
    expect(r.headers.get('Access-Control-Allow-Origin')).toBe('https://holamundoverde.com');
  });
  it('rejects invalid input before providers', async () =>
    expect((await handle(request({ ...payload, message: 'short' }), env, fetcher)).status).toBe(
      400,
    ));
  it('returns a reference in safe local mode', async () => {
    const r = await handle(request(), env, fetcher);
    expect(r.status).toBe(200);
    expect(await r.json()).toMatchObject({ ok: true });
  });
  it('returns 429 from platform limiter', async () => {
    const limited = {
      ...env,
      CONTACT_RATE_LIMITER: { limit: vi.fn().mockResolvedValue({ success: false }) },
    };
    expect((await handle(request(), limited, fetcher)).status).toBe(429);
  });
  it('maps Turnstile failure', async () => {
    const bad = vi
      .fn()
      .mockResolvedValue(new Response(JSON.stringify({ success: false }), { status: 200 }));
    expect((await handle(request(), env, bad)).status).toBe(400);
  });
});
