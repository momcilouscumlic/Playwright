import {test, expect} from '@playwright/test';

test.describe('Home page', () => {
    test('Top navigation menu items are accessible', async ({page}) => {
        await page.goto('');

        //verify Home page is loaded
        await expect(page).toHaveURL('');
        await expect(page.getByRole('heading', {name: /Master Automation Testing With QA PlayGround/i})).toBeVisible();
        //Nemanja koristio drugi koncept za potvrdu naslova .toHaveTitle

        //verify Study Tracker page is loaded
        await page.goto('/study-tracker/dashboard');

        await expect(page).toHaveURL('/study-tracker/dashboard');
        await expect(page.getByRole('heading', {name: /QA Study Tracker/i})).toBeVisible();

        //verify Bank page is loaded
        await page.goto('/bank');

        await expect(page).toHaveURL('/bank');
        await expect(page.getByText('SecureBank Demo')).toBeVisible();

        //Verify practice page is loaded
        await page.goto('/practice');

        await expect(page).toHaveURL('/practice');
        await expect(page.getByRole('heading', {name: /Ready to be a Pro AI Automation Engineer?/i})).toBeVisible();

        //verify QA Tools page is loaded
        await page.goto('/qa-tools');

        await expect(page).toHaveURL('/qa-tools');
        await expect(page.getByRole('heading', {name: /QA Tools/i})).toBeVisible();

        //Verify Blog page is loaded
        await page.goto('/blog');

        await expect(page).toHaveURL('/blog');
        await expect(page.getByRole('heading', {name: /QA Automation Blog/i})).toBeVisible();

        //verify Login page is loaded
        await page.goto('/login');

        await expect(page).toHaveURL('/login');
        await expect(page.getByRole('heading', {name: /Sign In/i})).toBeVisible();



    })
});