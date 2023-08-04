<script lang="ts">
    import { page } from "$app/stores";
</script>

<div id="error">
	<h1>Something went wrong :(</h1>
	<h2>{$page.status}</h2>
	<h3>{$page.error.message}</h3>
</div>

<style lang="scss">
	#error {
		height: 70vh;
		text-align: center;
		padding-top: 25vh;
	}
</style>
