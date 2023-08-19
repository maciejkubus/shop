<script lang="ts">
	import ProductDummyList from '$lib/components/product-dummy-list/ProductDummyList.svelte';
</script>

<div class="text-4xl md:text-6xl font-bold">Buy again</div>

<div>
	<div class="text-2xl font-bold mb-4">12.08.2023</div>
	<ProductDummyList lenght={3} />
</div>

<div>
	<div class="text-2xl font-bold mb-4">09.07.2023</div>
	<ProductDummyList lenght={2} />
</div>

<div>
	<div class="text-2xl font-bold mb-4">01.06.2023</div>
	<ProductDummyList lenght={7} />
</div>

<div>
	<div class="text-2xl font-bold mb-4">25.03.2021</div>
	<ProductDummyList lenght={1} />
</div>
