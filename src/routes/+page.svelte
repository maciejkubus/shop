<script lang="ts">
	import ProductCard from '$lib/components/product-card/ProductCard.svelte';
</script>

<div class="max-w-site w-full h-full mx-auto">
	<div class="flex gap-4">
		<div class="w-1/3">
			<ProductCard card="aspect-square bg-transparent" href="#">
				<img slot="background" src="/images/headphones.jpg" alt="headphones" />
				<div slot="header" class="text-2xl font-bold drop-shadow-xl">Today's deal</div>
				<div class="w-full h-full flex justify-end items-end text-8xl font-bold drop-shadow-xl">
					$39
				</div>
				<div slot="footer" class="text-right text-4xl drop-shadow-xl font-heading-token">
					Headphones
				</div>
			</ProductCard>
		</div>
		<div class="w-2/3 bg-secondary">
			<ProductCard card="bg-transparent" href="#">
				<img
					slot="background"
					src="/images/laptops.jpg"
					alt="headphones"
					class="w-full h-full object-cover"
				/>
				<div slot="header" class="text-2xl font-bold drop-shadow-xl">Summer sale</div>
				<div class="w-full h-full flex justify-end items-end text-8xl font-bold drop-shadow-xl">
					$1999
				</div>
				<div slot="footer" class="text-right text-4xl drop-shadow-xl font-heading-token">
					Laptops
				</div>
			</ProductCard>
		</div>
	</div>
</div>
