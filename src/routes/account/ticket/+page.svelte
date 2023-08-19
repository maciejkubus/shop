<script lang="ts">
	import { Avatar, RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	let message = '';

	let saved = false;
	let loading = false;

	const submit = () => {
		loading = true;
		setTimeout(() => {
			saved = true;
			loading = false;
		}, 2500);
	};
</script>

<div class="text-2xl md:text-6xl font-bold mb-8">Ticket #232942</div>
<div>
	<div class="flex gap-8 pb-4 text-lg">
		<div class="text-center">
			<Avatar src="/images/characters/6.jpg" width="w-16" rounded="rounded-full" />
			You
		</div>
		<div class="flex-1">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum qui commodi alias quo,
			animi exercitationem velit nesciunt ut dolore excepturi?
		</div>
	</div>
	<div class="flex gap-8 py-4 text-lg">
		<div class="text-center">
			<Avatar initials="S" width="w-16" rounded="rounded-full" />
			Support
		</div>
		<div class="flex-1">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus rem, rerum optio porro
			dolorem unde id deleniti beatae deserunt sit magnam est eveniet accusamus eos? Fugit nesciunt
			repellat facilis esse quibusdam est adipisci aliquam quae minus quasi, consequuntur maxime
			saepe.
		</div>
	</div>
	<div class="flex gap-8 py-4 text-lg">
		<div class="text-center">
			<Avatar src="/images/characters/6.jpg" width="w-16" rounded="rounded-full" />
			You
		</div>
		<div class="flex-1">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui cupiditate odio possimus! Odio,
			recusandae beatae!
		</div>
	</div>
	<div class="flex gap-8 py-4 text-lg">
		<div class="text-center">
			<Avatar initials="S" width="w-16" rounded="rounded-full" />
			Support
		</div>
		<div class="flex-1">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam ipsa placeat harum vitae iusto
			accusamus hic neque officia adipisci doloribus! Repellat voluptate voluptatibus magnam
			provident.
		</div>
	</div>
	<form on:submit|preventDefault={submit} class="space-y-2">
		<div>
			<div class="text-4xl font-bold mb-2 mt-8">Reply</div>
		</div>
		<div>
			<div>Message:</div>
			<div>
				<textarea
					id="message"
					name="message"
					placeholder="Message"
					class="w-full p-2 rounded variant-filled-tertiary"
					bind:value={message}
					disabled={loading}
					rows="8"
				/>
			</div>
		</div>

		<div class="pt-4 flex flex-col items-end">
			<button type="submit" class="btn variant-filled-primary" disabled={loading}>
				Create ticket
			</button>
			{#if saved}
				<div class="text-lg mt-4">Ticked created!</div>
			{/if}
		</div>
	</form>
</div>
