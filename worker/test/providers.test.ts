import { describe, expect, it, vi } from 'vitest';
import { sendMail } from '../src/mailgun';
import { verifyTurnstile } from '../src/turnstile';
import type { ContactPayload, Env } from '../src/types';

const env = {
  MAILGUN_API_KEY: 'test',
  TURNSTILE_SECRET_KEY: 'test',
  MAILGUN_DOMAIN: 'mg.example.test',
  MAILGUN_REGION: 'EU',
  CONTACT_TO: 'to@example.test',
  CONTACT_FROM: 'from@example.test',
  ALLOWED_ORIGINS: 'https://holamundoverde.com',
  ENVIRONMENT: 'production',
  TURNSTILE_HOSTNAMES: 'holamundoverde.com',
  TURNSTILE_ACTION: 'contact',
  CONTACT_RATE_LIMITER: { limit: vi.fn().mockResolvedValue({ success: true }) },
} satisfies Env;
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
} satisfies ContactPayload;

describe('Mailgun provider', () => {
  it.each([
    [200, true],
    [400, false],
    [401, false],
    [429, false],
    [500, false],
  ])('maps status %s', async (status, expected) => {
    const fetcher = vi.fn().mockResolvedValue(new Response(null, { status }));
    expect(await sendMail(payload, 'HMV-TEST', env, fetcher)).toBe(expected);
    expect(fetcher.mock.calls[0]?.[0]).toBe(
      'https://api.eu.mailgun.net/v3/mg.example.test/messages',
    );
    const request = fetcher.mock.calls[0]?.[1] as RequestInit;
    const body = request.body as FormData;
    expect(body.get('from')).toBe(env.CONTACT_FROM);
    expect(body.get('h:Reply-To')).toBe(payload.email);
  });
  it('surfaces a provider timeout for generic handling', async () => {
    await expect(
      sendMail(payload, 'HMV-TEST', env, vi.fn().mockRejectedValue(new Error('timeout'))),
    ).rejects.toThrow('timeout');
  });
});

describe('Turnstile provider', () => {
  it('accepts matching success', async () => {
    const fetcher = vi
      .fn()
      .mockResolvedValue(
        new Response(
          JSON.stringify({ success: true, hostname: 'holamundoverde.com', action: 'contact' }),
        ),
      );
    expect(await verifyTurnstile('token', env, fetcher)).toBe(true);
  });
  it.each([
    { success: false, hostname: 'holamundoverde.com', action: 'contact' },
    { success: true, hostname: 'evil.test', action: 'contact' },
    { success: true, hostname: 'holamundoverde.com', action: 'login' },
  ])('rejects invalid, hostname or action mismatch', async (result) => {
    const fetcher = vi.fn().mockResolvedValue(new Response(JSON.stringify(result)));
    expect(await verifyTurnstile('token', env, fetcher)).toBe(false);
  });
  it('surfaces a provider timeout for generic handling', async () => {
    await expect(
      verifyTurnstile('token', env, vi.fn().mockRejectedValue(new Error('timeout'))),
    ).rejects.toThrow('timeout');
  });
});
