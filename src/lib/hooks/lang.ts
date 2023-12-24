import { sourceLanguageTag } from '$paraglide/runtime';
import { type Handle } from '@sveltejs/kit';

export const lang: Handle = async ({ event, resolve }) => {
	const lang = event.params.lang ?? sourceLanguageTag;

	return await resolve(event, {
		transformPageChunk({ html, done }) {
			if (done) {
				return html.replace('%lang%', lang);
			}
		}
	});
};
