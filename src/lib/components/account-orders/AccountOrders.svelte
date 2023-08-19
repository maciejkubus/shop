<script lang="ts">
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	const orders = [
		{
			orderNumber: '#171132',
			date: '15 March 2023',
			status: 'Completed',
			total: '$299',
			url: '<a href="/account/order" class="text-tertiary-500">View <i class="fas fa-external-link-alt"></i></a>'
		},
		{
			orderNumber: '#221134',
			date: '25 March 2000',
			status: 'Pending',
			total: '$1',
			url: '<a href="/account/order" class="text-tertiary-500">View <i class="fas fa-external-link-alt"></i></a>'
		},
		{
			orderNumber: '#231321',
			date: '24 December 2023',
			status: 'Completed',
			total: '$420',
			url: '<a href="/account/order" class="text-tertiary-500">View <i class="fas fa-external-link-alt"></i></a>'
		}
	];
	const ordersTable: TableSource = {
		head: ['Order', 'Date', 'Status', 'Total', 'View'],
		body: tableMapperValues(orders, ['orderNumber', 'date', 'status', 'total', 'url']),
		meta: tableMapperValues(orders, ['orderNumber', 'date', 'status', 'total', 'url'])
	};
</script>

<div class="text-2xl md:text-6xl font-bold mb-8">Orders</div>
<div>
	<Table
		source={ordersTable}
		element="table shadow-xl"
		regionBody="bg-primary-700"
		regionHeadCell="bg-primary-500"
	/>
</div>
