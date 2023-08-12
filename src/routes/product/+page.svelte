<script lang="ts">
	import ProductImage from '$lib/components/product-image/ProductImage.svelte';
</script>

<div class="flex flex-col md:flex-row gap-8">
	<div class="flex-1">
		<ProductImage
			images={[
				'/images/gift-1.jpg',
				'/images/gift-3.jpg',
				'/images/gift-2.jpg',
				'/images/pc-1.jpg',
				'/images/pc-3.jpg',
				'/images/pc-2.jpg'
			]}
		/>
	</div>
	<div class="flex-1" />
</div>
