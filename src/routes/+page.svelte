<script lang="ts">
	import pfp from "$lib/assets/pfp.webp";
	import Button from "$lib/components/Button.svelte";
	import Link from "$lib/components/Link.svelte";
</script>

<svelte:head>
	<title>Home | Luke Tong's Blog</title>
</svelte:head>

<section id="splash">
	<h1>Luke Tong</h1>
</section>

<section id="about">
	<div class="top">
		<img
			alt="Luke Tong"
			src={pfp}
			loading="lazy"
		/>
		<div>
			<h2>
				Hi! Welcome to my blog!
			</h2>
			<p>
				I'm Luke, and I love reading, biking, and <Link href="/">debate</Link>.
				<br />
				I'm currently a freshmen at University of Pennsylvania.
			</p>
		</div>
	</div>
	<div class="bottom">
		<div>
			<h3>Profile</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan dictum nulla,
				vel eleifend mauris tincidunt vitae. Donec semper vulputate scelerisque. Suspendisse
				ullamcorper tellus vel suscipit placerat. Curabitur consequat tempus diam, ut fermentum
				ex.Donec lectus libero, vulputate quis enim in, pulvinar rutrum felis.
			</p>
		</div>
		<div>
			<h3>Skills</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan dictum nulla,
				vel eleifend mauris tincidunt vitae. Donec semper vulputate scelerisque. Suspendisse
				ullamcorper tellus vel suscipit placerat. Curabitur consequat tempus diam, ut fermentum
				ex.Donec lectus libero, vulputate quis enim in, pulvinar rutrum felis.
			</p>
		</div>
		<div>
			<h3>Projects</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan dictum nulla,
				vel eleifend mauris tincidunt vitae. Donec semper vulputate scelerisque. Suspendisse
				ullamcorper tellus vel suscipit placerat. Curabitur consequat tempus diam, ut fermentum
				ex.Donec lectus libero, vulputate quis enim in, pulvinar rutrum felis.
			</p>
		</div>
		<div>
			<h3>Books</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan dictum nulla,
				vel eleifend mauris tincidunt vitae. Donec semper vulputate scelerisque. Suspendisse
				ullamcorper tellus vel suscipit placerat. Curabitur consequat tempus diam, ut fermentum
				ex.Donec lectus libero, vulputate quis enim in, pulvinar rutrum felis.
			</p>
		</div>
	</div>
</section>

<style lang="scss">
	#splash {
		height: 100vh;
		background-color: $dark-1;

		h1 {
			color: gainsboro;
			position: relative;
			top: 20vh;
			left: 6vw;
		}
	}

	#about {
		padding-block: 60px;
		.top {
			display: flex;
			flex-direction: horizontal;
			justify-content: center;
			img {
				width: 150px;
				height: 150px;
				border-radius: 50%;
				margin-right: 30px;
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
