import { test, expect } from '@playwright/test';

const SearchBox = '//input[@id="searchField1"]';
const SearchValue = "Agriculture";
const Register = '//div[@class="gutterless col-md-6 gutterless "]//h1';

test('search functionality', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works");

  await page.locator(SearchBox).pressSequentially(SearchValue);

  await page.keyboard.press('Enter');
});

test('privacypolicy', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works");
  await page.click('a:has-text("Privacy Policy")');
  await expect(page).toHaveTitle("Privacy Policy | Wiley", { timeout: 10000 });
});

test('Register_online', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Wiley Online Library | Scientific research articles, journals, books, and reference works");
  await page.click('a:has-text("Register online")');
  await expect(page.locator(Register)).toHaveText("Register");
});