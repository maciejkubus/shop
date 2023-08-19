<script lang="ts">
	const shipping = {
		adress: 'Lniana 2 m. 21',
		adress2: '',
		city: 'Łódź',
		postCode: '91-158',
		country: 'Poland'
	};

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

<div class="text-2xl md:text-6xl font-bold mb-8">Shipping</div>
<div class="max-w-sm space-y-2">
	<form on:submit|preventDefault={submit}>
		<div>
			<div>Adress:</div>
			<div>
				<input
					type="text"
					id="adress"
					name="adress"
					placeholder="Adress"
					class="w-full p-2 rounded variant-filled-secondary"
					bind:value={shipping.adress}
					disabled={loading}
				/>
			</div>
		</div>
		<div>
			<div>Adress 2 (next line):</div>
			<div>
				<input
					type="text"
					id="adress2"
					name="adress2"
					placeholder="Adress 2"
					class="w-full p-2 rounded variant-filled-secondary"
					bind:value={shipping.adress2}
					disabled={loading}
				/>
			</div>
		</div>
		<div>
			<div>City:</div>
			<div>
				<input
					type="text"
					id="city"
					name="city"
					placeholder="City"
					class="w-full p-2 rounded variant-filled-secondary"
					bind:value={shipping.city}
					disabled={loading}
				/>
			</div>
		</div>
		<div>
			<div>Post code:</div>
			<div>
				<input
					type="text"
					id="postCode"
					name="postCode"
					placeholder="Post Code"
					class="w-full p-2 rounded variant-filled-secondary"
					bind:value={shipping.postCode}
					disabled={loading}
				/>
			</div>
		</div>
		<div>
			<div>Country:</div>
			<div>
				<input
					type="text"
					id="country"
					name="country"
					placeholder="Country"
					class="w-full p-2 rounded variant-filled-secondary"
					bind:value={shipping.country}
					disabled={loading}
				/>
			</div>
		</div>
		<div class="pt-4 flex flex-col items-end">
			<button type="submit" class="btn variant-filled-primary" disabled={loading}>
				Save shipping information
			</button>
			{#if saved}
				<div class="text-lg mt-4">Saved!</div>
			{/if}
		</div>
	</form>
</div>
