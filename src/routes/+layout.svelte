<script>
	import Nav from '../lib/components/Nav.svelte';
</script>

<Nav />
<main class="scroll">
	<slot />
</main>

<style lang="postcss">
	@import '../lib/layout-classes/all.css';

	main {
		height: calc(100% - 70px);
		background-color: var(--c-neutral-100);

		@media (--tablet) {
			height: calc(100% - 120px);
		}
	}
</style>
