import { defineConfig } from '@playwright/test';

// CI sets PLAYWRIGHT_BASE_URL to the Vercel preview; locally we build and serve the app.
const baseURL = process.env.PLAYWRIGHT_BASE_URL;
const bypass = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;

export default defineConfig({
	testMatch: '**/*.e2e.{ts,js}',
	use: {
		baseURL: baseURL ?? 'http://localhost:4173',
		extraHTTPHeaders: bypass
			? { 'x-vercel-protection-bypass': bypass, 'x-vercel-set-bypass-cookie': 'true' }
			: undefined
	},
	webServer: baseURL ? undefined : { command: 'npm run build && npm run preview', port: 4173 }
});
