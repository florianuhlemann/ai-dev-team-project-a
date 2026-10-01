import { expect, test } from '@playwright/test';

test('shows hint initially', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('Hello World');
	await expect(page.getByTestId('greeting')).toHaveText('Please enter your first name.');
});

test('greets the user by first name', async ({ page }) => {
	await page.goto('/');
	await page.getByLabel('First name').fill('Maria');
	await expect(page.getByTestId('greeting')).toHaveText('Hello, Maria!');
});