<script lang="ts">
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	const orderInfo = [
		{
			name: 'Order Id',
			value: '171132'
		},
		{
			name: 'Date',
			value: '25 march 2000'
		},
		{
			name: 'Status',
			value: 'Completed'
		},
		{
			name: 'Payment method',
			value: 'PayPal'
		}
	];
	const orderInfoTable: TableSource = {
		head: ['Name', 'Value'],
		body: tableMapperValues(orderInfo, ['name', 'value']),
		meta: tableMapperValues(orderInfo, ['name', 'value'])
	};
	const shipping = [
		{
			name: 'Adress',
			value: 'Mokra 21'
		},
		{
			name: 'Post code',
			value: '95-020'
		},
		{
			name: 'City',
			value: 'Janówka'
		},
		{
			name: 'Country',
			value: 'Poland'
		}
	];
	const shippingTable: TableSource = {
		head: ['Name', 'Value'],
		body: tableMapperValues(shipping, ['name', 'value']),
		meta: tableMapperValues(shipping, ['name', 'value'])
	};
	const products = [
		{
			name: 'Elegant chair',
			quantity: '4',
			price: '$29',
			total: '$116',
			url: '<a href="/product" class="">View <i class="fas fa-external-link-alt"></i></a>'
		},
		{
			name: 'Elegant table',
			quantity: '1',
			price: '$49',
			total: '$49',
			url: '<a href="/product" class="">View <i class="fas fa-external-link-alt"></i></a>'
		},
		{
			name: 'Headphones',
			quantity: '1',
			price: '$19',
			total: '$19',
			url: '<a href="/product" class="">View <i class="fas fa-external-link-alt"></i></a>'
		},
		{
			name: 'Speakers',
			quantity: '2',
			price: '$59',
			total: '$118',
			url: '<a href="/product" class="">View <i class="fas fa-external-link-alt"></i></a>'
		},
		{
			name: 'Delivery',
			quantity: '',
			price: '$8',
			total: '$8',
			url: ''
		}
	];
	const productsTable: TableSource = {
		head: ['Name', 'Quantity', 'Product Price', 'Total Price', 'Product'],
		body: tableMapperValues(products, ['name', 'quantity', 'price', 'total', 'url']),
		meta: tableMapperValues(products, ['name', 'quantity', 'price', 'total', 'url']),
		foot: ['Total', '', '', '', '$310']
	};
</script>

<div class="text-2xl md:text-6xl font-bold mb-8">Order #171132</div>
<div class="space-y-8">
	<div class="flex flex-col xl:flex-row gap-8">
		<div class="flex-1">
			<div class="text-2xl font-bold mb-2">Information</div>
			<Table source={orderInfoTable} element="table shadow-xl" />
		</div>
		<div class="flex-1">
			<div class="text-2xl font-bold mb-2">Shipping</div>
			<Table source={shippingTable} element="table shadow-xl" />
		</div>
	</div>
	<div>
		<div class="text-2xl font-bold mb-2">Product list</div>
		<Table source={productsTable} element="table shadow-xl" />
	</div>
</div>
