<script lang="ts">
	import type { IProduct } from '$lib/interfaces/product.interface';

	export let product: IProduct;
	export let sale: string | null = null;
</script>

<a href={product.url} {...$$restProps}>
	<div class="group">
		<div class="rounded overflow-hidden relative w-full aspect-[3/4]">
			{#if sale}
				<div class="absolute top-2 left-2 variant-filled-error text-xl px-2 py-1 rounded">
					{sale}
				</div>
			{/if}
			<img
				src={product.image}
				alt={product.name}
				class="flex aspect-[3/4] object-cover object-center absolute inset-0 -z-10"
			/>
			<a
				class="btn variant-filled-primary rounded px-4 py-2 absolute left-1/2 -translate-x-1/2 translate-y-full bottom-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out delay-100"
				href={product.url + '?addToCart=1'}
			>
				Buy now
			</a>
			<div
				class="absolute right-4 top-4 text-surface-500 flex flex-col gap-2 translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out"
			>
				<div
					class="variant-filled-tertiary border-2 border-solid border-surface-500 aspect-square flex justify-center items-center text-lg p-1 rounded-full hover:-rotate-12 hover:scale-105 transition-all duration-200 ease-in-out"
				>
					<i class="fas fa-shopping-cart" />
				</div>
				<div
					class="variant-filled-tertiary border-2 border-solid border-surface-500 aspect-square flex justify-center items-center text-lg p-1 rounded-full hover:-rotate-12 hover:scale-105 transition-all duration-200 ease-in-out"
				>
					<i class="fas fa-balance-scale" />
				</div>
				<div
					class="variant-filled-tertiary border-2 border-solid border-surface-500 aspect-square flex justify-center items-center text-lg p-1 rounded-full hover:-rotate-12 hover:scale-105 transition-all duration-200 ease-in-out"
				>
					<i class="fas fa-wrench" />
				</div>
				<div
					class="variant-filled-tertiary border-2 border-solid border-surface-500 aspect-square flex justify-center items-center text-lg p-1 rounded-full hover:-rotate-12 hover:scale-105 transition-all duration-200 ease-in-out"
				>
					<i class="fas fa-share-alt" />
				</div>
			</div>
		</div>
		<div class="w-full flex justify-between items-center pt-4">
			<div class="text-center text-2xl leading-none">
				{product.name}
			</div>
			<div class="text-center text-4xl font-bold font-heading-token leading-none py-2">
				{product.price}
			</div>
		</div>
	</div>
</a>
