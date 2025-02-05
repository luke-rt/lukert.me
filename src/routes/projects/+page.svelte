<script lang="ts">
	import Box from '$lib/components/Box.svelte';
	import Project from '$lib/components/Project.svelte';
	import projects from '$lib/assets/data/projects.json';
</script>

<svelte:head>
	<title>Home | Luke Tong's Website</title>
	<meta name="description" content="Some projects I've worked on in the past!" />
</svelte:head>

<section id="projects-splash">
	<h1>Projects</h1>
</section>

<section id="projects">
	{#each projects as project, i}
		<div class="line"></div>
		<Box fade>
			<Project right={(i & 1) == 1} {project} />
		</Box>
	{/each}
	<div class="line"></div>
</section>

<style lang="scss">
	#projects-splash {
		display: flex;
		height: 75vh;
		background-color: $dark-1;
		h1 {
			margin-top: 50vh;
			margin-inline: auto;
			color: gainsboro;
			&::after {
				content: '';
				background-color: lightgray;
				position: relative;
				display: block;
				margin-inline: auto;
				margin-top: 4vh;
				width: 1px;
				height: 20vh;
				opacity: 75%;
			}
		}
	}
	#projects {
		margin-block: 8vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		.line {
			position: relative;
			height: 350px;
			margin-top: -300px;
			width: 1px;
			background-color: lightgray;
			opacity: 75%;
			z-index: -1;
		}
	}
</style>
