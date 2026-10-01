<script lang="ts">
	let { children } = $props();
</script>

<div class="background-container">
	<div class="blob blob-1"></div>
	<div class="blob blob-2"></div>
	<div class="blob blob-3"></div>
	<div class="content">
		{@render children()}
	</div>
</div>

<style>
	:global(html), :global(body) {
		margin: 0;
		padding: 0;
		height: 100%;
		overflow: hidden;
		background-color: #1a1a1a;
	}

	.background-container {
		position: relative;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background: linear-gradient(135deg, #2c1e1a 0%, #4a2c2a 100%);
	}

	.blob {
		position: absolute;
		border-radius: 50%;
		filter: blur(60px);
		opacity: 0.6;
	}

	.blob-1 {
		width: 400px;
		height: 400px;
		background: #d97706;
		top: -100px;
		right: -100px;
	}

	.blob-2 {
		width: 500px;
		height: 500px;
		background: #991b1b;
		bottom: -150px;
		left: -100px;
	}

	.blob-3 {
		width: 300px;
		height: 300px;
		background: #7c2d12;
		top: 40%;
		left: 20%;
	}

	.content {
		position: relative;
		z-index: 10;
		width: 100%;
		height: 100%;
	}
</style>
