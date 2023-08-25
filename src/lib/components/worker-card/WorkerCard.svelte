<script lang="ts">
</script>

<div class="">
	<div class="rounded overflow-hidden relative w-full aspect-[3/4]">
		<slot name="image" />
	</div>
	<div class="w-full pt-4 text-center">
		<div class="text-4xl font-bold font-heading-token leading-none py-2">
			<slot name="fullname" />
		</div>
		<div class="text-2xl leading-none">
			<slot name="position" />
		</div>
	</div>
</div>
