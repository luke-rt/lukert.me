<script lang="ts">
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>Error {$page.status}</title>
	<meta name="description" content={`Error ${$page.status}: ${$page.error?.message}`} />
</svelte:head>

<div id="error">
	<h1>Something went wrong :(</h1>
	<h2>Error {$page.status}</h2>
	<h3>{$page.error?.message}</h3>
</div>

<style lang="scss">
	#error {
		height: 70vh;
		text-align: center;
		padding-top: 25vh;
		background-color: $dark-1;
		h1,
		h2,
		h3 {
			color: gainsboro;
			padding-block: 2vh;
		}
	}
</style>
