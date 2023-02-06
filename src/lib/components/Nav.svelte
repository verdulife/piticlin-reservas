<nav class="row jbetween acenter xfill">
	<img src="/logo.svg" alt="Piticlin Piticlin" />

	<aside class="row">
		<a href="/" class="btn accent round">RESERVAS</a>
		<a href="/add" class="btn accent round">AÑADIR</a>
		<a href="/config" class="btn accent round">AJUSTES</a>
	</aside>
</nav>

<style lang="postcss">
	nav {
		height: 70px;
		gap: 1em;
		border-bottom: 1px solid var(--c-neutral-100);
		padding: 1em calc(50% - 400px);
		z-index: 9;

		@media (--tablet) {
			height: 120px;
			flex-direction: column;
			flex-wrap: nowrap;
		}

		& img {
			width: 200px;
		}

		& aside {
			gap: 1em;

			& a {
				width: 120px;
				font-size: 14px;
				padding: 0.5em 1em;
			}
		}
	}
</style>
