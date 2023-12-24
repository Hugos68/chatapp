import { availableLanguageTags, sourceLanguageTag, type AvailableLanguageTag, setLanguageTag, languageTag, isAvailableLanguageTag } from '$paraglide/runtime';
import { type Handle } from '@sveltejs/kit';

export const language: Handle = async ({ event, resolve }) => {
	const preferredLanguage = event.cookies.get('preferred-language');
	const acceptLanguageHeader = event.request.headers.get('accept-language');
	const acceptLanguage = acceptLanguageHeader ? parseAcceptLanguage(acceptLanguageHeader)[0].tag : null;
	const fallbackLanguage = sourceLanguageTag;

	const language = [preferredLanguage, acceptLanguage, fallbackLanguage].find((language) => {
		if (language && isAvailableLanguageTag(language)) {
			setLanguageTag(language);
			return true;
		}
		return false;
	}) as AvailableLanguageTag;


	return await resolve(event, {	
		transformPageChunk({ html, done }) {
			if (done) {
				return html.replace('%lang%', language);
			}
		}
	});
};

function parseAcceptLanguage(acceptLanguage: string) {
	const languages = acceptLanguage.split(',').map((language) => {
		const [tag, q] = language.trim().split(';q=');
		return { tag, q: Number(q || 1) };
	});
	languages.sort((a, b) => b.q - a.q);
	return languages;
}
