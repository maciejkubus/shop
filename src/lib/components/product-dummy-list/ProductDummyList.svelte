<script lang="ts">
	import ProductTile from '$lib/components/product-tile/ProductTile.svelte';
	import type { IProduct } from '$lib/interfaces/product.interface';

	const product: IProduct = {
		name: 'Elegant Chair',
		price: '$189',
		url: '/product/',
		image: '/images/chair.jpg'
	};
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
	{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20] as item}
		<ProductTile {product} class="text-tertiary-500 no-anim" />
	{/each}
</div>
