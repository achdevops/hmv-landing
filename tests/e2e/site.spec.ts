import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
const routes = [
  '/es/',
  '/en/',
  '/es/capacidades/',
  '/en/capabilities/',
  '/es/lab/',
  '/en/lab/',
  '/es/aprender/',
  '/en/learn/',
  '/es/proyectos/',
  '/en/projects/',
  '/es/proyectos/monitoreo-costero-ia-drones/',
  '/en/projects/ai-drone-coastal-monitoring/',
  '/es/colaborar/',
  '/en/collaborate/',
  '/es/nosotros/',
  '/en/about/',
  '/es/contacto/',
  '/en/contact/',
  '/es/privacidad/',
  '/en/privacy/',
];
for (const path of routes) {
  test(`${path} has one h1 and no serious axe violations`, async ({ page }) => {
    await page.goto(path);
    await expect(page.locator('h1')).toHaveCount(1);
    const results = await new AxeBuilder({ page }).exclude('.cf-turnstile').analyze();
    expect(
      results.violations.filter((v) => ['critical', 'serious'].includes(v.impact ?? '')),
    ).toEqual([]);
  });
}
test('mobile navigation is keyboard operable', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto('/es/');
  await page.getByRole('button', { name: 'Menú' }).focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('navigation', { name: 'Principal' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Menú' })).toBeFocused();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
});
test('home reflows at mobile, tablet, desktop and reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const width of [320, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/es/');
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
      ),
    ).toBe(true);
  }
  expect(await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches)).toBe(
    true,
  );
  await page.setViewportSize({ width: 640, height: 900 });
  await page.goto('/es/');
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth,
    ),
  ).toBe(true);
});
test('contact supports success and a recoverable error', async ({ page }) => {
  await page.route('https://worker.test/v1/contact', async (route) =>
    route.fulfill({ json: { ok: true, referenceId: 'HMV-TEST-123' } }),
  );
  await page.goto('/es/contacto/');
  const fill = async (message: string) => {
    await page.getByLabel(/Nombre/).fill('Ada Lovelace');
    await page.getByLabel('Email').fill('ada@example.com');
    await page.getByLabel(/Interés/).selectOption('research');
    await page.getByLabel(/Mensaje/).fill(message);
    await page.getByLabel(/Acepto/).check();
    await page.locator('input[name="turnstileToken"]').evaluate((el: HTMLInputElement) => {
      el.value = 'test-token';
    });
  };
  await fill('Este es un mensaje de prueba con contexto suficiente.');
  await page.getByRole('button', { name: 'Enviar mensaje' }).click();
  await expect(page.locator('#form-status')).toContainText('HMV-TEST-123');
  await page.unroute('https://worker.test/v1/contact');
  await page.route('https://worker.test/v1/contact', async (route) =>
    route.fulfill({ status: 503, json: { ok: false, code: 'SERVICE_UNAVAILABLE' } }),
  );
  const message = 'Este mensaje debe conservarse después del error recuperable.';
  await fill(message);
  await page.getByRole('button', { name: 'Enviar mensaje' }).click();
  await expect(page.locator('#form-status')).toContainText('No pudimos');
  await expect(page.getByLabel(/Mensaje/)).toHaveValue(message);
});
