import type { ContactPayload, Interest, Stage } from './types';
const interests: Interest[] = [
  'pilot',
  'technical-collaboration',
  'research',
  'workshop',
  'funding-program',
  'community-press',
  'other',
];
const stages: Stage[] = ['idea', 'discovery', 'prototype', 'operating', 'not-applicable'];
const email = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const source = /^\/(?:es|en)\/(?:[a-z0-9-]+\/)*$/;
const string = (v: unknown, min: number, max: number) =>
  typeof v === 'string' && v.trim().length >= min && v.trim().length <= max;
export function parseContact(input: unknown): ContactPayload | null {
  if (!input || typeof input !== 'object' || Array.isArray(input)) return null;
  const v = input as Record<string, unknown>;
  if (
    !string(v.name, 2, 80) ||
    !string(v.email, 3, 254) ||
    !email.test(String(v.email)) ||
    !string(v.organization ?? '', 0, 120) ||
    !interests.includes(v.interest as Interest) ||
    !(v.stage === '' || stages.includes(v.stage as Stage)) ||
    !string(v.message, 30, 3000) ||
    v.consent !== true ||
    v.website !== '' ||
    !string(v.turnstileToken, 1, 2048) ||
    (v.locale !== 'es' && v.locale !== 'en') ||
    !string(v.sourcePath, 1, 200) ||
    !source.test(String(v.sourcePath))
  )
    return null;
  return {
    name: String(v.name).trim(),
    email: String(v.email).trim(),
    organization: String(v.organization ?? '').trim(),
    interest: v.interest as Interest,
    stage: v.stage as Stage | '',
    message: String(v.message).trim(),
    consent: true,
    website: '',
    turnstileToken: String(v.turnstileToken),
    locale: v.locale,
    sourcePath: String(v.sourcePath),
  };
}
