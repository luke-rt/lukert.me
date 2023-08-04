<script>
	import "../app.scss";
	import Link from "$lib/components/Link.svelte";
</script>

<header>
	<nav>
		<Link large dark href="/">home</Link>
		<Link large dark href="books">books</Link>
		<Link large dark href="projects">projects</Link>
	</nav>
</header>

<main>
	<slot />
</main>

<footer />

<style lang="scss">
	header {
		position: absolute;
		width: 100%;
		nav {
			float: right;
		}
	}

	main {
		display: block;
	}

	footer {
		height: 50vh;
		background-color: black;
	}
</style>
