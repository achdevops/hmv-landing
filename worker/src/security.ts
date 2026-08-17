export const MAX_BYTES = 16 * 1024;
export const allowedOrigins = (value: string) =>
  new Set(
    value
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean),
  );
export const corsHeaders = (origin: string) => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '600',
  Vary: 'Origin',
});
export const escapeHtml = (value: string) =>
  value.replace(
    /[&<>'"]/g,
    (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]!,
  );
export const safeHeader = (value: string) => value.replace(/[\r\n]/g, ' ');
export const referenceId = (now = new Date(), random = crypto.getRandomValues(new Uint8Array(4))) =>
  `HMV-${now.toISOString().slice(0, 10).replaceAll('-', '')}-${Array.from(random, (n) =>
    n.toString(16).padStart(2, '0'),
  )
    .join('')
    .slice(0, 6)
    .toUpperCase()}`;
