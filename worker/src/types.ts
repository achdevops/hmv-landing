export interface RateLimitBinding {
  limit(options: { key: string }): Promise<{ success: boolean }>;
}
export interface Env {
  MAILGUN_API_KEY: string;
  TURNSTILE_SECRET_KEY: string;
  MAILGUN_DOMAIN: string;
  MAILGUN_REGION: 'US' | 'EU';
  CONTACT_TO: string;
  CONTACT_FROM: string;
  ALLOWED_ORIGINS: string;
  ENVIRONMENT: 'development' | 'production';
  TURNSTILE_HOSTNAMES: string;
  TURNSTILE_ACTION: string;
  CONTACT_RATE_LIMITER: RateLimitBinding;
}
export interface ContactPayload {
  name: string;
  email: string;
  organization: string;
  interest: Interest;
  stage: Stage | '';
  message: string;
  consent: true;
  website: '';
  turnstileToken: string;
  locale: 'es' | 'en';
  sourcePath: string;
}
export type Interest =
  | 'pilot'
  | 'technical-collaboration'
  | 'research'
  | 'workshop'
  | 'funding-program'
  | 'community-press'
  | 'other';
export type Stage = 'idea' | 'discovery' | 'prototype' | 'operating' | 'not-applicable';
