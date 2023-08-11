<script lang="ts">
	import '../style/theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../style/app.postcss';
	import '@fortawesome/fontawesome-free/js/all.js';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/Header.svelte';
	import { config } from '$lib/config';
	import Logo from '$lib/components/Logo.svelte';
</script>

<AppShell regionPage="pt-16">
	<svelte:fragment slot="header">
		<Header>
			<a slot="image" class="contents" href="/">
				<Logo />
			</a>
			<a slot="title" class="text-tertiary-500 before:bg-tertiary-500" href="/">
				{config.siteName}
			</a>
			<nav slot="menu" class="w-full flex justify-center items-center">
				<ul class="flex gap-4 text-xl">
					<li><a href="/" class="text-tertiary-500 before:bg-tertiary-500">Home</a></li>
					<li><a href="/" class="text-tertiary-500 before:bg-tertiary-500">Products</a></li>
					<li>
						<a href="/" class="text-tertiary-500 before:bg-tertiary-500 whitespace-nowrap"
							>Buy again</a
						>
					</li>
					<li>
						<a href="/" class="text-tertiary-500 before:bg-tertiary-500 whitespace-nowrap"
							>Gift cards</a
						>
					</li>
					<li><a href="/" class="text-tertiary-500 before:bg-tertiary-500">Contact</a></li>
				</ul>
			</nav>
			<ul slot="actions" class="flex gap-4 text-2xl">
				<li>
					<a href="/" class="text-tertiary-500 hover:text-instagram"
						><i class="fab fa-instagram" /></a
					>
				</li>
				<li>
					<a href="/" class="text-tertiary-500 hover:text-facebook"
						><i class="fab fa-facebook-square" /></a
					>
				</li>
				<li>
					<a href="/" class="text-tertiary-500 hover:text-youtube"><i class="fab fa-youtube" /></a>
				</li>
			</ul>
		</Header>
	</svelte:fragment>
	<main class="h-full p-16">
		<slot />
	</main>
</AppShell>
