# AGENTS.md – rules for the AI DEV Team

This file is read by the Manager, the Coder and the Reviewer before every task.
Keep it short and concrete. Humans may edit it at any time.

## Stack

- SvelteKit 2 with **Svelte 5 in runes mode** (enforced for all project files in `vite.config.ts`)
- TypeScript everywhere (`<script lang="ts">`)
- Vite, deployed by Vercel via `@sveltejs/adapter-vercel` on every push
- Package manager: **bun** (`bun.lock`)

## Svelte 5 syntax – mandatory

Old Svelte 4 syntax does not compile here.

| Use (Svelte 5)                                  | Never (Svelte 4)                  |
| ----------------------------------------------- | --------------------------------- |
| `let { name, count = 0 } = $props();`           | `export let name;`                |
| `let value = $state('');`                       | plain `let` for reactive state    |
| `const upper = $derived(value.toUpperCase());`  | `$: upper = value.toUpperCase();` |
| `$effect(() => { ... });`                       | `$: { ... }`, `afterUpdate`       |
| `onclick={handle}`, `oninput={...}`             | `on:click={handle}`               |
| `onsubmit={(e) => { e.preventDefault(); ... }}` | `on:submit\|preventDefault`       |
| callback props (`let { onsave } = $props();`)   | `createEventDispatcher`           |
| `{@render children()}` / `{#snippet}`           | `<slot />`                        |

`bind:value={value}` works as before. Example component:

```svelte
<script lang="ts">
	let { label = 'Name' }: { label?: string } = $props();
	let name = $state('');
	const greeting = $derived(name.trim() ? `Hello, ${name.trim()}!` : '');
</script>

<label>{label} <input bind:value={name} /></label>
{#if greeting}<p>{greeting}</p>{/if}

<style>
	p { font-weight: 600; }
</style>
```

## Structure

- Pages: `src/routes/**/+page.svelte`, shared layout: `src/routes/+layout.svelte`
- Components: `src/lib/components/PascalCase.svelte`, import via `$lib/components/...`
- Plain logic: `src/lib/*.ts` (pure functions, easy to unit-test)
- Server-only code: `src/lib/server/` and `+page.server.ts` / `+server.ts`
- Static files: `static/`

## Rules

- Styling: scoped `<style>` blocks in the component. No CSS framework is installed.
- Do not add dependencies unless the task explicitly says so.
- Never edit `bun.lock`. Do not change `vite.config.ts`, `tsconfig.json`, `package.json`
  scripts or the adapter unless the task explicitly says so.
- Tabs for indentation, single quotes (Prettier config in the repo).
- The `src/routes/demo/` and `src/lib/vitest-examples/` folders are boilerplate examples;
  leave them alone unless asked.

## Tests

- The Manager writes the tests; the Coder never creates or edits test files
  (`*.spec.ts`, `*.e2e.ts`). Code is done when the tests pass.
- Unit tests: `src/lib/**/*.spec.ts` (Vitest, node) for pure functions in `src/lib`.
- Component tests: `*.svelte.spec.ts` (Vitest browser mode) – use sparingly.
- End-to-end tests: `*.e2e.ts` (Playwright). Always `page.goto('/path')` with a relative
  path – CI runs them against the Vercel preview URL. Use `getByRole`, `getByLabel`,
  visible text or `getByTestId`; every `data-testid` a test uses must be named in the task.
- E2E tests must not depend on data from other tests; create what they need and use unique
  values (e.g. a timestamp in emails), because the preview database is shared by a run.

## Database (Neon Postgres)

- Production uses the main database; every Vercel preview gets its own copy (branch).
- Connection string: `DATABASE_URL` via `$env/dynamic/private`, only in server code
  (`src/lib/server/`, `+page.server.ts`, `+server.ts`, `hooks.server.ts`).
- Schema changes only through migrations, and only additive (new tables/columns with
  defaults). Never drop or rename columns or tables without explicit approval.
- Never log or return secrets, password hashes or session tokens.

## Checks

CI (`.github/workflows/ci.yml`) runs on every push: `bun run check`, `bun run lint`
(Prettier + ESLint – formatting counts), unit/component tests, `bun run build`, and after
Vercel deployed the preview, the end-to-end tests against it. Locally the same commands
work from the repo root. A failing check means the work is not done.
