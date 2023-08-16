<script lang="ts">
	import pfp from "$lib/assets/pfp.webp";
	import splash from "$lib/assets/splash.webp";
	import Spotify from "$lib/components/widgets/Spotify.svelte";
	import type { LayoutData } from "./$types";

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Home | Luke Tong's Blog</title>
</svelte:head>

<section id="splash">
	<img alt="Splash screen" src={splash} loading="eager" />
	<h1>Luke Tong</h1>
	<h2>Student at University of Pennsylvania</h2>
</section>

<section id="about">
	<div class="top">
		<img alt="Luke Tong" src={pfp} loading="lazy" />
		<div>
			<h2>Hi! Welcome to my blog!</h2>
			<p>
				I'm Luke, and I love reading, biking, and debate.
				<br />
				I'm currently a freshmen at University of Pennsylvania.
			</p>
			<Spotify track={data} />
		</div>
	</div>
	<div class="bottom">
		<div>
			<h3>Profile</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan dictum nulla,
				vel eleifend mauris tincidunt vitae. Donec semper vulputate scelerisque. Suspendisse
				ullamcorper tellus vel suscipit placerat. Curabitur consequat tempus diam, ut
				fermentum ex.Donec lectus libero, vulputate quis enim in, pulvinar rutrum felis.
			</p>
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
		display: flex;
		height: 100vh;
		background-color: $dark-1;

		img {
			flex-grow: 1;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}

		h1 {
			color: $dark-1;
			position: absolute;
			top: 21vh;
			left: 5vw;
		}

		h2 {
			color: $dark-1;
			position: absolute;
			top: 31vh;
			left: 5vw;
		}
	}

	#about {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-block: 60px;
		.top {
			display: flex;
			flex-direction: horizontal;
			justify-content: center;
			width: fit-content;

			padding: 20px;

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
