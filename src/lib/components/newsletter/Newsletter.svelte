<script lang="ts">
	let email = '';
	let sent = false;
	let checkbox = false;
	let error = false;

	const send = () => {
		if (!checkbox) {
			error = true;
			return;
		}

		fetch('/api/newsletter/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email })
		});
		error = false;
		sent = true;
	};
</script>

<div class="flex flex-col md:flex-row gap-4 md:gap-12 p-8 rounded variant-filled-secondary">
	<div class="flex-1">
		<slot />
	</div>
	<div class="flex-1 flex flex-col justify-center gap-4">
		<form on:submit|preventDefault={send} class="contents">
			<div class="text-2xl font-bold font-heading-token">Subscribe</div>
			<div class="flex w-full justify-end gap-4">
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					class="w-full p-2 rounded bg-secondary-300"
					disabled={sent}
					bind:value={email}
				/>
				<button type="submit" class="btn variant-filled-primary" disabled={sent}>
					Subscribe
				</button>
			</div>
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
				/>
				<label for="terms">I agree to the <a href="/terms">terms and conditions</a>.</label>
			</div>
			{#if error}
				<div class="flex gap-2 items-center text-error-500">
					Please agree to the terms and conditions.
				</div>
			{/if}
			{#if sent}
				<div class="w-full h-6 font-bold">Thanks for subscribing!</div>
			{/if}
		</form>
	</div>
</div>
