import { test, expect } from '@playwright/test';

test('Add account', async ({ page }) => {

  let testAccount:string  = 'abc' + Math.floor(Math.random() * 1000);  
  await page.goto('/bank');

  await page.getByPlaceholder('Enter your username').fill('admin');
  await page.getByPlaceholder('Enter your password').fill('admin123');
  await page.getByTestId('login-button').click();

  await expect(page).toHaveURL('/bank/dashboard');

  //add account
  await page.getByTestId('quick-add-account').click();
  await page.getByTestId('account-name-input').fill(testAccount);
  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: 'Savings Account' }).click();
  await page.getByTestId('initial-balance-input').fill('8');
  await page.getByTestId('save-account-button').click();

  await expect(page.getByText(testAccount)).toBeVisible();
});