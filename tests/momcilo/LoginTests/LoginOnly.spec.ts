import { test, expect } from '@playwright/test';
import {LoginPage,LoginPageUsingLocators} from '../../momcilo/POM/LoginPage';

test('login works', async ({ page }) => {
  await page.goto('/bank');

  await page.getByPlaceholder('Enter your username').fill('admin');
  await page.getByPlaceholder('Enter your password').fill('admin123');
  await page.getByTestId('login-button').click();

  await expect(page).toHaveURL('/bank/dashboard');
});

test('Login with invalid username and valid password', async ({ page }) => {
  await page.goto('/bank');

  await page.getByPlaceholder('Enter your username').fill('Admin');
  await page.getByPlaceholder('Enter your password').fill('admin123');
  await page.getByTestId('login-button').click();

  await expect(page.locator('#alert-message')).toContainText('Invalid username or password');
});

test('login test using POM', async ({ page }) => {
 
  const login = new LoginPage(page);
  await login.performLogin('/bank');

  await expect(page).toHaveURL('/bank/dashboard');
});

test('login test using POM and Locator substitution', async ({ page }) => {
 
  const login = new LoginPageUsingLocators(page);
  await login.performLoginUsinLocatorSub('/bank');
  page.getByRole("combobox",)

  await expect(page).toHaveURL('/bank/dashboard');
});