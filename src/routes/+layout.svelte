<script lang="ts">
	import '../style/theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../style/app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Header.svelte';
	import { config } from '$lib/config';
	import Logo from '$lib/components/Logo.svelte';
</script>

<AppShell>
	<svelte:fragment slot="header">
		<Header>
			<a slot="image" class="contents" href="/">
				<Logo />
			</a>
			<a slot="title" class="text-white before:bg-white" href="/">
				{config.siteName}
			</a>
			<nav slot="menu" class="w-full flex justify-center items-center">
				<ul class="flex gap-4 text-xl">
					<li><a href="/" class="text-white before:bg-white">Home</a></li>
					<li><a href="/" class="text-white before:bg-white">Products</a></li>
					<li><a href="/" class="text-white before:bg-white whitespace-nowrap">Buy again</a></li>
					<li><a href="/" class="text-white before:bg-white whitespace-nowrap">Gift cards</a></li>
					<li><a href="/" class="text-white before:bg-white">Contact</a></li>
				</ul>
			</nav>
		</Header>
	</svelte:fragment>
	<slot />
</AppShell>
