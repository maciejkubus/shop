<script lang="ts">
</script>

<header
	class="absolute top-0 left-0 right-0 w-full variant-filled-primary shadow-md overflow-hidden"
>
	<div class="max-w-site mx-auto flex gap-8 h-16 items-center">
		<div class="w-1/4 flex gap-4 items-center">
			<div class="flex h-16 py-2">
				<slot name="image" />
			</div>
			<h1 class="font-black text-3xl tracking-wide">
				<slot name="title" />
			</h1>
		</div>
		<div class="w-2/4">
			<slot name="menu" />
		</div>
		<div class="w-1/4 flex justify-end">
			<slot name="actions" />
		</div>
	</div>
</header>
