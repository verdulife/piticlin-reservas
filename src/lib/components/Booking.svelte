<script>
	import { Prices } from '$lib/stores';
	export let booking;

	function formatDate(date) {
		const d = new Date(date);
		const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

		return new Intl.DateTimeFormat('es-ES', options).format(d);
	}
</script>

<article class="col xfill">
	<header class="col">
		<h3>{booking.name}</h3>
		<p>{booking.service} - {booking.city}</p>
	</header>

	<footer class="row jbetween xfill">
		<p>{formatDate(booking.date)}</p>
		<p><b>{booking.payment}/{$Prices[booking.service]}€</b></p>
	</footer>
</article>

<style lang="postcss">
	article {
		background-color: var(--c-neutral);
		gap: 1em;
		border-radius: 0.25em;
		padding: 1em;
	}

	header {
		gap: 0.25em;
	}

	h3 {
		font-size: 20px;
		font-weight: bold;
	}

	p {
		color: var(--c-neutral-700);
		font-size: 14px;
		text-transform: uppercase;
	}
</style>
