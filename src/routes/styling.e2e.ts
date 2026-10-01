import { expect, test } from '@playwright/test';

test('card is centered in the viewport', async ({ page }) => {
	await page.goto('/');
	const card = page.getByTestId('card');
	await expect(card).toBeVisible();
	const box = await card.boundingBox();
	const viewport = page.viewportSize();
	expect(box).not.toBeNull();
	expect(viewport).not.toBeNull();
	const centerX = box!.x + box!.width / 2;
	const centerY = box!.y + box!.height / 2;
	expect(Math.abs(centerX - viewport!.width / 2)).toBeLessThanOrEqual(3);
	expect(Math.abs(centerY - viewport!.height / 2)).toBeLessThanOrEqual(3);
});

test('card stays inside a small screen', async ({ page }) => {
	await page.setViewportSize({ width: 320, height: 480 });
	await page.goto('/');
	const box = await page.getByTestId('card').boundingBox();
	expect(box).not.toBeNull();
	expect(box!.x).toBeGreaterThanOrEqual(0);
	expect(box!.y).toBeGreaterThanOrEqual(0);
	expect(box!.x + box!.width).toBeLessThanOrEqual(320);
	expect(box!.y + box!.height).toBeLessThanOrEqual(480);
});

test('page does not scroll', async ({ page }) => {
	await page.goto('/');
	const result = await page.evaluate(() => ({
		htmlOverflow: getComputedStyle(document.documentElement).overflow,
		bodyOverflow: getComputedStyle(document.body).overflow,
		tooTall: document.documentElement.scrollHeight > window.innerHeight,
		tooWide: document.documentElement.scrollWidth > window.innerWidth
	}));
	expect(result.htmlOverflow).toBe('hidden');
	expect(result.bodyOverflow).toBe('hidden');
	expect(result.tooTall).toBe(false);
	expect(result.tooWide).toBe(false);
});

test('card is translucent with a blur effect', async ({ page }) => {
	await page.goto('/');
	const styles = await page.getByTestId('card').evaluate((el) => {
		const s = getComputedStyle(el);
		return {
			background: s.backgroundColor,
			backdrop: s.getPropertyValue('backdrop-filter'),
			webkitBackdrop: s.getPropertyValue('-webkit-backdrop-filter')
		};
	});
	expect(styles.background).toMatch(/^rgba\(/);
	expect(`${styles.backdrop} ${styles.webkitBackdrop}`).toContain('blur');
});

test('greeting still works inside the card', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { level: 1 })).toHaveText('Hello World');
	await page.getByLabel('First name').fill('Greta');
	await expect(page.getByTestId('greeting')).toHaveText('Hello, Greta!');
});
