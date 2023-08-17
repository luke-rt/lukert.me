<script lang="ts">
	export let condition: boolean;
	export let fade: boolean;

	let c = false;
	$: if(condition) c = true;
</script>

{#if fade}
	<div class:fade={c}>
		<slot/>
	</div>
{/if}

<style lang="scss">
	div {
		opacity: 0;
	}
	.fade {
		animation: fadeIn 2s;
		animation-fill-mode: forwards;

		@keyframes fadeIn {
			0% { opacity: 0; }
			100% { opacity: 1; }
		}
	}
</style>
