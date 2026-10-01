<script lang="ts">
	import { buildGreeting } from './greeting';

	let name = $state('');
	let greeting = $derived(buildGreeting(name));
</script>

<label for="first-name">First name</label>
<input id="first-name" type="text" autocomplete="given-name" bind:value={name} />

<p data-testid="greeting" aria-live="polite">
	{#if greeting}
		{greeting}
	{:else}
		Please enter your first name.
	{/if}
</p>

<style>
	label {
		display: block;
		margin-bottom: 0.5rem;
	}
</style>