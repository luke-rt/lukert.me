<script lang="ts">
	import { inview, type Options } from 'svelte-inview';

	interface Props {
		fade: boolean;
		children?: import('svelte').Snippet;
	}

	let { fade, children }: Props = $props();

	let isInView: boolean = $state(false);
	const options: Options = {
		rootMargin: '-100px',
		unobserveOnEnter: true
	};
</script>

{#if fade}
	<div
		use:inview={options}
		oninview_enter={(event) => {
			const { inView } = event.detail;
			isInView = inView;
		}}
		class:fade={isInView && fade}
	>
		{@render children?.()}
	</div>
{/if}

<style lang="scss">
	div {
		opacity: 0;
		&.fade {
			animation: fadeIn 1s;
			/* animation-delay: 0.3s; */
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
