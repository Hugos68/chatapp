<script>
	import { getMarkdownStore } from '$lib/contexts/markdown';
	import { micromark } from 'micromark';

	const markdownStore = getMarkdownStore();
</script>

<article class="prose-lg">
	{@html micromark($markdownStore)}
</article>
