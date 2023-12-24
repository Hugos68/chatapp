import { sourceLanguageTag } from '$paraglide/runtime';
import { type Handle } from '@sveltejs/kit';

export const lang: Handle = async ({ event, resolve }) => {
	const preferredLanguage = event.cookies.get('preferred-lang');
	const acceptLanguage = event.request.headers.get('accept-language');
	const fallbackLanguage = sourceLanguageTag;

	const language = preferredLanguage || acceptLanguage || fallbackLanguage;

	console.log(language);

	return await resolve(event, {
		transformPageChunk({ html, done }) {
			if (done) {
				return html.replace('%lang%', language);
			}
		}
	});
};
