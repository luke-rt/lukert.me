<script lang="ts">
	import "../app.scss";
	import { page } from "$app/stores";
	import Link from "$lib/components/Link.svelte";
	import Button from "$lib/components/Button.svelte";
	import logo from "$lib/assets/logo.svg";
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	let ypos = 0;
	let height = 151;
	$: splash = $page.url.pathname == "/" && ypos < height - 150;
</script>

<svelte:window bind:scrollY={ypos} bind:outerHeight={height} />

<header class:transparent={splash}>
	<nav>
		<Link large href="/">home</Link>
		<Link large href="books">books</Link>
		<Link large href="projects">projects</Link>
		<Button>Contact</Button>
	</nav>
</header>

<main>
	<slot />
</main>

<footer>
	<a href="/">
		<img src={logo} alt="Tree logo" loading="lazy" />
	</a>
	<div>
		<Link large dark refer href="https://github.com/luke-rt">Github</Link>
		<Link large dark refer href="https://www.linkedin.com/in/luke-tong-73525a224/"
			>LinkedIn</Link
		>
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
		nav {
			padding-right: 5vw;
		}
		&:hover {
			box-shadow: 0 5px 10px -1px gray;
		}
	}
	header.transparent {
		background-color: transparent;
		&:hover {
			box-shadow: none;
		}
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
