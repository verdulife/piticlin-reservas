import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const Bookings = writable((browser && JSON.parse(localStorage.getItem("Bookings"))) || []);
Bookings.subscribe((val) => browser && (localStorage.Bookings = JSON.stringify(val)));
