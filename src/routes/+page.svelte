<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { typewriter } from "$lib/utils";
	import Spotify from "$lib/components/widgets/Spotify.svelte";
	import pfp from "$lib/assets/pfp.webp";
	import splash from "$lib/assets/splash.webp";
	import Box from "$lib/components/Box.svelte";
	import Link from "$lib/components/Link.svelte";

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

<section id="about">
	<Box fade>
		<div class="top">
			<img alt="Luke Tong" src={pfp} loading="lazy" />
			<div>
				<h2>Hi! Welcome to my blog!</h2>
				<p>
					I'm Luke, and I love reading and computer science.
					<br />
					I'm currently a freshmen at University of Pennsylvania.
				</p>
				<Spotify />
			</div>
		</div>
	</Box>
	<div class="bottom">
		<div>
			<Box fade>
				<h3>Profile</h3>
				<p>
					I'm majoring in Computer Science and minoring in Math and Philosophy at the
					University of Pennsylvania. I'm a Developer at
					<Link refer href="https://pennlabs.org/">Penn Labs</Link>
					and a Project Lead at
					<Link refer href="https://pennspark.org/">Penn Spark</Link>
				</p>
			</Box>
		</div>
		<div>
			<Box fade>
				<h3>Skills</h3>
				<p>
					<b>Languages:</b>
					C++, Java, JS/TS, HTML/CSS, C, Rust, Python, OCaml, and SQL
					<br /><br />
					<b>Technologies:</b>
					Node.js, AWS, React, Next.js, Git, Docker, Svelte, Firebase, Linux, Apache Spark
				</p>
			</Box>
		</div>
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

	#about {
		padding-block: 60px;
		.top {
			display: flex;
			width: fit-content;
			margin-inline: auto;
			padding: 20px;
			background-color: white;

			box-shadow: 3px 3px 10px lightgray;
			&:hover {
				box-shadow: 6px 6px 10px lightgray;
			}

			img {
				width: 180px;
				height: 180px;
				border-radius: 50%;
				margin-right: 30px;
				box-shadow: 3px 3px 5px gray;
				object-fit: cover;
			}

			div > p {
				margin-block: 15px;
			}
		}
		.bottom {
			display: flex;
			flex-wrap: wrap;

			padding-top: 30px;
			width: 70vw;
			margin-inline: auto;

			& > div {
				width: 460px;
				height: 200px;
				padding-inline: 20px;
				margin-block: 2vh;
			}
		}
	}
</style>
