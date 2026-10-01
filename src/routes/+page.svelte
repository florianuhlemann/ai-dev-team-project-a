<script lang="ts">
	import Greeter from '$lib/Greeter.svelte';
</script>

<div class="glass-card" data-testid="card">
	<h1>Hello World</h1>
	<Greeter />
</div>

<style>
	.glass-card {
		padding: 3rem 2rem;
		border-radius: 2rem;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
		max-width: 90%;
		width: 450px;
		text-align: center;
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	h1 {
		color: #fff;
		font-size: 3rem;
		margin: 0;
		font-weight: 800;
	}

	@media (max-width: 480px) {
		.glass-card {
			padding: 2rem 1rem;
			width: 95%;
		}
		h1 {
			font-size: 2rem;
		}
	}
</style>
