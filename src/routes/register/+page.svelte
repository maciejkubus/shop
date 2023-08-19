<script lang="ts">
	let loading = false;

	let username = '';
	let email = '';
	let password = '';
	let repeatPassword = '';
	let rodo = false;

	const submit = () => {
		console.log({
			username,
			email,
			password,
			repeatPassword,
			rodo
		});
	};
</script>

<div class="w-full flex flex-col max-w-halfsite mx-auto">
	<div class="text-4xl md:text-6xl font-bold mb-8">Register</div>

	<form on:submit|preventDefault={submit} class="space-y-8">
		<div>
			<div>Username:</div>
			<div>
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Username"
					class="w-full p-2 rounded variant-filled-tertiary"
					bind:value={username}
					disabled={loading}
				/>
			</div>
		</div>
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
		<div>
			<div>Repeat password:</div>
			<div>
				<input
					type="password"
					id="repeatPassword"
					name="repeatPassword"
					placeholder="Repeat password"
					class="w-full p-2 rounded variant-filled-tertiary"
					bind:value={repeatPassword}
					disabled={loading}
				/>
			</div>
		</div>
		<div>
			<div class="flex gap-1 items-center">
				<input
					type="checkbox"
					id="rodo"
					name="rodo"
					class="p-2 rounded variant-filled-tertiary"
					bind:checked={rodo}
					disabled={loading}
				/>
				<label for="rodo">I agree to the <a href="/privacy-policy">Privacy Policy</a> </label>
			</div>
		</div>
		<div class="flex flex-col items-end">
			<button type="submit" class="btn variant-filled-primary" disabled={loading}>
				Register
			</button>
		</div>
	</form>
</div>
