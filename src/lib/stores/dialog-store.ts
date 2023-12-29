import { writable } from 'svelte/store';
import { createDialog } from 'svelte-headlessui';

type TriggerParameters = {
	component: ConstructorOfATypedSvelteComponent;
	props?: Record<string, unknown>;
};

type CloseParameters = { id: symbol };

type DialogInstance = {
	component: ConstructorOfATypedSvelteComponent;
	props?: Record<string, unknown>;
	id: symbol;
	close: () => void;
	dialog: HeadlessUIDialog;
};

type HeadlessUIDialog = ReturnType<typeof createDialog>;

function createDialogStore() {
	const { subscribe, update } = writable<DialogInstance[]>([]);

	function trigger({ component, props }: TriggerParameters) {
		const id = Symbol();
		const dialog = createDialog({ expanded: true });

		update((dialogs) => {
			dialogs.push({
				component,
				props,
				id,
				dialog,
				close: () => {
					dialog.close();
					update((dialogs) => dialogs.filter((d) => d.id !== id));
				}
			});
			return dialogs;
		});

		return id;
	}

	function close({ id }: CloseParameters) {
		update((dialogs) => {
			const dialog = dialogs.find((d) => d.id === id);
			if (dialog) dialog.close();
			return dialogs.filter((d) => d.id !== id);
		});
	}

	function closeAll() {
		update((dialogs) => {
			dialogs.forEach((dialog) => dialog.close());
			return [];
		});
	}

	return {
		subscribe,
		trigger,
		close,
		closeAll
	};
}

const dialogStore = createDialogStore();

export { dialogStore, type TriggerParameters, type CloseParameters, type DialogInstance };
