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
	<div class="arrow" class:dark={splash}>
	</div>
</header>

<main>
	<slot />
</main>

<footer />

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
		&:hover {
			box-shadow: 0 5px 10px -1px lightgray;
		}
		.arrow {
			border-color: $dark-1;
			margin-bottom: 1vh;
			margin-left: 30px;
			margin-right: 45px;

			height: 1.2em;
			width: 1.2em;

			box-sizing: border-box;
			border-style: solid;
			border-width: 0px 3px 3px 0px;
			border-radius: 10%;

			transform: rotate(45deg);
			&:hover {
				cursor: pointer;
				border-color: $dark-2;
			}
		}
		.arrow.dark {
			border-color: lightgray;
			&:hover {
				border-color: white;
			}
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
	}
</style>
