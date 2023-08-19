<script lang="ts">
	import '../style/theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../style/app.postcss';
	import '@fortawesome/fontawesome-free/js/all.js';
	import '@splidejs/svelte-splide/css/core';
	import { AppShell } from '@skeletonlabs/skeleton';
	import { config } from '$lib/config';
	import Header from '$lib/components/header/Header.svelte';
	import Logo from '$lib/components/logo/Logo.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
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
					<li><a href="/products" class="text-tertiary-500 before:bg-tertiary-500">Products</a></li>
					<li>
						<a href="/" class="text-tertiary-500 before:bg-tertiary-500 whitespace-nowrap">
							Buy again
						</a>
					</li>
					<li>
						<a href="/" class="text-tertiary-500 before:bg-tertiary-500 whitespace-nowrap">
							Gift cards
						</a>
					</li>
					<li><a href="/" class="text-tertiary-500 before:bg-tertiary-500"> Contact </a></li>
				</ul>
			</nav>
			<ul slot="actions" class="flex gap-4 text-2xl">
				<li>
					<a href="/" class="text-tertiary-500 hover:text-instagram">
						<i class="fab fa-instagram" />
					</a>
				</li>
				<li>
					<a href="/" class="text-tertiary-500 hover:text-facebook">
						<i class="fab fa-facebook-square" />
					</a>
				</li>
				<li>
					<a href="/" class="text-tertiary-500 hover:text-youtube">
						<i class="fab fa-youtube" />
					</a>
				</li>
			</ul>
		</Header>
	</svelte:fragment>
	<main class="h-full p-2 md:p-8 xl:p-16">
		<div class="max-w-site w-full h-full mx-auto flex flex-col gap-16">
			<slot />
		</div>
	</main>
	<svelte:fragment slot="pageFooter">
		<Footer>
			<svelte:fragment slot="col-1">
				<div class="flex gap-4 items-center">
					<div class="flex h-16 py-2">
						<Logo />
					</div>
					<div class="text-4xl font-heading-token font-black">{config.siteName}</div>
				</div>
				<div class="text-tertiary-600 text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</div>
				<div>
					<ul class="flex gap-4 text-2xl">
						<li>
							<a href="/" class="text-tertiary-500 hover:text-instagram">
								<i class="fab fa-instagram" />
							</a>
						</li>
						<li>
							<a href="/" class="text-tertiary-500 hover:text-facebook">
								<i class="fab fa-facebook-square" />
							</a>
						</li>
						<li>
							<a href="/" class="text-tertiary-500 hover:text-youtube">
								<i class="fab fa-youtube" />
							</a>
						</li>
					</ul>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="col-2">
				<div class="text-3xl font-heading-token font-bold">Get in touch</div>
				<div class="text-lg flex flex-col justify-start items-start group gap-1">
					<a
						href="tel:+48 570 277 237"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center group-hover:text-tertiary-500"
					>
						<div><i class="fas fa-phone" /></div>
						<div>+48 570 277 237</div>
					</a>
					<a
						href="mailto:maciekkubus@gmail.com"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center group-hover:text-tertiary-500"
					>
						<div><i class="fas fa-envelope" /></div>
						<div>maciekkubus@gmail.com</div>
					</a>
					<a
						href="https://goo.gl/maps/WhWGN7Mt9tgnJQvLA"
						target="_blank"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center group-hover:text-tertiary-500"
					>
						<div><i class="fas fa-map-marker-alt" /></div>
						<div>Janówka, Mokra 21</div>
					</a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="col-3">
				<div class="text-3xl font-heading-token font-bold">Account</div>
				<div class="text-lg flex flex-col justify-start items-start group gap-1">
					<a
						href="/"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center group-hover:text-tertiary-500"
					>
						<div>Dashboard</div>
					</a>
					<a
						href="/"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center group-hover:text-tertiary-500"
					>
						<div>Settings</div>
					</a>
					<a
						href="/"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center group-hover:text-tertiary-500"
					>
						<div>Orders</div>
					</a>
					<a
						href="/"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center group-hover:text-tertiary-500"
					>
						<div>Tickets</div>
					</a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="col-4">
				<div class="text-3xl font-heading-token font-bold">Quick</div>
				<div class="text-lg flex flex-col justify-start items-start group gap-1">
					<a
						href="/"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center group-hover:text-tertiary-500"
					>
						<div>FAQ</div>
					</a>
					<a
						href="/"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center group-hover:text-tertiary-500"
					>
						<div>Privacy Policy</div>
					</a>
					<a
						href="/"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center group-hover:text-tertiary-500"
					>
						<div>Refunds</div>
					</a>
					<a
						href="/"
						class="text-tertiary-600 before:bg-tertiary-500 flex gap-2 w-auto justify-center group-hover:text-tertiary-500"
					>
						<div>Legal issues</div>
					</a>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="bottom">
				Copyrigth &copy; 2023 {config.siteName} - Created By
				<a
					href="https://maciejkubus.usermd.net/"
					target="_blank"
					class="text-tertiary-500 hover:text-tertiary-600 ml-1"
				>
					Maciej Kubus
				</a>
			</svelte:fragment>
		</Footer>
	</svelte:fragment>
</AppShell>
