<script>
	import { Prices } from '$lib/stores';
</script>

<section class="col acenter xfill">
	<main class="col xfill">
		<h3>Precio del servicio</h3>

		<div class="input-wrapper col xfill">
			<label for="fotomaton">Fotomatón (€)</label>
			<input
				class="outline -400 round xfill"
				type="number"
				step="0.05"
				id="fotomaton"
				placeholder="Ej. 200"
				bind:value={$Prices.fotomaton}
				required
			/>
		</div>

		<div class="input-wrapper col xfill">
			<label for="audiolibro">Audiolibro (€)</label>
			<input
				class="outline -400 round xfill"
				type="number"
				step="0.05"
				id="audiolibro"
				placeholder="Ej. 200"
				bind:value={$Prices.audiolibro}
				required
			/>
		</div>
	</main>
</section>

<style lang="postcss">
	section {
		padding: 2em;

		@media (--tablet) {
			padding: 1em;
		}
	}

	main {
		background-color: var(--c-neutral);
		max-width: 600px;
		gap: 2em;
		border-radius: 0.5em;
		box-shadow: 0 20px 20px #00000010;
		padding: 2em;

		@media (--tablet) {
			padding: 1em;
		}
	}

	h3 {
		margin-top: 1em;
	}

	.input-wrapper {
		gap: 0.5em;

		& label {
			color: var(--c-neutral-500);
			font-size: 14px;
			padding-left: 2em;
		}

		& input {
			color: var(--c-neutral-900);
			border-width: 1px;

			&:focus {
				border-bottom-width: 2px;
			}
		}
	}
</style>
