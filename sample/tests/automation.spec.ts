import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
await expect(page).toHaveTitle('Automation Testing Practice');
await page.getByPlaceholder('Enter Name').click();
await page.getByPlaceholder('Enter Name').fill('Praveenkumar');
await page.getByPlaceholder('Enter EMail').click();
await page.getByPlaceholder('Enter Email').fill('pkaaa1998@gmail.com');
await page.getByPlaceholder('Enter Phone').click();
await page.getByPlaceholder('Enter Phone').fill('9344005386');
await page.locator('textarea.form-control').click();
await page.locator('textarea.form-control').fill('praveenkumar,dharmapuri,pin-636803');
await expect(page.getByText('Gender:')).toBeVisible();
//await page.locator('.form-check-input').click();
//await page.locator('input#male').check();
await page.getByRole('radio',{name:'Male',exact:true}).check();

await page.waitForTimeout(3000);

});