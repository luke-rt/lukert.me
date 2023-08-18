<script lang="ts">
	import Box from "$lib/components/Box.svelte";
	import Project from "$lib/components/Project.svelte";
	export let data;

	// TODO: make the linen appear behind projects
</script>

<section id="projects-splash">
	<h1>Projects</h1>
</section>

<section id="projects">
	{#each data.projects as project, i}
		<div class="line">
			<Box fade>
				<Project right={i % 2 != 0} {project} />
			</Box>
		</div>
		<spacer />
	{/each}
</section>

<style lang="scss">
	#projects-splash {
		display: flex;
		height: 75vh;
		background-color: $dark-1;
		h1 {
			margin-inline: auto;
			margin-top: 50vh;
			color: gainsboro;
			&::after {
				content: "";
				background-color: gray;
				position: absolute;
				width: 1px;
				top: 65vh;
				bottom: 20vh;
			}
		}
	}
	#projects {
		margin-block: 5vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		spacer {
			height: 8vh;
			width: 1px;
			background-color: gray;
		}
		.line {
			&::after {
				width: 1px;
				height: 100%;
				background-color: gray;
			}
		}
	}
</style>
