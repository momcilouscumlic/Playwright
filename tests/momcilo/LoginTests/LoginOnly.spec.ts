import { test, expect } from '@playwright/test';

test('login works', async ({ page }) => {
  await page.goto('/bank');

  await page.getByPlaceholder('Enter your username').fill('admin');
  await page.getByPlaceholder('Enter your password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('/bank/dashboard');
});

test('Login with invalid username and valid password', async ({ page }) => {
  await page.goto('/bank');

  await page.getByPlaceholder('Enter your username').fill('Admin');
  await page.getByPlaceholder('Enter your password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  
});