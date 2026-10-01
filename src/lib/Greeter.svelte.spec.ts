import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Greeter from './Greeter.svelte';

describe('Greeter component', () => {
	it('shows the hint initially', async () => {
		await render(Greeter);
		const greeting = page.getByTestId('greeting');
		await expect(greeting).toHaveTextContent('Please enter your first name.');
	});

	it('shows greeting when name is entered', async () => {
		await render(Greeter);
		await page.getByLabelText('First name').fill('Maria');
		const greeting = page.getByTestId('greeting');
		await expect(greeting).toHaveTextContent('Hello, Maria!');
	});

	it('shows hint again when input is cleared', async () => {
		await render(Greeter);
		await page.getByLabelText('First name').fill('Anna');
		await page.getByLabelText('First name').fill('');
		const greeting = page.getByTestId('greeting');
		await expect(greeting).toHaveTextContent('Please enter your first name.');
	});
});