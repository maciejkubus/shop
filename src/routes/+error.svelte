<script>
	import { page } from '$app/stores';
	import { config } from '$lib/config';
</script>

<svelte:head>
	<title>{config.siteName} - {$page.status} - {$page.error?.message}</title>
</svelte:head>

<div class="container xl:min-h-[600px] mx-auto flex justify-center items-center">
	<div class="space-y-5 text-center">
		<h1 class="h1 text-8xl">{$page.status}</h1>
		<div class="">
			<h3 class="h3 text-2xl">{$page.error?.message}</h3>
		</div>
	</div>
</div>
