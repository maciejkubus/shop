<script lang="ts">
	export let timeLeft: number;
	let interval: number | undefined;

	function startCountdown() {
		interval = setInterval(() => {
			if (timeLeft > 0) {
				timeLeft--;
			} else {
				clearInterval(interval);
			}
		}, 1000);
	}

	function pad(num: string | number, size: number) {
		num = num.toString();
		while (num.length < size) num = '0' + num;
		return num;
	}

	$: seconds = pad(timeLeft % 60, 2);
	$: minutes = pad(Math.floor(timeLeft / 60) % 60, 2);
	$: hours = pad(Math.floor(timeLeft / 3600) % 24, 2);

	startCountdown();
</script>

<slot {seconds} {minutes} {hours} />
