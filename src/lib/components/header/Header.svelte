<script lang="ts">
	let open = false;

	const resize = () => {
		if (open && window.innerWidth > 1280) open = false;
	};
</script>

<svelte:window on:resize={resize} />

<header
	class="absolute top-0 left-0 right-0 w-full variant-filled-primary shadow-md overflow-hidden"
>
	<div class="max-w-site mx-auto flex gap-8 h-16 items-center px-8 xl:px-0">
		<div class="w-1/2 xl:w-1/4 flex gap-4 items-center">
			<div class="flex h-16 py-2">
				<slot name="image" />
			</div>
			<h1 class="font-black text-3xl tracking-wide">
				<slot name="title" />
			</h1>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="
      {open ? 'fixed top-16 bottom-0 left-0 w-full variant-filled-primary' : 'hidden'} 
      xl:flex w-2/4"
			on:click={() => (open = false)}
		>
			<slot name="menu" />
		</div>
		<div class="w-1/2 xl:w-1/4 flex justify-end items-center gap-4">
			<slot name="actions" />
			<div class="xl:hidden w-8">
				{#if open}
					<button class="text-3xl" on:click={() => (open = false)}>
						<i class="fas fa-times" />
					</button>
				{:else}
					<button class="text-3xl" on:click={() => (open = true)}>
						<i class="fas fa-bars" />
					</button>
				{/if}
			</div>
		</div>
	</div>
</header>
