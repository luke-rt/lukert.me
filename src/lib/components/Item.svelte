<script lang="ts">
	import type { Item } from "$lib/types";

	export let item: Item;
</script>

<a class="item" href={item.url} target="_blank" rel="noopener noreferrer" >
	<img src={`/items/${item.img}`} width="40px" height="auto" alt={`Item avatar for ${item.title}`} />
	<div class="info">
		<b>
			{item.title}
		</b>
		<br />
		<sub>{item.desc}</sub>
	</div>
	<div class="date">
		<small>{item.date}</small>
	</div>
</a>

<style lang="scss">
	.item {
		display: flex;
		padding-top: 20px;

		transition: transform 0.3s ease-in-out;

		&:hover {
			transform: translateX(5px);
		}

		img {
			padding-inline: 10px;
		}

		.date {
			margin-left: auto;
			small {
				color: gray;
			}
		}
	}
</style>
