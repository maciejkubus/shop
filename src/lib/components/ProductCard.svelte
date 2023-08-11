<script lang="ts">
	export let card = 'variant-ghost-primary';
	export let header = '';
	export let content = '';
	export let footer = '';
</script>

<div
	class="w-full h-full relative flex-1 flex flex-col overflow-hidden rounded-lg shadow-md
  {$$slots.background ? '' : 'variant-filled-primary'} 
  {card}"
>
	{#if $$slots.background}
		<div
			class="absolute -z-10 inset-0 flex after:content-[''] after:absolute after:inset-0 after:bg-surface-500 after:opacity-60"
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
</div>
