import type { Env } from './types';
export async function verifyTurnstile(
  token: string,
  env: Env,
  fetcher: typeof fetch = fetch,
): Promise<boolean> {
  const response = await fetcher('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      idempotency_key: crypto.randomUUID(),
    }),
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) return false;
  const result = (await response.json()) as {
    success?: boolean;
    hostname?: string;
    action?: string;
  };
  const hosts = env.TURNSTILE_HOSTNAMES.split(',')
    .map((v) => v.trim())
    .filter(Boolean);
  return (
    result.success === true &&
    (!hosts.length || Boolean(result.hostname && hosts.includes(result.hostname))) &&
    (!env.TURNSTILE_ACTION || result.action === env.TURNSTILE_ACTION)
  );
}
