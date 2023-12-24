import { availableLanguageTags, type AvailableLanguageTag } from '$paraglide/runtime';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const match = (param: any): param is AvailableLanguageTag => {
	return availableLanguageTags.includes(param);
};
