import { expect, test } from '@playwright/test';

const sections = ['#Main', '#SmartGreen', '#Products', '#Promises', '#WhoWeAre', '#Newsletter', '#About'];

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('renders the header and all ten slides', async ({ page }) => {
  await expect(page.locator('app-header img[alt="Smart Green"]')).toBeVisible();
  await expect(page.locator('#Prez > .part')).toHaveCount(10);
  for (const id of sections) {
    await expect(page.locator(id)).toBeAttached();
  }
});

test('header links scroll to their section', async ({ page, isMobile }) => {
  test.fixme(isMobile, 'Menu overflows off-screen on mobile: #20');
  const links = page.locator('app-header .menu a');
  const count = await links.count();
  expect(count).toBe(6);
  for (let i = 0; i < count; i++) {
    const href = (await links.nth(i).getAttribute('href'))!;
    await links.nth(i).click();
    await expect(page).toHaveURL(new RegExp(`${href}$`));
    await expect(page.locator(href)).toBeInViewport({ ratio: 0.1 });
  }
});

test('shows a validation state for an invalid newsletter e-mail', async ({ page }) => {
  const email = page.locator('#newsletter-email');
  await email.scrollIntoViewIfNeeded();
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
  await page.goto('/');
  for (const section of await page.locator('#Prez > .part').all()) {
    await section.scrollIntoViewIfNeeded();
  }
  await page.waitForLoadState('networkidle');
  expect(failures).toEqual([]);
});
