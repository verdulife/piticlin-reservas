import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const Bookings = writable((browser && JSON.parse(localStorage.getItem("Bookings"))) || []);
Bookings.subscribe((val) => browser && (localStorage.Bookings = JSON.stringify(val)));

export const Prices = writable((browser && JSON.parse(localStorage.getItem("Prices"))) || { fotomaton: 295, audiolibro: 89 });
Prices.subscribe((val) => browser && (localStorage.Prices = JSON.stringify(val)));
