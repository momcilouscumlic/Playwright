//run Server.ts before executing this test
import { test, expect } from '@playwright/test';



test('GET users from local server', async ({ request }) => {
 
    //you have to add mock part before requesting some API

  const response = await request.get('http://localhost:3000/users');

  // check status
  expect(response.status()).toBe(200);

  // parse JSON
  const body = await response.json();

  console.log(body);

  // basic assertion
  expect(Array.isArray(body)).toBe(true);
});

test('mock users API with less data', async ({ page }) => {
    //rerouting must go before access to url
    //route first argument is url you want to mock
  await page.route('**/users', async (route) => {
    // mocked smaller dataset, we removed role
    //not very useful just to show that we can intercept response and send mock one
    const mockUsers = [
      { id: 1, name: 'Admin' }
    ];

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockUsers),
    });
  });

  // call your API (or UI that calls it)
  const data = await page.evaluate(async () => {
    const response = await fetch('http://localhost:3000/users');
    return response.json();
  });
  console.log(data);
  expect(data).toEqual([
    { id: 1, name: 'Admin' }
  ]);
});
