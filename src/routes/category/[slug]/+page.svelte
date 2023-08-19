<script lang="ts">
	import ProductFilters from '$lib/components/product-filters/ProductFilters.svelte';
	import ProductDummyList from '$lib/components/product-dummy-list/ProductDummyList.svelte';
	import { page } from '$app/stores';
</script>

<div class="text-4xl md:text-6xl font-bold capitalize">
	{$page.params.slug}
</div>
<div class="flex flex-col md:flex-row gap-8">
	<div class="w-1/4 text-2xl flex flex-col gap-4">
		<ProductFilters />
	</div>
	<div class="w-3/4">
		<ProductDummyList />
	</div>
</div>
