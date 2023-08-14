<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let disabled = false;
	export let dark = false;

	const dispatch = createEventDispatcher();
	const click = () => dispatch("click");

</script>

<button
	{disabled}
	class:disabled={disabled}
	class:dark={dark}
	class="rounded"
	on:click|preventDefault={click}
>
	<slot />
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
			filter: drop-shadow(4px 4px 2px gray);
		}
	}
	button.dark {
		background-color: whitesmoke;
		color: $dark-1;

		&:hover {
			filter: drop-shadow(8px 8px 8px black);

		}
	}
</style>
