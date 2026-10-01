<script lang="ts">
	let { children } = $props();
</script>

<div class="autumn-bg">
	<div class="blob blob-1"></div>
	<div class="blob blob-2"></div>
	<div class="blob blob-3"></div>
	<main>
		{@render children()}
	</main>
</div>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100vh;
		width: 100vw;
		overflow: hidden;
		background-color: #1a1a1a;
	}

	.autumn-bg {
		position: relative;
		width: 100vw;
		height: 100vh;
		background: linear-gradient(135deg, #2c1e1a 0%, #4a2c2a 50%, #1a1a1a 100%);
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
		z-index: 0;
		opacity: 0.6;
	}

	.blob-1 {
		width: 400px;
		height: 400px;
		background: #d97706;
		top: -100px;
		left: -100px;
	}

	.blob-2 {
		width: 500px;
		height: 500px;
		background: #991b1b;
		bottom: -150px;
		right: -100px;
	}

	.blob-3 {
		width: 300px;
		height: 300px;
		background: #7c2d12;
		top: 40%;
		right: 20%;
	}

	main {
		position: relative;
		z-index: 1;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
