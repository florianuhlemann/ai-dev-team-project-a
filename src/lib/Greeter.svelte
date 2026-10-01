<script lang="ts">
	let { label = 'First name' }: { label?: string } = $props();
	let name = $state('');
	const greeting = $derived(name.trim() ? `Hello, ${name.trim()}!` : '');
</script>

<div class="greeter-container">
	<label for="name-input">{label}</label>
	<input 
		id="name-input"
		type="text" 
		bind:value={name} 
		placeholder="Enter your name"
	/>
	{#if greeting}
		<p data-testid="greeting">{greeting}</p>
	{/if}
</div>

<style>
	.greeter-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: center;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
		font-size: 0.9rem;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		color: #ffd9a0;
	}

	input {
		width: 100%;
		padding: 0.75rem 1rem;
		font-size: 1.1rem;
		color: #fff4e0;
		background-color: rgba(255, 255, 255, 0.12);
		border: 1px solid rgba(255, 220, 170, 0.4);
		border-radius: 0.75rem;
		outline: none;
		transition: border-color 0.2s, box-shadow 0.2s;
	}

	input::placeholder {
		color: rgba(255, 244, 224, 0.6);
	}

	input:focus {
		border-color: #f2b632;
		box-shadow: 0 0 0 3px rgba(242, 182, 50, 0.35);
	}

	p {
		margin: 1.5rem 0 0;
		min-height: 1.6em;
		font-size: 1.25rem;
		color: #fff4e0;
	}
</style>
