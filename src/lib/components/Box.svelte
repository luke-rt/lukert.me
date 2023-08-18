<script lang="ts">
	import { inview } from "svelte-inview";

	export let fade: boolean;
	export let quick = false;

	let isInView: boolean;
</script>

{#if fade}
	<div
		use:inview
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			isInView = inView;
		}}
		class:fade={isInView && fade}
		class:quick={quick}
	>
		<slot />
	</div>
{/if}

<style lang="scss">
	div {
		opacity: 0;
		&.fade {
			animation: fadeIn 1.5s;
			animation-delay: 0.5s;
			animation-fill-mode: forwards;

			&.quick {
				animation: fadeIn 1.2s;
				animation-delay: 0.3s;
				animation-fill-mode: forwards;
			}

			@keyframes fadeIn {
				0% {
					opacity: 0;
				}
				100% {
					opacity: 1;
				}
			}
		}
	}

</style>
