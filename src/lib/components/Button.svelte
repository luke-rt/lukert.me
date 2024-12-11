<script lang="ts">
	import { preventDefault } from 'svelte/legacy';

	import { createEventDispatcher } from "svelte";

	interface Props {
		disabled?: boolean;
		dark?: boolean;
		children?: import('svelte').Snippet;
	}

	let { disabled = false, dark = false, children }: Props = $props();

	const dispatch = createEventDispatcher();
	const click = () => dispatch("click");
</script>

<button {disabled} class:disabled class:dark class="rounded" onclick={preventDefault(click)}>
	{@render children?.()}
</button>

<style lang="scss">
	button {
		display: inline-block;
		border: none;
		border-radius: 1em;
		padding: 0 1.2em;
		height: 2em;
		line-height: 2em;

		font-family: "League Spartan", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-weight: 600;
		font-size: 1.2em;

		background-color: $dark-1;
		color: gainsboro;

		&:hover {
			filter: drop-shadow(3px 3px 5px gray);
		}
	}
	button.dark {
		background-color: whitesmoke;
		color: $dark-1;

		&:hover {
			filter: drop-shadow(5px 5px 10px black);
		}
	}
</style>
