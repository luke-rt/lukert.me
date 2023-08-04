<script lang="ts">
	import "../app.scss";
	import Link from "$lib/components/Link.svelte";
	import { page } from "$app/stores";

	let ypos = 0;
	let y = 1;

	$: splash = $page.url.pathname === "/" && ypos < y - 150;
</script>

<svelte:window bind:scrollY={ypos} bind:outerHeight={y} />

<header class:transparent={splash}>
	<nav>
		<Link large dark={splash} href="/">home</Link>
		<Link large dark={splash} href="books">books</Link>
		<Link large dark={splash} href="projects">projects</Link>
	</nav>
</header>

<main>
	<slot />
</main>

<footer />

<style lang="scss">
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: whitesmoke;
		nav {
			float: right;
			margin-right: 5vw;
		}
	}
	header.transparent {
		background-color: transparent;
	}

	footer {
		height: 50vh;
		background-color: $dark;
	}
</style>
