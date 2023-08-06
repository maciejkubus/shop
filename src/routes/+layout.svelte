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
			<svelte:fragment slot="image">
				<a class="contents" href="/">
					<Logo />
				</a>
			</svelte:fragment>
			<svelte:fragment slot="title">
				<a class="text-white before:bg-white" href="/"> {config.siteName} </a>
			</svelte:fragment>
		</Header>
	</svelte:fragment>
	<slot />
</AppShell>
