<script>
	import { Bookings } from '$lib/stores';

	function formatDate(date) {
		const d = new Date(date);
		const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

		return new Intl.DateTimeFormat('es-ES', options).format(d);
	}
</script>

<section class="col acenter xfill">
	{#if $Bookings.length > 0}
		<table>
			<thead>
				<tr>
					<th>NOMBRE</th>
					<th>TELÉFONO</th>
					<th>POBLACIÓN</th>
					<th>FECHA RESERVA</th>
					<th>SERVICIO</th>
					<th>PAGO ADELANTADO</th>
					<th>PAGO RESTANTE</th>
				</tr>
			</thead>
			<tbody>
				{#each $Bookings as booking}
					<tr>
						<td>{booking.name}</td>
						<td>{booking.phone}</td>
						<td>{booking.city}</td>
						<td>{formatDate(booking.date)}</td>
						<td>{booking.service}</td>
						<td>{booking.payment}</td>
						<td>{booking.diference}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{:else}
		<h3>No hay ninguna reserva</h3>
	{/if}
</section>

<style lang="postcss">
	section {
		padding: 4em;
	}

	tr {
		background-color: var(--c-neutral);

		&:nth-of-type(even) {
			background-color: var(--c-neutral-200);
		}
	}

	th,
	td {
		border: 1px solid;
		border-color: var(--c-neutral-900);
		padding: 1em;
	}

	th {
		background-color: var(--c-neutral-900);
		color: var(--c-neutral);
	}
</style>
