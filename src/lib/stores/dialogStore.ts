import { writable } from 'svelte/store';

export type DialogOptions = {
	component: ConstructorOfATypedSvelteComponent;
	props?: Record<string, unknown>;
};

export interface Dialog extends DialogOptions {
	id: symbol;
	close: () => void;
}

function createDialogStore() {
	const store = writable<Dialog[]>([]);

	function trigger({ component, props }: DialogOptions) {
		const id = Symbol();
		const dialog: Dialog = {
			component,
			props,
			id,
			close: () => {
				store.update((dialogs) => {
					dialogs = dialogs.filter((d) => d.id !== id);
					return dialogs;
				});
			}
		};
		store.update((dialogs) => {
			dialogs.push(dialog);
			return dialogs;
		});
	}

	function close() {
		store.update((dialogs) => {
			dialogs.pop();
			return dialogs;
		});
	}

	return {
		subscribe: store.subscribe,
		trigger,
		close
	};
}

export const dialogStore = createDialogStore();
