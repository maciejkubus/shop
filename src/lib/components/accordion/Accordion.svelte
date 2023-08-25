<script lang="ts">
	import type { IAccordionItem } from '$lib/interfaces/accordion-item.interface';

	export let items: IAccordionItem[] = [];

	let visible = -1;
</script>

<div class="flex flex-col gap-4">
	{#each items as item, index}
		<div class="variant-filled-primary">
			<div class="p-4 flex justify-between">
				<div class="text-4xl flex justify-center items-center gap-0.5 font-bold">{item.title}</div>
				<button
					class="text-4xl {visible == index ? 'hidden' : 'flex'}"
					on:click={() => (visible = index)}
				>
					<i class="fas fa-plus" />
				</button>
				<button
					class="text-4xl {visible == index ? 'flex' : 'hidden'}"
					on:click={() => (visible = -1)}
				>
					<i class="fas fa-minus" />
				</button>
			</div>
			{#if visible === index}
				<div class="p-4">
					<div class="text-lh">{item.text}</div>
				</div>
			{/if}
		</div>
	{/each}
</div>
