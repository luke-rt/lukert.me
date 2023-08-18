<script lang="ts">
	import { inview, type Options } from "svelte-inview";

	export let fade: boolean;

	let isInView: boolean;
	const options: Options = {
		rootMargin: "-100px",
		unobserveOnEnter: true,
	};
</script>

{#if fade}
	<div
		use:inview={options}
		on:inview_enter={(event) => {
			const { inView } = event.detail;
			isInView = inView;
		}}
		class:fade={isInView && fade}
	>
		<slot />
	</div>
{/if}

<style lang="scss">
	div {
		opacity: 0;
		&.fade {
			animation: fadeIn 1.5s;
			animation-delay: 0.3s;
			animation-fill-mode: forwards;

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
