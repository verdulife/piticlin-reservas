<script>
	import { fly } from 'svelte/transition';
	export let message;
</script>

<span class="row jcenter" transition:fly>
	<p>{message}</p>
</span>

<style lang="postcss">
	span {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 90%;
		max-width: 400px;
		background-color: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(5px);
		color: #fff;
		border-left: 8px solid var(--c-success);
		border-radius: 0.25em;
		margin: 1em auto;
		padding: 1em;
		z-index: 99;
	}
</style>
