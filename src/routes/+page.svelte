<script>
	import { Bookings } from '$lib/stores';
	import { Parser } from '@json2csv/plainjs';
	import Booking from '../lib/components/Booking.svelte';

	let searchTerm = '';

	$: filterBookings = $Bookings.filter((b) => {
		const booking = b.name.toLowerCase();
		const term = searchTerm.toLowerCase();
		return booking.includes(term);
	});

	function downloadCSV() {
		try {
			const opts = { withBOM: true, delimiter: ';' };
			const parser = new Parser(opts);
			const csv = parser.parse($Bookings);
			const a = document.createElement('a');

			a.href = `data:text/csv;charset=utf-8,${csv}`;
			a.download = `piticlin-reservas_${new Date().toLocaleDateString().replaceAll('/', '-')}.csv`;
			a.click();
		} catch (err) {
			console.error(err);
			alert('Algo ha salido mal. Vuelva a intentarlo');
		}
	}
</script>

<section class="col acenter xfill">
	{#if $Bookings.length > 0}
		<header class="row jbetween xfill">
			<input class="round" type="text" placeholder="🔍 Buscar por nombre" bind:value={searchTerm} />
			<button class="accent round" on:click={downloadCSV}>DESCARGAR CSV</button>
		</header>

		<ul class="col acenter xfill">
			{#each filterBookings as booking}
				<li class="xfill">
					<Booking {booking} />
				</li>
			{/each}
		</ul>
	{:else}
		<h3>No hay ninguna reserva</h3>
	{/if}
</section>

<style lang="postcss">
	section {
		padding: 2em;

		@media (--tablet) {
			padding: 1em;
		}
	}

	header {
		max-width: 800px;
		padding: 1em 0;

		& input {
			background-color: var(--c-neutral);

			@media (--tablet) {
				max-width: 50%;
			}
		}

		& button {
			font-size: 14px;

			@media (--tablet) {
				max-width: 50%;
			}
		}
	}

	ul {
		gap: 0.25em;

		& li {
			max-width: 800px;
		}
	}
</style>
