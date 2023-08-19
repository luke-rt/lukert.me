<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
	import { typewriter } from "$lib/utils";
	import Spotify from "$lib/components/widgets/Spotify.svelte";
	import pfp from "$lib/assets/pfp.webp";
	import splash from "$lib/assets/splash.webp";
	import Box from "$lib/components/Box.svelte";

	let ypos = 0;
	let height = 1;

	let visible = false;
	onMount(() => (visible = true));

	// add view transition to contact card. have it travel into popup
</script>

<svelte:window bind:scrollY={ypos} bind:outerHeight={height} />

<svelte:head>
	<title>Home | Luke Tong's Blog</title>
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
					I'm Luke, and I love reading, biking, and debate.
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
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan dictum
					nulla, vel eleifend mauris tincidunt vitae. Donec semper vulputate scelerisque.
					Suspendisse ullamcorper tellus vel suscipit placerat. Curabitur consequat tempus
					diam, ut fermentum ex.Donec lectus libero, vulputate quis enim in, pulvinar
					rutrum felis.
				</p>
			</Box>
		</div>
		<div>
			<h3>Skills</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan dictum nulla,
				vel eleifend mauris tincidunt vitae. Donec semper vulputate scelerisque. Suspendisse
				ullamcorper tellus vel suscipit placerat. Curabitur consequat tempus diam, ut
				fermentum ex.Donec lectus libero, vulputate quis enim in, pulvinar rutrum felis.
			</p>
		</div>
		<div>
			<h3>Projects</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan dictum nulla,
				vel eleifend mauris tincidunt vitae. Donec semper vulputate scelerisque. Suspendisse
				ullamcorper tellus vel suscipit placerat. Curabitur consequat tempus diam, ut
				fermentum ex.Donec lectus libero, vulputate quis enim in, pulvinar rutrum felis.
			</p>
		</div>
		<div>
			<h3>Books</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan dictum nulla,
				vel eleifend mauris tincidunt vitae. Donec semper vulputate scelerisque. Suspendisse
				ullamcorper tellus vel suscipit placerat. Curabitur consequat tempus diam, ut
				fermentum ex.Donec lectus libero, vulputate quis enim in, pulvinar rutrum felis.
			</p>
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
			}

			div > p {
				margin-block: 15px;
			}
		}
		.bottom {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr 1fr;
			grid-row-gap: 50px;
			padding-top: 30px;
			width: 70vw;
			margin-inline: auto;

			& > div {
				width: 400px;
				margin-inline: auto;
			}
		}
	}
</style>
