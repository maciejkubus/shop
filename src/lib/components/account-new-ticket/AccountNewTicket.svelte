<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	let subject = '';
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

<div class="text-2xl md:text-6xl font-bold mb-8">New Ticket</div>
<div class="max-w-sm">
	<form on:submit|preventDefault={submit} class="space-y-2">
		<div>
			<div>Subject:</div>
			<div>
				<input
					type="text"
					id="subject"
					name="subject"
					placeholder="Subject"
					class="w-full p-2 rounded variant-filled-tertiary"
					bind:value={subject}
					disabled={loading}
				/>
			</div>
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
