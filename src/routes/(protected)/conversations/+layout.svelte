<script lang="ts">
	export let data;

	$: ({ conversations } = data);
</script>

<div class="grid grid-cols-[20%_1fr]">
	<aside class="h-screen bg-stone-200 dark:bg-stone-800">
		<ul>
			{#each conversations as { id, title }}
				<li>
					<a
						class="block p-2 w-full bg-stone-300 dark:bg-stone-700"
						href="/conversations/{id}"
					>
						{title}
					</a>
				</li>
			{/each}
		</ul>
	</aside>
	<div>
		<slot />
	</div>
</div>
