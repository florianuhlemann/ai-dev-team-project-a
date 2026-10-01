<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="blob blob-orange" aria-hidden="true"></div>
<div class="blob blob-red" aria-hidden="true"></div>
<div class="blob blob-gold" aria-hidden="true"></div>

{@render children()}

<style>
	:global(html), :global(body) {
		margin: 0;
		height: 100%;
		overflow: hidden;
		overscroll-behavior: none;
	}

	:global(*), :global(*::before), :global(*::after) {
		box-sizing: border-box;
	}

	:global(body) {
		background: linear-gradient(135deg, #3b0d0c 0%, #7a2e12 45%, #c2561a 100%);
		color: #fff4e0;
		font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
	}

	.blob {
		position: fixed;
		border-radius: 50%;
		filter: blur(60px);
		opacity: 0.6;
		pointer-events: none;
		z-index: 0;
	}

	.blob-orange {
		width: 40vmax;
		height: 40vmax;
		background: #ff8c1a;
		top: -10vmax;
		left: -8vmax;
	}

	.blob-red {
		width: 35vmax;
		height: 35vmax;
		background: #a3201a;
		tom: -12vmax;
		right: -6vmax;
	}

	.blob-gold {
		width: 25vmax;
		height: 25vmax;
		background: #f2b632;
		tom: 10vmax;
		left: 20vmax;
	}
</style>
