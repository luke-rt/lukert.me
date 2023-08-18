<script lang="ts">
	import Box from "$lib/components/Box.svelte";
	import Project from "$lib/components/Project.svelte";
	export let data;
</script>

<section id="projects-splash">
	<h1>Projects</h1>
</section>

<section id="projects">
	{#each data.projects as project, i}
		<Box fade>
			<Project right={i % 2 != 0} {project}/>
		</Box>
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
				left: 50%;
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

	}
</style>
