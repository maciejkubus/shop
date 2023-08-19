<script lang="ts">
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	const tickets = [
		{
			id: '#171132',
			date: '15 March 2023',
			status: 'Completed',
			url: '<a href="/account/ticket" class="text-tertiary-500">View <i class="fas fa-external-link-alt"></i></a>'
		}
	];
	const ticketsTable: TableSource = {
		head: ['Id', 'Date', 'Status', 'View'],
		body: tableMapperValues(tickets, ['id', 'date', 'status', 'url']),
		meta: tableMapperValues(tickets, ['id', 'date', 'status', 'url'])
	};
</script>

<div class="text-2xl md:text-6xl font-bold mb-8">Tickets</div>
<div>
	<Table
		source={ticketsTable}
		element="table shadow-xl"
		regionBody="bg-primary-700"
		regionHeadCell="bg-primary-500"
	/>
</div>
