<script lang="ts">
	import { RadioGroup, RadioItem, RangeSlider } from '@skeletonlabs/skeleton';

	let radio: number = 0;
	let width: number = 24;
	let height: number = 88;
	let depth: number = 32;
</script>

<div class="text-4xl md:text-6xl font-bold">Products</div>
<div class="flex flex-col md:flex-row gap-8">
	<div class="w-1/4 text-2xl flex flex-col gap-4">
		<div>
			<div class="text-2xl md:text-4xl font-bold my-4">Category</div>
			<div>
				<div class="flex items-center gap-4">
					<label class="contents"><input type="checkbox" /> Computers</label>
				</div>
				<div class="flex items-center gap-4">
					<label class="contents"><input type="checkbox" /> Keyboards</label>
				</div>
				<div class="flex items-center gap-4">
					<label class="contents"><input type="checkbox" /> Headphones</label>
				</div>
				<div class="flex items-center gap-4">
					<label class="contents"><input type="checkbox" /> Technology</label>
				</div>
				<div class="flex items-center gap-4">
					<label class="contents"><input type="checkbox" /> Laptops</label>
				</div>
			</div>
		</div>
		<div>
			<div class="text-2xl md:text-4xl font-bold my-4">Furniture</div>
			<div>
				<RadioGroup>
					<RadioItem bind:group={radio} name="justify" value={0}>Chair</RadioItem>
					<RadioItem bind:group={radio} name="justify" value={1}>Sofa</RadioItem>
					<RadioItem bind:group={radio} name="justify" value={2}>Table</RadioItem>
				</RadioGroup>
			</div>
		</div>
		<div>
			<div class="text-2xl md:text-4xl font-bold my-4">Width</div>
			<div>
				<RangeSlider name="width-slider" bind:value={width} max={100} step={1} />
				<div class="flex gap-4 items-center mt-2">
					<input type="number" class="input" bind:value={width} />
					<button class="btn variant-filled-primary">Apply</button>
				</div>
			</div>
		</div>
		<div>
			<div class="text-2xl md:text-4xl font-bold my-4">Height</div>
			<div>
				<RangeSlider name="height-slider" bind:value={height} max={100} step={1} />
				<div class="flex gap-4 items-center mt-2">
					<input type="number" class="input" bind:value={height} />
					<button class="btn variant-filled-primary">Apply</button>
				</div>
			</div>
		</div>
		<div>
			<div class="text-2xl md:text-4xl font-bold my-4">Depth</div>
			<div>
				<RangeSlider name="depth-slider" bind:value={depth} max={100} step={1} />
				<div class="flex gap-4 items-center mt-2">
					<input type="number" class="input" bind:value={depth} />
					<button class="btn variant-filled-primary">Apply</button>
				</div>
			</div>
		</div>
	</div>
	<div class="w-3/4" />
</div>
