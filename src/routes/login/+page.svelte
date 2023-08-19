<script lang="ts">
	let loading = false;

	let email = '';
	let password = '';

	const submit = () => {
		console.log({
			email,
			password
		});
	};
</script>

<div class="w-full flex flex-col max-w-halfsite py-32 mx-auto">
	<div class="text-4xl md:text-6xl font-bold mb-8">Login</div>

	<form on:submit|preventDefault={submit} class="space-y-8">
		<div>
			<div>Email:</div>
			<div>
				<input
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					class="w-full p-2 rounded variant-filled-tertiary"
					bind:value={email}
					disabled={loading}
				/>
			</div>
		</div>
		<div>
			<div>Password:</div>
			<div>
				<input
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					class="w-full p-2 rounded variant-filled-tertiary"
					bind:value={password}
					disabled={loading}
				/>
			</div>
		</div>
		<div class="flex flex-col items-end">
			<button type="submit" class="btn variant-filled-primary" disabled={loading}> Login </button>
		</div>
	</form>
</div>
