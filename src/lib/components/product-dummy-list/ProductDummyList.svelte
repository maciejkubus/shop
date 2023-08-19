<script lang="ts">
	import ProductTile from '$lib/components/product-tile/ProductTile.svelte';
	import type { IProduct } from '$lib/interfaces/product.interface';
	import { onMount } from 'svelte';

	const product: IProduct = {
		name: 'Elegant Chair',
		price: '$189',
		url: '/product/',
		image: '/images/chair.jpg'
	};

	export let lenght = 20;

	let items: number[] = [];

	onMount(() => {
		items = Array.from({ length: lenght }, (_, i) => i + 1);
	});
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
	{#each items as item}
		<ProductTile {product} class="text-tertiary-500 no-anim" />
	{/each}
</div>
