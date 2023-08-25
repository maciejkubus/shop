<script lang="ts">
	import AccountDashboard from '$lib/components/account-dashboard/AccountDashboard.svelte';
	import AccountNewTicket from '$lib/components/account-new-ticket/AccountNewTicket.svelte';
	import AccountOrders from '$lib/components/account-orders/AccountOrders.svelte';
	import AccountSettings from '$lib/components/account-settings/AccountSettings.svelte';
	import AccountShipping from '$lib/components/account-shipping/AccountShipping.svelte';
	import AccountTickets from '$lib/components/account-tickets/AccountTickets.svelte';

	let tab = 'dashboard';
</script>

<div class="text-4xl md:text-6xl font-bold">My Account</div>

<div class="flex flex-col md:flex-row gap-8">
	<div class="w-full xl:w-1/4 text-2xl flex flex-col gap-4">
		<ul class="flex flex-col gap-4 text-2xl">
			<li>
				<a
					on:click|preventDefault={() => (tab = 'dashboard')}
					href="#dashboard"
					class="text-tertiary-500 hover:text-primary-500
          {tab === 'dashboard' ? 'text-primary-500' : ''}"
				>
					Dashboard
				</a>
			</li>
			<li>
				<a
					on:click|preventDefault={() => (tab = 'orders')}
					href="#orders"
					class="text-tertiary-500 hover:text-primary-500
          {tab === 'orders' ? 'text-primary-500' : ''}"
				>
					Orders
				</a>
			</li>
			<li>
				<a
					on:click|preventDefault={() => (tab = 'shipping')}
					href="#shipping"
					class="text-tertiary-500 hover:text-primary-500
          {tab === 'shipping' ? 'text-primary-500' : ''}"
				>
					Shipping
				</a>
			</li>
			<li>
				<a
					on:click|preventDefault={() => (tab = 'settings')}
					href="#settings"
					class="text-tertiary-500 hover:text-primary-500
          {tab === 'settings' ? 'text-primary-500' : ''}"
				>
					Settings
				</a>
			</li>
			<li>
				<a
					on:click|preventDefault={() => (tab = 'tickets')}
					href="#tickets"
					class="text-tertiary-500 hover:text-primary-500
          {tab === 'tickets' ? 'text-primary-500' : ''}"
				>
					Tickets
				</a>
			</li>
			<li>
				<a
					on:click|preventDefault={() => (tab = 'new-ticket')}
					href="#new-ticket"
					class="text-tertiary-500 hover:text-primary-500
          {tab === 'new-ticket' ? 'text-primary-500' : ''}"
				>
					Create a ticket
				</a>
			</li>
		</ul>
	</div>
	<div class="w-full xl:w-3/4">
		{#if tab === 'dashboard'}
			<AccountDashboard on:changeTab={(e) => (tab = e.detail)} />
		{:else if tab === 'orders'}
			<AccountOrders />
		{:else if tab === 'shipping'}
			<AccountShipping />
		{:else if tab === 'settings'}
			<AccountSettings />
		{:else if tab === 'tickets'}
			<AccountTickets />
		{:else if tab === 'new-ticket'}
			<AccountNewTicket />
		{/if}
	</div>
</div>
