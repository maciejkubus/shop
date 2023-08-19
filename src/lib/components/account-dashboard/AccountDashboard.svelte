<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
</script>

<div class="text-2xl md:text-6xl font-bold mb-8">Dashboard</div>
<div class="space-y-8">
	<div class="flex gap-4 items-center">
		<Avatar src="/images/characters/6.jpg" width="w-32" rounded="rounded-full" />
		<div>
			<h2 class="text-4xl">Maciej Kubus</h2>
			<p class="text-2xl text-tertiary-600">Premium Supporter</p>
		</div>
	</div>
	<div class="text-xl space-y-1">
		<div>
			<span>Username: </span>
			<span class="text-tertiary-600">maciekkubus</span>
		</div>
		<div>
			<span>E-mail: </span>
			<span class="text-tertiary-600">maciekkubus@gmail.com</span>
		</div>
		<div>
			<span>Password: </span>
			<span class="text-tertiary-600">*************</span>
		</div>
		<div>
			<span>Phone: </span>
			<span class="text-tertiary-600">+48 570 277 237</span>
		</div>
		<div class="pt-4">
			<button class="btn variant-filled-primary" on:click={() => dispatch('changeTab', 'settings')}
				>Change</button
			>
		</div>
	</div>
</div>
