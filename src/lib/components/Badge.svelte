<script lang="ts">
	interface Props {
		text: string;
	}

	let { text }: Props = $props();
</script>

<div class="badge">
	<small>
		{text}
	</small>
</div>

<style lang="scss">
	.badge {
		display: inline-block;
		height: fit-content;
		padding-bottom: 2px;
		padding-inline: 10px;
		border-radius: 20px;
		background-color: $dark-2;
		margin: 2px;
		small {
			font-family:
				'League Spartan',
				-apple-system,
				BlinkMacSystemFont,
				Segoe UI,
				Roboto,
				Oxygen,
				Ubuntu,
				Cantarell,
				Fira Sans,
				Droid Sans,
				Helvetica Neue,
				sans-serif;
			color: white;
		}
	}
</style>
