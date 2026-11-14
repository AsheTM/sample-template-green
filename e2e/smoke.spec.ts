import { Page, expect, test } from '@playwright/test';

const sections = ['#kit', '#fonctionnement', '#promesses', '#equipe', '#contact'];

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

async function scrollThroughPage(page: Page): Promise<void> {
  for (const section of await page.locator('main > *').all()) {
    await section.scrollIntoViewIfNeeded();
  }
}

test('declares French content and page metadata', async ({ page }) => {
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr');
  await expect(page).toHaveTitle(/Smart Green/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    /arrosage intelligent/,
  );
  await expect(page.locator('meta[property="og:title"]')).toHaveAttribute('content', /Smart Green/);
});

test('renders the hero and every section', async ({ page }) => {
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Une terre connectée est une réalité.',
  );
  for (const id of sections) {
    await expect(page.locator(id)).toBeAttached();
  }
  await expect(page.locator('#equipe li')).toHaveCount(4);
  await expect(page.getByRole('contentinfo')).toContainText('Mr HASBAOUI');
});

test('navigation links scroll to their section', async ({ page, isMobile }) => {
  const nav = page.getByRole('navigation', { name: 'Navigation principale' });
  const menu = page.getByRole('button', { name: 'Ouvrir le menu' });
  for (const id of sections) {
    if (isMobile) await menu.click();
    await nav.locator(`a[href="${id}"]`).click();
    await expect(page).toHaveURL(new RegExp(`${id}$`));
    await expect(page.locator(id)).toBeInViewport({ ratio: 0.1 });
    // Once smooth scrolling ends, the sticky header must not cover the section heading.
    const gap = () =>
      page.evaluate((target) => {
        const header = document.querySelector('header')!.getBoundingClientRect();
        const heading = document.querySelector(`${target} h2`)!.getBoundingClientRect();
        return Math.round(heading.top - header.bottom);
      }, id);
    await expect.poll(gap).toBeGreaterThanOrEqual(0);
  }
});

test('mobile menu opens, closes with Escape, and is hidden on desktop', async ({
  page,
  isMobile,
}) => {
  const menu = page.getByRole('button', { name: 'Ouvrir le menu' });
  const nav = page.getByRole('navigation', { name: 'Navigation principale' });
  if (!isMobile) {
    await expect(menu).toBeHidden();
    await expect(nav).toBeVisible();
    return;
  }
  await expect(nav).toBeHidden();
  await menu.click();
  await expect(nav).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(nav).toBeHidden();
});

test('switches and remembers the colour theme', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  const bodyColor = () => page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  const light = await bodyColor();

  await page.getByRole('button', { name: 'Activer le thème sombre' }).click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  const dark = await bodyColor();
  expect(dark).not.toBe(light);

  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  expect(await bodyColor()).toBe(dark);
});

test('shows validation errors in the contact form', async ({ page }) => {
  await page.getByRole('button', { name: 'Envoyer le message' }).click();
  await expect(page.getByText('Indiquez votre nom.')).toBeVisible();
  await expect(page.getByLabel('Nom et prénom')).toHaveAttribute('aria-invalid', 'true');

  const email = page.locator('#newsletter-email');
  await email.fill('not-an-email');
  await email.press('Enter');
  await expect(email).toHaveClass(/invalid/);
});

test('loads every requested resource successfully', async ({ page }) => {
  const failures: string[] = [];
  page.on('response', (response) => {
    if (response.status() >= 400) failures.push(`${response.status()} ${response.url()}`);
  });
  page.on('requestfailed', (request) => failures.push(`failed ${request.url()}`));
  page.on('console', (message) => {
    if (message.type() === 'error') failures.push(`console ${message.text()}`);
  });
  await page.goto('/');
  await scrollThroughPage(page);
  await page.waitForLoadState('networkidle');
  expect(failures).toEqual([]);
});

test('fits the viewport width', async ({ page }) => {
  await scrollThroughPage(page);
  const { viewport, documentWidth } = await page.evaluate(() => ({
    viewport: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
  }));
  expect(documentWidth).toBeLessThanOrEqual(viewport);
});
