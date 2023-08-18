<script lang="ts">
	import type { Project } from "$lib/types";
	import Link from "$lib/components/Link.svelte";

	export let project: Project;
	export let right = false;
</script>

<article class:right class:left={!right}>
	{#if right}
		<img src={`/projects/${project.img}`} alt={`Preview image for project ${project.title}`} />
	{/if}
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
	{#if !right}
		<img src={`/projects/${project.img}`} alt={`Preview image for project ${project.title}`} />
	{/if}
</article>

<style lang="scss">
	article {
		display: flex;

		width: 800px;
		height: 250px;
		padding: 20px;

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
				align-items: flex-end;
			}
		}
		img {
			width: 300px;
			height: 200px;
			object-fit: contain;
			box-shadow: 3px 3px 5px lightgray;
		}
	}
	article.left {
		margin-left: 75px;
	}
	article.right {
		text-align: right;
		margin-right: 75px;
	}
</style>
