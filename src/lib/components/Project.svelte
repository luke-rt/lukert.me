<script lang="ts">
	import type { Project } from '$lib/types';
	import Link from '$lib/components/Link.svelte';
	import { inview, type Options } from 'svelte-inview';

	interface Props {
		project: Project;
		right?: boolean;
	}

	let { project, right = false }: Props = $props();

	let isInView = $state(false);
	const options: Options = {
		rootMargin: '-50px',
		unobserveOnEnter: true
	};
</script>

<article
	class:right
	class:left={!right}
	use:inview={options}
	oninview_enter={(event) => {
		const { inView } = event.detail;
		isInView = inView;
	}}
>
	<div>
		<h3>{project.title}</h3>
		<p>{project.desc}</p>
		<div>
			{#if project.demo_url}
				<Link large refer href={project.demo_url}>Demo</Link>
			{/if}
			{#if project.site_url}
				<Link large refer href={project.site_url}>Site</Link>
			{/if}
			{#if project.src_url}
				<Link large refer href={project.src_url}>Source Code</Link>
			{/if}
		</div>
	</div>
	{#if isInView && project.img}
		<img
			src={`/projects/${project.img}`}
			alt={`Preview image for project ${project.title}`}
			loading="lazy"
		/>
	{/if}
</article>

<style lang="scss">
	article {
		display: flex;
		background-color: white;

		width: 800px;
		height: 250px;
		padding: 20px;
		margin-left: 75px;

		box-shadow: 2px 2px 8px lightgray;
		&:hover {
			box-shadow: 6px 6px 10px lightgray;
		}
		div {
			display: flex;
			flex-direction: column;
			h3 {
				padding-bottom: 10px;
			}
			div {
				flex-direction: row;
				width: fit-content;
				margin-inline: auto;
				margin-bottom: 10px;
				margin-top: auto;
			}
		}
		img {
			margin: 15px;
			height: auto;
			object-fit: contain;
			box-shadow: 3px 3px 5px lightgray;
		}
	}
	article.right {
		text-align: right;
		flex-direction: row-reverse;
		margin-right: 75px;
		margin-left: 0;
	}
</style>
