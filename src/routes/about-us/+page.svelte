<script lang="ts">
	import Accordion from '$lib/components/accordion/Accordion.svelte';
	import WorkerCard from '$lib/components/worker-card/WorkerCard.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="flex flex-col-reverse xl:flex-row gap-16">
	<div class="w-full xl:w-1/2 flex flex-col gap-8 h-full xl:justify-center items-start">
		<h2 class="text-6xl drop-shadow-xl font-heading-token">Who we are?</h2>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nemo assumenda unde
			inventore voluptatem, modi asperiores, debitis hic qui esse, ratione labore ad perspiciatis
			sapiente! Ut voluptate molestias accusamus animi?
		</p>
		<a href="/contact/" class="btn variant-filled-primary font-bold text-lg"> Contact us </a>
	</div>
	<div class="w-full xl:w-1/2">
		<img
			src="/images/office.jpg"
			alt="office"
			class="aspect-[3/1] xl:aspect-[4/3] object-cover object-center rounded w-full"
		/>
	</div>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 py-8">
	<div class="flex flex-col justify-center items-center text-center py-8 md:p-8">
		<div class="text-9xl">
			<i class="fas fa-globe" />
		</div>
		<div class="text-3xl font-heading-token pt-6 pb-1">Worldwide</div>
		<div class="text-tertiary-600">Get free shipping over $65.</div>
	</div>
	<div class="flex flex-col justify-center items-center text-center py-8 md:p-8">
		<div class="text-9xl">
			<i class="fas fa-box-open" />
		</div>
		<div class="text-3xl font-heading-token pt-6 pb-1">Returns</div>
		<div class="text-tertiary-600">Within 30 days for an exchange.</div>
	</div>
	<div class="flex flex-col justify-center items-center text-center py-8 md:p-8">
		<div class="text-9xl">
			<i class="fas fa-life-ring" />
		</div>
		<div class="text-3xl font-heading-token pt-6 pb-1">Support</div>
		<div class="text-tertiary-600">Top notch customer service.</div>
	</div>
	<div class="flex flex-col justify-center items-center text-center py-8 md:p-8">
		<div class="text-9xl">
			<i class="fas fa-credit-card" />
		</div>
		<div class="text-3xl font-heading-token pt-6 pb-1">Payments</div>
		<div class="text-tertiary-600">Flexible payment made easy.</div>
	</div>
</div>
<div class="flex flex-col xl:flex-row gap-16">
	<div class="w-full xl:w-1/2">
		<img
			src="/images/phone.jpg"
			alt="phone"
			class="aspect-[3/1] xl:aspect-[4/3] object-cover object-center rounded w-full"
		/>
	</div>
	<div class="w-full xl:w-1/2 flex flex-col gap-8 h-full xl:justify-center items-start">
		<h2 class="text-6xl drop-shadow-xl font-heading-token">What we do?</h2>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nemo assumenda unde
			inventore voluptatem, modi asperiores, debitis hic qui esse, ratione labore ad perspiciatis
			sapiente! Ut voluptate molestias accusamus animi?
		</p>
		<a href="/contact/" class="btn variant-filled-primary font-bold text-lg"> Contact us </a>
	</div>
</div>

<div class="flex flex-col xl:flex-row text-tertiary-500 items-start xl:items-center gap-4">
	<div class="text-6xl flex justify-center items-center gap-0.5 font-bold">Our amazing team</div>
</div>
<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 py-8">
	<WorkerCard>
		<img
			slot="image"
			src="/images/characters/9.jpg"
			alt="Aoi Kitsune"
			class="flex aspect-[3/4] object-cover object-center"
		/>
		<span slot="fullname">Aoi Kitsune</span>
		<span slot="position">Samurai</span>
	</WorkerCard>
	<WorkerCard>
		<img
			slot="image"
			src="/images/characters/13.jpg"
			alt="Hoshikagawa"
			class="flex aspect-[3/4] object-cover object-center"
		/>
		<span slot="fullname">Hoshikagawa</span>
		<span slot="position">Doctor</span>
	</WorkerCard>
	<WorkerCard>
		<img
			slot="image"
			src="/images/characters/6.jpg"
			alt="Jinx"
			class="flex aspect-[3/4] object-cover object-center"
		/>
		<span slot="fullname">Jinx</span>
		<span slot="position">Street kid</span>
	</WorkerCard>
	<WorkerCard>
		<img
			slot="image"
			src="/images/characters/14.jpg"
			alt="Seinaru shōjo"
			class="flex aspect-[3/4] object-cover object-center"
		/>
		<span slot="fullname">Seinaru shōjo</span>
		<span slot="position">Executive nun</span>
	</WorkerCard>
</div>

<div class="flex flex-col xl:flex-row text-tertiary-500 items-start xl:items-center gap-4">
	<div class="text-6xl flex justify-center items-center gap-0.5 font-bold">Our values</div>
</div>
<div class="grid grid-cols-1 xl:grid-cols-3 gap-8 py-8">
	<div class="flex items-end">
		<div class="w-1/4">
			<span class="text-9xl leading-none tracking-normal">1</span>
		</div>
		<div class="w-3/4">
			<div class="text-2xl font-bold mb-2">Lorem Ipsum</div>
			<div class="text-lg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sapiente.
			</div>
		</div>
	</div>
	<div class="flex items-end">
		<div class="w-1/4">
			<span class="text-9xl leading-none tracking-normal">2</span>
		</div>
		<div class="w-3/4">
			<div class="text-2xl font-bold mb-2">Lorem Ipsum</div>
			<div class="text-lg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sapiente.
			</div>
		</div>
	</div>
	<div class="flex items-end">
		<div class="w-1/4">
			<span class="text-9xl leading-none tracking-normal">3</span>
		</div>
		<div class="w-3/4">
			<div class="text-2xl font-bold mb-2">Lorem Ipsum</div>
			<div class="text-lg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sapiente.
			</div>
		</div>
	</div>
	<div class="flex items-end">
		<div class="w-1/4">
			<span class="text-9xl leading-none tracking-normal">4</span>
		</div>
		<div class="w-3/4">
			<div class="text-2xl font-bold mb-2">Lorem Ipsum</div>
			<div class="text-lg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sapiente.
			</div>
		</div>
	</div>
	<div class="flex items-end">
		<div class="w-1/4">
			<span class="text-9xl leading-none tracking-normal">5</span>
		</div>
		<div class="w-3/4">
			<div class="text-2xl font-bold mb-2">Lorem Ipsum</div>
			<div class="text-lg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sapiente.
			</div>
		</div>
	</div>
	<div class="flex items-end">
		<div class="w-1/4">
			<span class="text-9xl leading-none tracking-normal">6</span>
		</div>
		<div class="w-3/4">
			<div class="text-2xl font-bold mb-2">Lorem Ipsum</div>
			<div class="text-lg">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sapiente.
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col xl:flex-row text-tertiary-500 items-start xl:items-center gap-4">
	<div class="text-6xl flex justify-center items-center gap-0.5 font-bold">Join us</div>
</div>
<div>
	<Accordion
		items={[
			{
				title: 'Full-stack developer',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sapiente.'
			},
			{
				title: 'Front-end developer',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sapiente.'
			},
			{
				title: 'Back-end developer',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sapiente.'
			},
			{
				title: 'UI/UX designer',
				text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sapiente.'
			}
		]}
	/>
</div>
