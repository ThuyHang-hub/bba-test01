import { test, expect } from '@playwright/test';

// Access to web
test('has title', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Expect a title hase string "E-commerce site for automation testing"
  await expect(page).toHaveTitle(/E-commerce site for automation testing/);
});

//Access to web
test('get started link', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com/');

  // Click to "My account"
  await page.getByRole('link', { name: 'My account' }).click();

  // Expects page to have a heading with the name "My account"
  await expect(page.getByRole('heading', { name: 'My account' })).toBeVisible();
});
