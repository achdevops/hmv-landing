import type { ContactPayload, Env } from './types';
import { escapeHtml, safeHeader } from './security';
const labels: Record<ContactPayload['interest'], string> = {
  pilot: 'Pilot / project',
  'technical-collaboration': 'Technical collaboration',
  research: 'Research',
  workshop: 'Workshop',
  'funding-program': 'Funding / program',
  'community-press': 'Community / press',
  other: 'Other',
};
export async function sendMail(
  payload: ContactPayload,
  id: string,
  env: Env,
  fetcher: typeof fetch = fetch,
): Promise<boolean> {
  if (env.ENVIRONMENT !== 'production') return true;
  const label = labels[payload.interest];
  const text = `Reference: ${id}\nLocale: ${payload.locale}\nSource: ${payload.sourcePath}\nInterest: ${label}\nStage: ${payload.stage || '—'}\n\nName: ${payload.name}\nEmail: ${payload.email}\nOrganization: ${payload.organization || '—'}\n\nMessage:\n${payload.message}\n\nConsent recorded: yes`;
  const form = new FormData();
  form.set('from', safeHeader(env.CONTACT_FROM));
  form.set('to', safeHeader(env.CONTACT_TO));
  form.set('subject', safeHeader(`[HMV] New inquiry · ${label} · ${id}`));
  form.set('text', text);
  form.set(
    'html',
    `<pre style="font:14px/1.5 sans-serif;white-space:pre-wrap">${escapeHtml(text)}</pre>`,
  );
  form.set('h:Reply-To', safeHeader(payload.email));
  form.set('o:tag', 'hmv-contact');
  const host =
    env.MAILGUN_REGION === 'EU' ? 'https://api.eu.mailgun.net' : 'https://api.mailgun.net';
  const response = await fetcher(`${host}/v3/${encodeURIComponent(env.MAILGUN_DOMAIN)}/messages`, {
    method: 'POST',
    headers: { Authorization: `Basic ${btoa(`api:${env.MAILGUN_API_KEY}`)}` },
    body: form,
    signal: AbortSignal.timeout(10000),
  });
  return response.ok;
}
