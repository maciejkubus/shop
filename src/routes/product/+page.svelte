<script lang="ts">
	import ProductImage from '$lib/components/product-image/ProductImage.svelte';
	import { Avatar, Tab, TabGroup, tableMapperValues } from '@skeletonlabs/skeleton';
	import { Table } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { Ratings } from '@skeletonlabs/skeleton';

	let tabSet = 0;

	const sourceData = [
		{ position: 1, name: 'Width', value: 128 },
		{ position: 2, name: 'Height', value: 128 },
		{ position: 3, name: 'Depth', value: 128 },
		{ position: 4, name: 'Weight', value: 128 },
		{ position: 5, name: 'Material', value: 'Wood' },
		{ position: 6, name: 'Warranty', value: '1 year' },
		{ position: 7, name: 'Origin', value: 'China' }
	];

	const tableSimple: TableSource = {
		head: ['Name', 'Value'],
		body: tableMapperValues(sourceData, ['name', 'value']),
		meta: tableMapperValues(sourceData, ['position', 'name', 'value'])
	};

	let value = { current: 3, max: 5 };
	function iconClick(event: CustomEvent<{ index: number }>): void {
		value.current = event.detail.index;
	}
</script>

<div class="flex flex-col md:flex-row gap-8 py-16">
	<div class="flex-1">
		<ProductImage
			images={[
				'/images/chair.jpg',
				'/images/gift-1.jpg',
				'/images/gift-3.jpg',
				'/images/gift-2.jpg'
			]}
		/>
	</div>
	<div class="flex-1 flex flex-col gap-8">
		<div>
			<h2 class="text-6xl">Elegant chair</h2>
			<div class="text-4xl text-tertiary-600 mt-4">$199</div>
			<p class="text-xl mt-8 text-tertiary-600">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laudantium qui
				voluptates! Natus maiores eos sunt, cumque harum deleniti quae recusandae accusantium error
				praesentium corporis nobis, suscipit expedita itaque accusamus!
			</p>
		</div>
		<div class="flex gap-4 items-end">
			<div>
				<label for="color" class="text-xl text-tertiary-600"> Color </label>
				<select name="color" id="color" class="mt-1 text-surface-500 rounded-md">
					<option value="red">Red</option>
					<option value="blue">Blue</option>
					<option value="green">Green</option>
				</select>
			</div>
			<button class="btn variant-filled-primary">Add to cart</button>
		</div>
	</div>
</div>
<div>
	<TabGroup regionPanel="pt-4">
		<Tab bind:group={tabSet} name="tab1" value={0}>
			<span>Description</span>
		</Tab>
		<Tab bind:group={tabSet} name="tab2" value={1}>Specification</Tab>
		<Tab bind:group={tabSet} name="tab3" value={2}>Instruction</Tab>
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<div>
					<div class="text-4xl font-bold font-heading-token">Best chair</div>
					<p class="mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus tempore nesciunt
						blanditiis porro officia alias beatae explicabo ad sit ratione enim suscipit dolore,
						molestias sequi, eum deleniti ea distinctio, facilis aut. Corporis laboriosam saepe
						neque vel. Accusamus odio quia voluptates.
					</p>
					<p class="mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus tempore nesciunt
						blanditiis porro officia alias beatae explicabo ad sit ratione enim suscipit dolore,
						molestias sequi, eum deleniti ea distinctio, facilis aut. Corporis laboriosam saepe
						neque vel. Accusamus odio quia voluptates.
					</p>
					<p class="mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus tempore nesciunt
						blanditiis porro officia alias beatae explicabo ad sit ratione enim suscipit dolore,
						molestias sequi, eum deleniti ea distinctio, facilis aut. Corporis laboriosam saepe
						neque vel. Accusamus odio quia voluptates.
					</p>
					<div class="text-4xl font-bold font-heading-token mt-8">Chair</div>
					<p class="mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus tempore nesciunt
						blanditiis porro officia alias beatae explicabo ad sit ratione enim suscipit dolore,
						molestias sequi, eum deleniti ea distinctio, facilis aut. Corporis laboriosam saepe
						neque vel. Accusamus odio quia voluptates.
					</p>
					<p class="mt-4">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus tempore nesciunt
						blanditiis porro officia alias beatae explicabo ad sit ratione enim suscipit dolore,
						molestias sequi, eum deleniti ea distinctio, facilis aut. Corporis laboriosam saepe
						neque vel. Accusamus odio quia voluptates.
					</p>
				</div>
			{:else if tabSet === 1}
				<Table source={tableSimple} />
			{:else if tabSet === 2}
				<div class="text-4xl font-bold font-heading-token mt-4">1. Chair</div>
				<p class="mt-4">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus tempore nesciunt
					blanditiis porro officia alias beatae explicabo ad sit ratione enim suscipit dolore,
					molestias sequi, eum deleniti ea distinctio, facilis aut. Corporis laboriosam saepe neque
					vel. Accusamus odio quia voluptates.
				</p>
				<div class="text-4xl font-bold font-heading-token mt-4">2. Chair</div>
				<p class="mt-4">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus tempore nesciunt
					blanditiis porro officia alias beatae explicabo ad sit ratione enim suscipit dolore,
					molestias sequi, eum deleniti ea distinctio, facilis aut. Corporis laboriosam saepe neque
					vel. Accusamus odio quia voluptates.
				</p>
				<div class="text-4xl font-bold font-heading-token mt-4">3. Chair</div>
				<p class="mt-4">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus tempore nesciunt
					blanditiis porro officia alias beatae explicabo ad sit ratione enim suscipit dolore,
					molestias sequi, eum deleniti ea distinctio, facilis aut. Corporis laboriosam saepe neque
					vel. Accusamus odio quia voluptates.
				</p>
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
<div class="w-full">
	<div class="text-4xl font-bold font-heading-token mt-4">Review time!</div>
	<div class="w-full mt-4">
		<textarea class="w-full text-xl bg-surface-500 input textarea" rows="4" />
	</div>
	<div class="w-full flex flex-col md:flex-row justify-end items-center gap-8 mt-4">
		<div>
			<Ratings bind:value={value.current} max={value.max} interactive on:icon={iconClick}>
				<svelte:fragment slot="empty">
					<span class="text-3xl">🟡</span>
				</svelte:fragment>
				<svelte:fragment slot="half">
					<span class="text-3xl">✨</span>
				</svelte:fragment>
				<svelte:fragment slot="full">
					<span class="text-3xl">⭐</span>
				</svelte:fragment>
			</Ratings>
		</div>
		<div>
			<button class="btn variant-filled-primary">Submit review</button>
		</div>
	</div>
</div>
<div class="w-full space-y-8">
	<div class="card">
		<header class="card-header flex gap-4 items-center">
			<Avatar src="/images/characters/1.jpg" width="w-16" rounded="rounded-full" />
			<span class="font-bold text-2xl">Priestess</span>
		</header>
		<section class="p-4 text-xl">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quidem obcaecati inventore
			earum sint repellat.
		</section>
	</div>
	<div class="card">
		<header class="card-header flex gap-4 items-center">
			<Avatar src="/images/characters/2.jpg" width="w-16" rounded="rounded-full" />
			<span class="font-bold text-2xl">Mage</span>
		</header>
		<section class="p-4 text-xl">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, rem. Animi expedita, magnam
			repellendus natus ratione, ex alias ipsam iusto magni laboriosam pariatur facilis aut?
			Corrupti natus quo alias eos error sunt debitis. Cupiditate quo, facere totam nemo veniam
			eveniet.
		</section>
	</div>
	<div class="card">
		<header class="card-header flex gap-4 items-center">
			<Avatar src="/images/characters/4.jpg" width="w-16" rounded="rounded-full" />
			<span class="font-bold text-2xl">Angel of death</span>
		</header>
		<section class="p-4 text-xl">Lorem ipsum dolor.</section>
	</div>
	<div class="card">
		<header class="card-header flex gap-4 items-center">
			<Avatar src="/images/characters/5.jpg" width="w-16" rounded="rounded-full" />
			<span class="font-bold text-2xl">Wise one</span>
		</header>
		<section class="p-4 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing.</section>
	</div>
	<div class="card">
		<header class="card-header flex gap-4 items-center">
			<Avatar src="/images/characters/6.jpg" width="w-16" rounded="rounded-full" />
			<span class="font-bold text-2xl">Jinx</span>
		</header>
		<section class="p-4 text-xl">
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptate nam iste fuga
			dolorem, labore quas minima enim aperiam cupiditate!
		</section>
	</div>
	<div class="card">
		<header class="card-header flex gap-4 items-center">
			<Avatar src="/images/characters/7.jpg" width="w-16" rounded="rounded-full" />
			<span class="font-bold text-2xl">Nergal</span>
		</header>
		<section class="p-4 text-xl">Babylonian god of death. His symbol is a fly.</section>
	</div>
	<div class="card">
		<header class="card-header flex gap-4 items-center">
			<Avatar src="/images/characters/8.jpg" width="w-16" rounded="rounded-full" />
			<span class="font-bold text-2xl">Cyberpunk kid</span>
		</header>
		<section class="p-4 text-xl">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt dolorum perferendis sit, est
			accusamus, optio eveniet eligendi, accusantium nesciunt aliquam magnam odit! Nihil soluta
			officiis ut eius inventore vero obcaecati?
		</section>
	</div>
</div>
