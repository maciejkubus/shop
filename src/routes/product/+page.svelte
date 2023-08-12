<script lang="ts">
	import ProductImage from '$lib/components/product-image/ProductImage.svelte';
</script>

<div class="flex flex-col md:flex-row gap-8">
	<div class="flex-1">
		<ProductImage
			images={[
				'/images/chair.jpg',
				'/images/gift-1.jpg',
				'/images/gift-3.jpg',
				'/images/gift-2.jpg',
				'/images/pc-1.jpg',
				'/images/pc-3.jpg',
				'/images/pc-2.jpg'
			]}
		/>
	</div>
	<div class="flex-1 h-full flex flex-col gap-8">
		<div>
			<h2 class="text-6xl">Elegant chair</h2>
			<div class="text-4xl text-tertiary-600 mt-4">$199</div>
			<p class="text-xl mt-8 text-tertiary-600">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laudantium qui
				voluptates! Natus maiores eos sunt, cumque harum deleniti quae recusandae accusantium error
				praesentium corporis nobis, suscipit expedita itaque accusamus!
			</p>
		</div>
		<div>
			<button class="btn variant-filled-primary">Add to cart</button>
		</div>
	</div>
</div>
