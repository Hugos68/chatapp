import { createContext } from 'svelte-contextify';
import { writable, type Writable } from 'svelte/store';

export const [getMarkdownStore, setMarkdownStore] = createContext<Writable<string>>(writable(''));
