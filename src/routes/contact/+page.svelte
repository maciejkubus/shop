<script lang="ts">
	import ContactForm from '$lib/components/contact-form/ContactForm.svelte';
</script>

<div class="text-4xl md:text-6xl font-bold">Contact</div>

<div class="flex flex-col md:flex-row gap-8 justify-center items-center">
	<div class="w-full xl:w-1/2 text-2xl flex flex-col gap-4">
		<div class="text-4xl font-bold">Information</div>
		<p class="text-base">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab voluptatibus eveniet numquam.
			Quibusdam iusto possimus veniam molestias voluptas fugiat magni.
		</p>
		<div>
			<div class="text-2xl font-bold">Headquater</div>
			<p class="text-base">1234 Street Name</p>
			<p class="text-base">City Name, Country Name</p>
		</div>
		<div>
			<div class="text-2xl font-bold">Warehouse</div>
			<p class="text-base">1234 Street Name</p>
			<p class="text-base">City Name, Country Name</p>
		</div>
		<ul class="flex gap-4 text-2xl">
			<li>
				<a href="/" class="text-tertiary-500 hover:text-instagram before:content-none">
					<i class="fab fa-instagram" />
				</a>
			</li>
			<li>
				<a href="/" class="text-tertiary-500 hover:text-facebook before:content-none">
					<i class="fab fa-facebook-square" />
				</a>
			</li>
			<li>
				<a href="/" class="text-tertiary-500 hover:text-youtube before:content-none">
					<i class="fab fa-youtube" />
				</a>
			</li>
		</ul>
	</div>
	<div class="w-full xl:w-1/2">
		<ContactForm />
	</div>
</div>
<div>
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18978.119018177556!2d25.176761510209182!3d0.5135372515872542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spl!4v1692415950010!5m2!1sen!2spl"
		title="contact map"
		style="border:0;"
		loading="lazy"
		referrerpolicy="no-referrer-when-downgrade"
		class="w-full h-96 rounded overflow-hidden shadow"
	/>
</div>
