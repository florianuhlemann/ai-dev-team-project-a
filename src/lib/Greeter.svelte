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
		font-size: 1rem;
		color: #fff;
	}

	input {
		padding: 0.75rem 1rem;
		border-radius: 0.75rem;
		border: 1px solid rgba(255, 255, 255, 0.3);
		background: rgba(255, 255, 255, 0.1);
		color: white;
		font-size: 1rem;
		outline: none;
		transition: background 0.2s, border 0.2s;
	}

	input:focus {
		background: rgba(255, 255, 255, 0.2);
		border: 1px solid rgba(255, 255, 255, 0.5);
	}

	p {
		font-size: 1.25rem;
		font-weight: 600;
		color: #ffd9a0;
	}
</style>
