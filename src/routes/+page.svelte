<script lang="ts">
	import ProductCard from '$lib/components/product-card/ProductCard.svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
</script>

<div class="max-w-site w-full h-full mx-auto flex flex-col gap-8">
	<div class="flex gap-4 w-full">
		<Splide hasTrack={false} class="w-full flex rounded overflow-hidden bg-surface-500">
			<SplideTrack class="w-full">
				<SplideSlide
					class="w-full flex flex-col items-start gap-2 relative px-10 md:px-16 py-12 before:content-[''] before:absolute before:inset-0 before:opacity-40 before:bg-img-slider-1 before:bg-center before:bg-cover before:-z-10"
				>
					<div>
						<div class="text-sm font-bold variant-filled-primary px-4 py-2 rounded">
							Up to 70% off
						</div>
					</div>
					<div>
						<div class="text-4xl md:text-6xl font-bold">How summer deal</div>
					</div>
					<div>
						<div class="text-xl md:text-2xl py-4 text-tertiary-600">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quas illo, unde modi
							optio dolorem molestiae a deserunt commodi nam.
						</div>
					</div>
					<div class="flex gap-4 pb-4 items-end">
						<div class="text-4xl font-bold">$149</div>
						<div class="text-2xl font-bold line-through text-tertiary-600">$199</div>
					</div>
					<div class="flex gap-4">
						<button class="btn variant-filled-primary font-bold text-lg"> Shop now </button>
						<button class="btn variant-filled-secondary font-bold text-lg"> See more </button>
					</div>
				</SplideSlide>
				<SplideSlide
					class="w-full flex flex-col items-start gap-2 relative px-10 md:px-16 py-12 before:content-[''] before:absolute before:inset-0 before:opacity-40 before:bg-img-slider-2 before:bg-center before:bg-cover before:-z-10"
				>
					<div>
						<div class="text-sm font-bold variant-filled-primary px-4 py-2 rounded">
							Up to 40% off
						</div>
					</div>
					<div>
						<div class="text-4xl md:text-6xl font-bold">How Winter deal</div>
					</div>
					<div>
						<div class="text-xl md:text-2xl py-4 text-tertiary-600">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam quas illo, unde modi
							optio dolorem molestiae a deserunt commodi nam.
						</div>
					</div>
					<div class="flex gap-4 pb-4 items-end">
						<div class="text-4xl font-bold">$749</div>
						<div class="text-2xl font-bold line-through text-tertiary-600">$1099</div>
					</div>
					<div class="flex gap-4">
						<button class="btn variant-filled-primary font-bold text-lg"> Shop now </button>
						<button class="btn variant-filled-secondary font-bold text-lg"> See more </button>
					</div>
				</SplideSlide>
			</SplideTrack>

			<div class="splide__arrows text-2xl">
				<button
					class="splide__arrow splide__arrow--prev absolute top-1/2 -translate-y-1/2 left-0 p-2 bg-surface-500 bg-opacity-70"
				>
					<i class="fas fa-chevron-left" />
				</button>
				<button
					class="splide__arrow splide__arrow--next absolute top-1/2 -translate-y-1/2 right-0 p-2 bg-surface-500 bg-opacity-70"
				>
					<i class="fas fa-chevron-right" />
				</button>
			</div>
		</Splide>
	</div>
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
