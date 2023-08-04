<script lang="ts">
	import pfp from "$lib/assets/pfp.png";
</script>

<svelte:head>
	<title>Home | Luke Tong's Blog</title>
</svelte:head>

<section id="splash">
	<h1>Luke Tong</h1>
</section>

<section id="about">
	<img alt="Luke Tong" src={pfp}/>
	<div>
		<h3>
			Hi! Welcome to my blog.
		</h3>
		<p>
			I'm Luke, and I love reading, biking, and debate.
			<br />
			I'm currently a freshmen at University of Pennsylvania.
		</p>
	</div>
</section>

<style lang="scss">
	section {
		height: 100vh;
	}

	#splash {
		background-color: $dark;

		h1 {
			color: gainsboro;
			position: relative;
			top: 20vh;
		}
	}

	#about {
		display: flex;
		flex-direction: horizontal;

		img {
			width: 200px;
			height: 200px;
			border-radius: 50%;
			margin-right: 5vw;
		}
	}
</style>
