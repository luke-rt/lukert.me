<script lang="ts">
	import { run } from 'svelte/legacy';

	import "../app.scss";
	import { slide } from "svelte/transition";
	import { circInOut } from "svelte/easing";
	import { page, navigating } from "$app/stores";
	import { dev } from "$app/environment";
	import { inject } from "@vercel/analytics";
	import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
	import Link from "$lib/components/Link.svelte";
	import logo from "$lib/assets/logo.svg";
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	// vercel stuff
	inject({ mode: dev ? "development" : "production" });
	injectSpeedInsights();

	let ypos = $state(0);
	let height = $state(151);

	let splash;
	run(() => {
		splash = ypos < height - 125;
	});
	let home = $derived($page.url.pathname == "/");
	run(() => {
		if (!home) splash = ypos < height * 0.75 - 125;
	});
</script>

<svelte:window bind:scrollY={ypos} bind:outerHeight={height} />

<header class:transparent={splash}>
	<nav>
		<Link large dark={splash && !home} href="/">home</Link>
		<Link large dark={splash && !home} href="projects">projects</Link>
		<Link large refer dark={splash && !home} href="/LukeTong_Resume.pdf">resume</Link>
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
		></div>
		<div
			out:slide={{
				axis: "x",
				duration: 500,
				delay: 500,
				easing: circInOut,
			}}
			class="transition red"
		></div>
	{/if}
	<main>
		{@render children?.()}
	</main>
{/key}

<footer>
	<a href="/">
		<img src={logo} alt="Tree logo" loading="lazy" />
	</a>
	<p>luke.rtong@gmail.com</p>
	<div>
		<Link large dark refer href="https://github.com/luke-rt">Github</Link>
		<Link large dark refer href="https://www.linkedin.com/in/luke-rt/">LinkedIn</Link>
	</div>
	<p>Copyright © 2024 Luke Tong</p>
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
			margin: 8px;
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
		div {
			margin-top: 15px;
		}
		p {
			color: gainsboro;
		}
	}
</style>
