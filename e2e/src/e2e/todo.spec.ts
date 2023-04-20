import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:4200/';

test('I can create a to do', async ({ page }) => {
  await page.goto(BASE_URL);

  await page.getByRole('button', { name: 'Create a Todo' }).click();

  await page.getByLabel(/title/i).fill('Testing todo');
  await page
    .getByLabel(/description/i)
    .fill('This is just a todo for testing.');
  await page.getByRole('button', { name: 'Save' }).click();

  await expect(page.getByRole('dialog')).toBeHidden();
  await expect(page.getByText(/testing todo/i)).toBeVisible();
  await expect(page.getByText('PENDING', { exact: true })).toBeVisible();
});

test('I can change the to do status from PENDING to IN PROGRESS', async ({
  page,
}) => {
  await page.goto(BASE_URL);

  await page.getByRole('button', { name: 'Create a Todo' }).click();

  await page.getByLabel(/title/i).fill('Testing change todo status');
  await page.getByLabel(/description/i).fill("Let's change its status.");
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: /change status/i }).click();
  await page.getByRole('button', { name: /new status/i }).click();
  await page.getByRole('option', { name: /in progress/i }).click();

  await page.getByRole('button', { name: /change status/i }).click();
  await page.getByRole('dialog').waitFor({ state: 'hidden' });

  await expect(page.getByText('IN PROGRESS', { exact: true })).toBeVisible();
});

test('I can change the to do title and description', async ({ page }) => {
  await page.goto(BASE_URL);

  await page.getByRole('button', { name: 'Create a Todo' }).click();

  await page.getByLabel(/title/i).fill('Old title');
  await page.getByLabel(/description/i).fill('Old description');
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: /edit/i }).click();
  await page.getByLabel(/title/i).fill('New title');
  await page.getByLabel(/description/i).fill('New description');
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('dialog').waitFor({ state: 'hidden' });

  await expect(page.getByText(/new title/i)).toBeVisible();
  await expect(page.getByText(/new description/i)).toBeVisible();
});

test('I can remove a To do', async ({ page }) => {
  await page.goto(BASE_URL);

  await page.getByRole('button', { name: 'Create a Todo' }).click();

  await page.getByLabel(/title/i).fill('A todo');
  await page.getByLabel(/description/i).fill('A simple todo');
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: /remove/i }).click();
  await page
    .getByRole('dialog')
    .getByRole('button', { name: /remove/i })
    .click();

  await expect(page.getByText(/a todo/i)).toBeHidden();
  await expect(page.getByText(/a simple todo/i)).toBeHidden();
});
