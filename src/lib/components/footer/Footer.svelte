<div class="w-full bg-primary-500 px-4 py-12 mt-8">
	<div class="max-w-site mx-auto grid grid-cols-1 md:grid-cols-4 pb-16 pt-8">
		<div class="flex flex-col gap-4">
			<slot name="col-1" />
		</div>
		<div class="flex flex-col gap-4">
			<slot name="col-2" />
		</div>
		<div class="flex flex-col gap-4">
			<slot name="col-3" />
		</div>
		<div class="flex flex-col gap-4">
			<slot name="col-4" />
		</div>
	</div>
	<div
		class="max-w-site mx-auto flex justify-center pt-8 border-t-2 border-tertiary-600 border-solid text-lg"
	>
		<slot name="bottom" />
	</div>
</div>
