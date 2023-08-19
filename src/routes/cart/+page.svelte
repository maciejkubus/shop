<script lang="ts">
	let total = 310;
	let products = [
		{
			name: 'Elegant chair',
			quantity: 4,
			price: 29,
			total: 116,
			url: '/product'
		},
		{
			name: 'Elegant table',
			quantity: 1,
			price: 49,
			total: 49,
			url: '/product'
		},
		{
			name: 'Headphones',
			quantity: 1,
			price: 19,
			total: 19,
			url: '/product'
		},
		{
			name: 'Speakers',
			quantity: 2,
			price: 59,
			total: 118,
			url: '/product'
		}
	];

	const calculatePrice = (index: number) => {
		const price = products[index].price;
		const quantity = products[index].quantity;
		products[index].total = price * quantity;

		total = 0;
		products.forEach((product) => {
			total += product.total;
		});
	};

	const increaseQuantity = (index: number) => {
		products[index].quantity++;
		calculatePrice(index);
	};

	const decreaseQuantity = (index: number) => {
		products[index].quantity--;
		calculatePrice(index);
	};

	const deleteProduct = (index: number) => {
		products.splice(index, 1);
		products = [...products];
	};
</script>

<div class="text-2xl md:text-6xl font-bold mb-8">Cart</div>
<div>
	<div class="table-container">
		<table class="table shadow-xl" role="grid">
			<thead class="table-head">
				<tr>
					<th class="bg-primary-500">Name</th>
					<th class="bg-primary-500">Quantity</th>
					<th class="bg-primary-500">Product Price</th>
					<th class="bg-primary-500">Total Price</th>
					<th class="bg-primary-500">Actions</th>
				</tr>
			</thead>
			<tbody class="table-body bg-primary-700">
				{#each products as product, index}
					<tr aria-rowindex={index + 1}>
						<td class="" role="gridcell" aria-colindex={1} tabindex="0"> {product.name} </td>
						<td class="flex gap-2" role="gridcell" aria-colindex={2} tabindex="-1">
							<button
								class="text-tertiary-500"
								on:click={() => decreaseQuantity(index)}
								disabled={product.quantity <= 1}
							>
								<i class="fas fa-minus" />
							</button>
							<div>{product.quantity}</div>
							<button class="text-tertiary-500" on:click={() => increaseQuantity(index)}>
								<i class="fas fa-plus" />
							</button>
						</td>
						<td class="" role="gridcell" aria-colindex={3} tabindex="-1"> ${product.price} </td>
						<td class="" role="gridcell" aria-colindex={4} tabindex="-1"> ${product.total} </td>
						<td class="space-x-2" role="gridcell" aria-colindex={5} tabindex="-1">
							<button class="text-tertiary-500 text-lg" on:click={() => deleteProduct(index)}>
								<i class="fas fa-trash" />
							</button>
							<a href={product.url} class="text-tertiary-500 text-lg">
								<i class="fas fa-external-link-alt" />
							</a>
						</td>
					</tr>
				{/each}
			</tbody>
			<tfoot class="table-foot">
				<tr>
					<td class="bg-primary-800 font-bold">Total</td>
					<td class="bg-primary-800 font-bold" />
					<td class="bg-primary-800 font-bold" />
					<td class="bg-primary-800 font-bold" />
					<td class="bg-primary-800 font-bold">${total}</td>
				</tr>
			</tfoot>
		</table>
	</div>
	<div class="w-full flex justify-end mt-8">
		<a href="/checkout" class="btn variant-filled-primary">Proceed to checkout</a>
	</div>
</div>
