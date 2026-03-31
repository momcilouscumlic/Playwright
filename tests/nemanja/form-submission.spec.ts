import { test, expect } from "@playwright/test";

test("Test Form Submission", async ({ page }) => {
  await page.goto("/practice/forms");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(
    /How to Automate Form Submission in Selenium and Playwright/,
  );

  //Populate Form fields
  await page.getByTestId("input-first-name").fill("Test_First_Name");
  await page.getByTestId("input-last-name").fill("Test_");
  await page.getByTestId("input-email").fill("test_name@example.com");
  await page.getByTestId("input-phone").fill("3816511234");
  await page.getByTestId("input-dob").fill("2000-01-01");
  await page.getByTestId("radio-gender-male").check();
  await page.getByTestId("select-country").click();
  await page.getByRole("option", { name: "Germany" }).click();
  await page.getByTestId("input-city").fill("Munich");

  //Verify Country and City fields
  await expect(page.getByTestId("select-country")).toHaveText("Germany");
  await expect(page.getByTestId("input-city")).toHaveValue("Munich");

  await page.getByTestId("textarea-bio").fill("This is a test bio.");

  await page.getByTestId("checkbox-interest-playwright").click();

  //Interests
  await expect(page.getByTestId("checkbox-interest-playwright")).toBeChecked();

  //Account Details
  await page.getByTestId("input-password").fill("TestPassword123");
  await page.getByTestId("input-confirm-password").fill("TestPassword123");
  await page.getByTestId("checkbox-terms").click();

  //Submit Form
  await page.getByTestId("submit-form-btn").click();

  //Validate Success Message
  await expect(page.getByRole('heading', { name: 'Form Submitted Successfully!', level: 3 })).toBeVisible();
  //await expect(page.locator("h3")).toHaveText("Form Submitted Successfully!");


});
