<script lang="ts">
	let email = '';
	let message = '';
	let sent = false;
	let checkbox = false;
	let error = false;

	const send = () => {
		if (!checkbox) {
			error = true;
			return;
		}

		fetch('/api/contact/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				message
			})
		});
		error = false;
		sent = true;
	};
</script>

<div class="flex flex-col justify-center gap-4 p-8 rounded variant-filled-secondary">
	<form on:submit|preventDefault={send} class="contents">
		<div class="text-2xl font-bold font-heading-token">Message us</div>
		<div class="">
			<input
				type="email"
				id="email"
				name="email"
				placeholder="Email"
				class="w-full p-2 rounded bg-secondary-300"
				disabled={sent}
				bind:value={email}
				required
			/>
		</div>
		<div class="">
			<textarea
				id="message"
				name="message"
				placeholder="Message"
				class="w-full p-2 rounded bg-secondary-300"
				disabled={sent}
				rows="6"
				bind:value={message}
				required
			/>
		</div>
		<button type="submit" class="btn variant-filled-primary" disabled={sent}> Subscribe </button>
		<div class="flex gap-2 items-center pl-1">
			<input
				type="checkbox"
				id="terms"
				name="terms"
				value="terms"
				disabled={sent}
				on:change={() => {
					checkbox = !checkbox;
				}}
				required
			/>
			<label for="terms">I agree to the <a href="/terms">terms and conditions</a>.</label>
		</div>
		{#if error}
			<div class="flex gap-2 items-center text-error-500">
				Please agree to the terms and conditions.
			</div>
		{/if}
		{#if sent}
			<div class="w-full h-6 font-bold">Thanks for contacting us!</div>
		{/if}
	</form>
</div>
