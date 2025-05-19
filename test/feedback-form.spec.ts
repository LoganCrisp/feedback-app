// Import Playwright's test and expect functions
import { test, expect } from '@playwright/test';

// Define a test case named "User can submit feedback"
test('User can submit feedback', async ({ page }) => {
  // Navigate to the local Angular app running on port 4200
  await page.goto('http://localhost:4200');

  // Fill in the feedback form fields using their name attributes
  await page.fill('input[name="name"]', 'Logan'); // Enter "Logan" in the Name field
  await page.fill('input[name="email"]', 'logan@example.com'); // Enter email
  await page.fill('input[name="rating"]', '5'); // Enter rating
  await page.fill('textarea[name="comments"]', 'Awesome app!'); // Enter comments

  // Click the submit button to send the form
  await page.click('button[type="submit"]');

  // Verify that the submitted feedback is now displayed in the UI
  await expect(page.locator('text=Logan')).toBeVisible(); // Check for name
  await expect(page.locator('text=Awesome app!')).toBeVisible(); // Check for comment
});
