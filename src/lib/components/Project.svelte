<script lang="ts">
	import type { Project } from "$lib/types";
	import Link from "$lib/components/Link.svelte";
	import { inview, type Options } from "svelte-inview";

	export let project: Project;
	export let right = false;

  	let isInView: boolean;
	const options: Options = {
		rootMargin: "-50px",
		unobserveOnEnter: true,
	};
</script>

<article
	class:right
	class:left={!right}
	use:inview={options}
		on:inview_enter={(event) => {
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
			{#if project.src_url}
				<Link large refer href={project.src_url}>Source Code</Link>
			{/if}
		</div>
	</div>
	{#if isInView}
		<img src={`/projects/${project.img}`} alt={`Preview image for project ${project.title}`} loading="lazy" />
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

		box-shadow: 3px 3px 10px lightgray;

		&:hover {
			box-shadow: 6px 6px 10px lightgray;
		}
		div {
			display: flex;
			flex-direction: column;
			margin-inline: 10px;
			h3 {
				padding-bottom: 10px;
			}
			div {
				height: 100%;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
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
