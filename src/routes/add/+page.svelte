<script>
	import { Bookings } from '$lib/stores';

	let booking = {};
	const servicePrices = {
		fotomaton: 295,
		audiolibro: 89
	};

	function calculatePaymentDiference(payment, service) {
		const servicePrice = servicePrices[service];
		const diference = servicePrice - payment;

		return diference;
	}

	function addBooking(e) {
		const { srcElement } = e;
		const { ...bookingValues } = booking;
		const { payment, service } = bookingValues;

		srcElement.reset();

		bookingValues.diference = calculatePaymentDiference(payment, service);
		bookingValues.createdAt = new Date();
		bookingValues.date = new Date(bookingValues.date);

		$Bookings.push(bookingValues);
		$Bookings = $Bookings;
	}
</script>

<section class="col acenter xfill">
	<form class="col xfill" on:submit|preventDefault={addBooking} autocomplete="off">
		<h3>Información de contacto</h3>

		<div class="input-wrapper col xfill">
			<label for="name">NOMBRE</label>
			<input
				class="outline -400 round xfill"
				type="text"
				id="name"
				placeholder="Ej. Maria y Jose"
				bind:value={booking.name}
				required
			/>
		</div>

		<div class="input-wrapper col xfill">
			<label for="phone">TELÉFONO</label>
			<input
				class="outline -400 round xfill"
				type="tel"
				id="phone"
				placeholder="Ej. 600 600 600"
				bind:value={booking.phone}
				required
			/>
		</div>

		<div class="input-wrapper col xfill">
			<label for="city">POBLACIÓN</label>
			<input
				class="outline -400 round xfill"
				type="text"
				id="city"
				placeholder="Ej. Barcelona"
				bind:value={booking.city}
				required
			/>
		</div>

		<h3>Información de la reserva</h3>

		<div class="input-wrapper col xfill">
			<label for="date">FECHA DE LA RESERVA</label>
			<input
				class="outline -400 round xfill"
				type="date"
				id="date"
				bind:value={booking.date}
				required
			/>
		</div>

		<div class="input-wrapper col xfill">
			<label for="service">SERVICIO CONTRATADO</label>
			<select class="outline -400 round xfill" id="service" bind:value={booking.service} required>
				<option value="fotomaton">Fotomatón</option>
				<option value="audiolibro">Audiolibro</option>
			</select>
		</div>

		<div class="input-wrapper col xfill">
			<label for="payment">PAGO ADELANTADO (€)</label>
			<input
				class="outline -400 round xfill"
				type="number"
				step="0.05"
				id="payment"
				placeholder="Ej. 200"
				bind:value={booking.payment}
				required
			/>
		</div>

		<button class="accent round xfill">AÑADIR</button>
	</form>
</section>

<style lang="postcss">
	section {
		padding: 4em;
	}

	form {
		background-color: var(--c-neutral);
		max-width: 600px;
		gap: 2em;
		border-radius: 0.5em;
		box-shadow: 0 20px 20px #00000010;
		padding: 2em;
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

		& input,
		& select {
			color: var(--c-neutral-900);
			border-width: 1px;

			&:focus {
				border-bottom-width: 2px;
			}
		}
	}

	button {
		margin-top: 2em;
	}
</style>
