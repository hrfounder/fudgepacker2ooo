import { writable } from 'svelte/store';
export const activeUser = writable({ initialLoad: true });
export const loading = writable(true);
