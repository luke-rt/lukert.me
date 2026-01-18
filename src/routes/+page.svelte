<script lang="ts">
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { typewriter } from '$lib/utils';
	import pfp from '$lib/assets/pfp.webp';
	import splash from '$lib/assets/splash.webp';
	import Box from '$lib/components/Box.svelte';
	import Link from '$lib/components/Link.svelte';
	import Item from '$lib/components/Item.svelte';
	import Project from '$lib/components/Project.svelte';

	import work from '$lib/assets/data/work.json';
	import education from '$lib/assets/data/education.json';
	import current from '$lib/assets/data/current.json';
	import Spotify from '$lib/components/widgets/Spotify.svelte';

	let ypos = $state(0);
	let height = $state(1);

	let visible = $state(false);
	onMount(() => (visible = true));
</script>

<svelte:window bind:scrollY={ypos} bind:outerHeight={height} />

<svelte:head>
	<title>Home | Luke Tong's Website</title>
</svelte:head>

<section id="splash">
	<img alt="Splash screen" src={splash} loading="eager" />
	{#if visible}
		<h1 transition:fade={{ duration: 750, delay: 250 }}>Luke Tong</h1>
		<h2 transition:typewriter={{ delay: 1000 }}>Software Engineer</h2>
	{/if}
</section>

<section id="profile">
	<div>
		<h1>Hi! I'm Luke</h1>
		<p>
			Software Engineer and Computer Science student at the University of Pennsylvania. I'm a Team
			Lead at
			<Link refer href="https://pennlabs.org/">Penn Labs</Link> and a CIS 3200 Teaching Assistant,
			and I'm interested in systems engineering and low-latency software.
			I will be a Software Engineering Intern at
			<Link refer href="https://www.imc.com/us">IMC Trading</Link> this summer.
		</p>
		<!-- <div class="spotify">
			<Spotify />
		</div> -->
	</div>
	<img alt="Luke Tong" src={pfp} loading="lazy" />
</section>

<section id="about">
	<Box fade>
		<div class="education">
			<h2>Education</h2>
			{#each education as item (item.url)}
				<Item {item} />
			{/each}
		</div>
	</Box>

	<Box fade>
		<div class="work">
			<h2>Work Experience</h2>
			{#each work as item (item.url)}
				<Item {item} />
			{/each}
		</div>
	</Box>

	<div class="current">
		{#if current.length > 0}
			<h2>What I'm working on</h2>
		{/if}
		{#each current as project, i (i)}
			<Box fade>
				<Project {project} />
			</Box>
		{/each}
	</div>
</section>

<style lang="scss">
	#splash {
		img {
			width: 100vw;
			height: 100vh;
			object-fit: cover;
		}
		h1,
		h2 {
			color: $dark-1;
			position: absolute;
			left: 5vw;
		}
		h1 {
			top: 21vh;
		}
		h2 {
			top: 31vh;
		}
	}

	#profile {
		padding-top: 100px;
		width: 800px;
		margin-inline: auto;
		display: flex;

		img {
			width: 200px;
			height: 200px;
			border-radius: 50%;
			box-shadow: 3px 3px 5px gray;
			object-fit: cover;
			margin-block: auto;
		}

		div {
			margin-block: auto;
			margin-right: 30px;
		}
		.spotify {
			margin-top: 30px;
		}
	}

	#about {
		width: 750px;
		margin-inline: auto;
		margin-bottom: 100px;

		h2 {
			margin-top: 60px;
		}
		.current {
			h2 {
				margin-top: 20px;
			}
		}
	}
</style>
