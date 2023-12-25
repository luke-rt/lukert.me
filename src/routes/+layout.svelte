<script lang="ts">
	import "../app.scss";
	import { slide } from "svelte/transition";
	import { circInOut } from "svelte/easing";
	import { page, navigating } from "$app/stores";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"
	import Link from "$lib/components/Link.svelte";
	import logo from "$lib/assets/logo.svg";

	// vercel stuff
	inject({ mode: dev ? "development" : "production" });
	injectSpeedInsights();

	let ypos = 0;
	let height = 151;

	$: splash = ypos < height - 125;
	$: home = $page.url.pathname == "/";
	$: if (!home) splash = ypos < height * 0.75 - 125;
</script>

<svelte:window bind:scrollY={ypos} bind:outerHeight={height} />

<header class:transparent={splash}>
	<nav>
		<Link large dark={splash && !home} href="/">home</Link>
		<!--<Link large dark={splash && !home} href="books">books</Link>-->
		<Link large dark={splash && !home} href="projects">projects</Link>
		<Link large dark={splash && !home} href="mailto:luke.rtong@gmail.com">contact</Link>
	</nav>
</header>

{#key $page.url.pathname}
	{#if $navigating}
		<div
			out:slide={{
				axis: "x",
				duration: 500,
				delay: 300,
				easing: circInOut,
			}}
			class="transition black"
		/>
		<div
			out:slide={{
				axis: "x",
				duration: 500,
				delay: 500,
				easing: circInOut,
			}}
			class="transition red"
		/>
	{/if}
	<main>
		<slot />
	</main>
{/key}

<footer>
	<a href="/">
		<img src={logo} alt="Tree logo" loading="lazy" />
	</a>
	<div>
		<Link large dark refer href="https://github.com/luke-rt">Github</Link>
		<Link large dark refer href="https://www.linkedin.com/in/luke-rt/">LinkedIn</Link>
		<Link large dark refer href="https://www.goodreads.com/luke-rt">Goodreads</Link>
	</div>
	<p>Copyright © 2023 Luke Tong</p>
</footer>

<style lang="scss">
	header {
		z-index: 1000;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: whitesmoke;
		transition: 0.2s;
		nav {
			width: fit-content;
			margin-right: 5vw;
			margin-left: auto;
		}
		&.transparent {
			background-color: transparent;
		}
	}

	.transition {
		position: fixed;
		height: 100%;
		width: 100%;
		&.black {
			background-color: $dark-1;
			z-index: 1000;
		}
		&.red {
			background-color: $dark-2;
			z-index: 999;
		}
	}

	footer {
		background-color: $dark-1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 50vh;
		a {
			margin: 20px;
			img {
				width: 120px;
				height: 120px;
				padding: 10px;
				border-radius: 50%;

				transition: 0.3s;
				filter: drop-shadow(2px 2px 4px black);

				&:hover {
					background-color: $dark-1;
					filter: drop-shadow(8px 8px 8px black);
				}
			}
		}
		p {
			color: gainsboro;
		}
	}
</style>
