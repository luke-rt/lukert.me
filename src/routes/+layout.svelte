<script lang="ts">
	import "../app.scss";
	import { slide } from "svelte/transition";
	import { circInOut } from "svelte/easing";
	import { page, navigating } from "$app/stores";
	import { inject } from "@vercel/analytics";
	import Link from "$lib/components/Link.svelte";
	import Button from "$lib/components/Button.svelte";
	import logo from "$lib/assets/logo.svg";
	import { dev } from "$app/environment";

	inject({ mode: dev ? "development" : "production" });

	let ypos = 0;
	let height = 151;

	$: splash = ypos < height - 150;
	$: home = $page.url.pathname == "/";

	$: if (!home) {
		splash = ypos < height * 0.5 - 100;
	}
</script>

<svelte:window bind:scrollY={ypos} bind:outerHeight={height} />

<header class:transparent={splash}>
	<nav>
		<Link large dark={splash && !home} href="/">home</Link>
		<!--<Link large dark={splash && !home} href="books">books</Link>-->
		<Link large dark={splash && !home} href="projects">projects</Link>
		<Button dark={splash && !home}>Contact</Button>
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
			id="transition"
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
		display: flex;
		align-items: center;
		justify-content: right;
		background-color: whitesmoke;
		transition: 0.2s;
		nav {
			padding-right: 5vw;
		}
	}
	header.transparent {
		background-color: transparent;
	}

	#transition {
		position: fixed;
		height: 100vh;
		width: 100vw;
		background-color: $dark-1;
		z-index: 1000;
	}

	footer {
		height: 50vh;
		background-color: $dark-1;

		display: flex;
		flex-direction: column;
		align-items: center;
		a {
			margin: 20px;
			margin-top: 80px;
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
