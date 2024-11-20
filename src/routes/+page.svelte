<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { typewriter } from "$lib/utils";
	import Spotify from "$lib/components/widgets/Spotify.svelte";
	import pfp from "$lib/assets/pfp.webp";
	import splash from "$lib/assets/splash.webp";
	import Box from "$lib/components/Box.svelte";
	import Link from "$lib/components/Link.svelte";
	import Item from "$lib/components/Item.svelte";
	import Badge from "$lib/components/Badge.svelte";

	import work from "$lib/assets/data/work.json";
	import education from "$lib/assets/data/education.json";
	import skills from "$lib/assets/data/skills.json";

	let ypos = 0;
	let height = 1;

	let visible = false;
	onMount(() => (visible = true));
</script>

<svelte:window bind:scrollY={ypos} bind:outerHeight={height} />

<svelte:head>
	<title>Home | Luke Tong's Website</title>
</svelte:head>

<section id="splash">
	<img alt="Splash screen" src={splash} loading="eager" />
	{#if visible}
		<h1 transition:fade={{ duration: 1000, delay: 500 }}>Luke Tong</h1>
		<h2 transition:typewriter={{ delay: 1500 }}>Full-Stack Developer</h2>
	{/if}
</section>

<section id="profile">
	<div>
		<h1>Hi! I'm Luke</h1>
		<p>
			Software Engineer and Computer Science student at the University of Pennsylvania.
			Developer at
			<Link refer href="https://pennlabs.org/">Penn Labs</Link>
			and Social Chair at
			<Link refer href="https://pennspark.org/">Penn Spark</Link>.
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
			{#each education as item}
				<Item {item} />
			{/each}
		</div>
	</Box>

	<Box fade>
		<div class="work">
			<h2>Work Experience</h2>
			{#each work as item}
				<Item {item} />
			{/each}
		</div>
	</Box>

	<Box fade>
		<div class="skills">
			<h2>Skills</h2>
			{#each Object.entries(skills) as [category, items]}
			<div>
				<h3>{category}: </h3>
				<div>
					{#each items as item}
						<Badge text={item} />
					{/each}
				</div>
			</div>
			{/each}
		</div>
	</Box>
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
		width: 700px;
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
			margin-inline: auto;
			margin-top: 20px;
		}
	}

	#about {
		width: 600px;
		margin-inline: auto;
		margin-bottom: 100px;

		h2 {
			margin-top: 60px;
		}
		.skills {
			div {
				display: flex;
				h3 {
					margin-right: 10px;
					margin-bottom: 10px;
				}
			}
		}
	}
</style>
