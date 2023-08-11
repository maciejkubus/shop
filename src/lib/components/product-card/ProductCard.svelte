<script lang="ts">
	export let card = 'variant-ghost-primary';
	export let header = '';
	export let content = '';
	export let footer = '';
	export let href: string;
</script>

<a
	class="w-full h-full relative flex-1 flex flex-col overflow-hidden rounded-lg shadow-md group cursor-pointer text-tertiary-500 hover:shadow-lg transition-shadow duration-300 ease-in-out
  {$$slots.background ? '' : 'variant-filled-primary'} 
  {card}"
	{href}
	{...$$restProps}
>
	{#if $$slots.background}
		<div
			class="absolute -z-10 inset-0 flex after:content-[''] after:absolute after:inset-0 after:bg-surface-500 after:opacity-60 group-hover:scale-110 transition-transform duration-300 ease-in-out"
		>
			<slot name="background" />
		</div>
	{/if}
	{#if $$slots.header}
		<header class="px-4 pt-4 {header}">
			<slot name="header" />
		</header>
	{/if}
	<section class="p-4 flex-1 {content}">
		<slot />
	</section>
	{#if $$slots.footer}
		<footer class="px-4 pb-4 {footer}">
			<slot name="footer" />
		</footer>
	{/if}
</a>
