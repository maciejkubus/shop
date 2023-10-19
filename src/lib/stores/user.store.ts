
import type { IUserStore } from '$lib/interfaces/user-store.interface';
import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';

const userStore: Writable<IUserStore> = localStorageStore('user', {
  loggedIn: false,
  bearer: '',
});

export { userStore };

