import { describe, expect, it } from 'vitest';
import { parseContact } from '../src/schema';
import { escapeHtml, safeHeader, referenceId } from '../src/security';
const valid = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  organization: 'HMV',
  interest: 'research',
  stage: 'discovery',
  message: 'A sufficiently detailed message for this inquiry.',
  consent: true,
  website: '',
  turnstileToken: 'token',
  locale: 'es',
  sourcePath: '/es/contacto/',
};
describe('contact validation', () => {
  it('accepts a valid payload', () => expect(parseContact(valid)).not.toBeNull());
  it.each([
    ['name', 'x'],
    ['email', 'bad'],
    ['message', 'short'],
    ['consent', false],
    ['website', 'bot'],
    ['sourcePath', 'https://evil.test'],
  ])('rejects invalid %s', (key, value) =>
    expect(parseContact({ ...valid, [key]: value })).toBeNull(),
  );
});
describe('output safety', () => {
  it('escapes HTML', () => expect(escapeHtml('<img "x">')).toBe('&lt;img &quot;x&quot;&gt;'));
  it('removes header newlines', () => expect(safeHeader('a\r\nb')).toBe('a  b'));
  it('creates a non-sensitive reference', () =>
    expect(
      referenceId(new Date('2026-08-17T00:00:00Z'), new Uint8Array([0xab, 0x12, 0xcd, 0])),
    ).toBe('HMV-20260817-AB12CD'));
});
