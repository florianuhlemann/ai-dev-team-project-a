<script lang="ts">
	import Greeter from '$lib/Greeter.svelte';
</script>

<main>
	<div class="card" data-testid="card">
		<h1>Hello World</h1>
		<Greeter />
	</div>
</main>

<style>
	main {
		position: relative;
		z-index: 1;
		height: 100dvh;
		display: grid;
		place-items: center;
		padding: 1rem;
	}

	.card {
		width: min(100%, 28rem);
		padding: 2rem;
		border-radius: 1.5rem;
		background-color: rgba(255, 244, 224, 0.14);
		backdrop-filter: blur(18px) saturate(140%);
		-webkit-backdrop-filter: blur(18px) saturate(140%);
		border: 1px solid rgba(255, 220, 170, 0.35);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
		text-align: center;
	}

	h1 {
		margin: 0 0 1.5rem;
		font-size: 2.25rem;
		color: #ffd9a0;
		text-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
	}
</style>
