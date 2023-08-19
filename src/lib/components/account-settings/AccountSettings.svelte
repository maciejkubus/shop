<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';

	let username = 'maciekkubus';
	let email = 'maciekkubus@gmail.com';
	let password = '';
	let repeatPassword = '';
	let phone = '+48 570 277 237';
	let gender = 'male';

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

<div class="text-2xl md:text-6xl font-bold mb-8">Settings</div>
<div class="max-w-sm">
	<form on:submit|preventDefault={submit} class="space-y-2">
		<div>
			<div>Username:</div>
			<div>
				<input
					type="text"
					id="username"
					name="username"
					placeholder="Username"
					class="w-full p-2 rounded variant-filled-secondary"
					bind:value={username}
					disabled={loading}
				/>
			</div>
		</div>
		<div>
			<div>E-mail:</div>
			<div>
				<input
					type="text"
					id="email"
					name="email"
					placeholder="E-mail"
					class="w-full p-2 rounded variant-filled-secondary"
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
					class="w-full p-2 rounded variant-filled-secondary"
					bind:value={password}
					disabled={loading}
				/>
			</div>
		</div>
		<div>
			<div>Repeat Password:</div>
			<div>
				<input
					type="password"
					id="repeatPassword"
					name="repeatPassword"
					placeholder="Repeat Password"
					class="w-full p-2 rounded variant-filled-secondary"
					bind:value={repeatPassword}
					disabled={loading}
				/>
			</div>
		</div>
		<div>
			<div>Phone:</div>
			<div>
				<input
					type="text"
					id="phone"
					name="phone"
					placeholder="Phone"
					class="w-full p-2 rounded variant-filled-secondary"
					bind:value={phone}
					disabled={loading}
				/>
			</div>
		</div>
		<div>
			<div>
				<RadioGroup>
					<RadioItem bind:group={gender} name="justify" value="male">Male</RadioItem>
					<RadioItem bind:group={gender} name="justify" value="female">Female</RadioItem>
				</RadioGroup>
			</div>
		</div>

		<div class="pt-4 flex flex-col items-end">
			<button type="submit" class="btn variant-filled-primary" disabled={loading}>
				Save settings
			</button>
			{#if saved}
				<div class="text-lg mt-4">Saved!</div>
			{/if}
		</div>
	</form>
</div>
