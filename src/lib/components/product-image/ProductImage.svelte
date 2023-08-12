<script lang="ts">
	import { onMount } from 'svelte';

	export let images: string[] = [];

	let activeImage: string;

	onMount(() => {
		activeImage = images[0];
	});

	const setActiveImage = (image: string) => {
		activeImage = image;
	};
</script>

<div class="flex flex-col md:flex-row gap-4">
	<div class="w-full">
		<img src={activeImage} alt="Product" class="object-cover h-full" />
	</div>
	<div>
		<div class="w-32 flex flex-col gap-3">
			{#each images.splice(0, 4) as image}
				<div class="overflow-hidden w-24 h-24">
					<img
						src={image}
						alt="Product"
						class="w-24 h-24 cursor-pointer object-cover hover:scale-125 transition-all duration-300 ease-in-out"
						on:click={() => setActiveImage(image)}
						aria-hidden
					/>
				</div>
			{/each}
		</div>
	</div>
</div>
