<script lang="ts">
	import { goto } from '$app/navigation';
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	const products = [
		{
			name: 'Elegant chair',
			quantity: '4',
			price: '$29',
			total: '$116',
			url: '<a href="/product" class="text-tertiary-500">View <i class="fas fa-external-link-alt"></i></a>'
		},
		{
			name: 'Elegant table',
			quantity: '1',
			price: '$49',
			total: '$49',
			url: '<a href="/product" class="text-tertiary-500">View <i class="fas fa-external-link-alt"></i></a>'
		},
		{
			name: 'Headphones',
			quantity: '1',
			price: '$19',
			total: '$19',
			url: '<a href="/product" class="text-tertiary-500">View <i class="fas fa-external-link-alt"></i></a>'
		},
		{
			name: 'Speakers',
			quantity: '2',
			price: '$59',
			total: '$118',
			url: '<a href="/product" class="text-tertiary-500">View <i class="fas fa-external-link-alt"></i></a>'
		}
	];
	const delivery = {
		name: 'Delivery (InPost)',
		quantity: '',
		price: '$10',
		total: '$10',
		url: ''
	};
	let paymentMethod = 'PayPal';
	const productsTable: TableSource = {
		head: ['Name', 'Quantity', 'Product Price', 'Total Price', 'Product'],
		body: tableMapperValues([...products, delivery], ['name', 'quantity', 'price', 'total', 'url']),
		meta: tableMapperValues([...products, delivery], ['name', 'quantity', 'price', 'total', 'url']),
		foot: ['Total', '', '', '', '$310']
	};
	const shipping = {
		adress: 'Lniana 2 m. 21',
		adress2: '',
		city: 'Łódź',
		postCode: '91-158',
		country: 'Poland'
	};
	let loading = false;

	const submit = () => {
		loading = true;
		setTimeout(() => {
			loading = false;
			goto('/thank-you');
		}, 2500);
	};
</script>

<div class="text-2xl md:text-6xl font-bold mb-8">Place an order</div>
<form on:submit|preventDefault={submit} class="space-y-8">
	<div>
		<div class="text-2xl font-bold mb-2">Product list</div>
		<Table
			source={productsTable}
			element="table shadow-xl"
			regionBody="bg-primary-700"
			regionHeadCell="bg-primary-500"
			regionFootCell="bg-primary-800 font-bold"
		/>
	</div>
	<div class="flex flex-col xl:flex-row gap-8">
		<div class="flex-1">
			<div>
				<div>Adress:</div>
				<div>
					<input
						type="text"
						id="adress"
						name="adress"
						placeholder="Adress"
						class="w-full p-2 rounded variant-filled-secondary"
						bind:value={shipping.adress}
						disabled={loading}
					/>
				</div>
			</div>
			<div>
				<div>Adress 2 (next line):</div>
				<div>
					<input
						type="text"
						id="adress2"
						name="adress2"
						placeholder="Adress 2"
						class="w-full p-2 rounded variant-filled-secondary"
						bind:value={shipping.adress2}
						disabled={loading}
					/>
				</div>
			</div>
			<div>
				<div>City:</div>
				<div>
					<input
						type="text"
						id="city"
						name="city"
						placeholder="City"
						class="w-full p-2 rounded variant-filled-secondary"
						bind:value={shipping.city}
						disabled={loading}
					/>
				</div>
			</div>
			<div>
				<div>Post code:</div>
				<div>
					<input
						type="text"
						id="postCode"
						name="postCode"
						placeholder="Post Code"
						class="w-full p-2 rounded variant-filled-secondary"
						bind:value={shipping.postCode}
						disabled={loading}
					/>
				</div>
			</div>
			<div>
				<div>Country:</div>
				<div>
					<input
						type="text"
						id="country"
						name="country"
						placeholder="Country"
						class="w-full p-2 rounded variant-filled-secondary"
						bind:value={shipping.country}
						disabled={loading}
					/>
				</div>
			</div>
		</div>
		<div class="flex-1 space-y-4">
			<div>
				<div class="text-xl font-bold mb-2">Shipping method</div>
				<ListBox>
					<ListBoxItem bind:group={delivery.name} name="medium" value="Delivery (InPost)">
						InPost
					</ListBoxItem>
					<ListBoxItem bind:group={delivery.name} name="medium" value="Delivery (DPD)">
						DPD
					</ListBoxItem>
					<ListBoxItem bind:group={delivery.name} name="medium" value="No delivery">
						No delivery
					</ListBoxItem>
				</ListBox>
			</div>
			<div>
				<div class="text-xl font-bold mb-2">Payment method</div>
				<ListBox>
					<ListBoxItem bind:group={paymentMethod} name="medium" value="PayPal">PayPal</ListBoxItem>
					<ListBoxItem bind:group={paymentMethod} name="medium" value="Bank Transfer">
						Bank Transfer
					</ListBoxItem>
					<ListBoxItem bind:group={paymentMethod} name="medium" value="No payment">
						No payment
					</ListBoxItem>
				</ListBox>
			</div>
		</div>
	</div>

	<div class="pt-4 flex flex-col items-end">
		<button type="submit" class="btn variant-filled-primary" disabled={loading}> Buy </button>
	</div>
</form>
