<script>
	import "../app.scss";
	import Link from "$lib/components/Link.svelte";
</script>

<header>
	<nav>
		<Link large href="/">Home</Link>
		<Link large href="books">Books</Link>
		<Link large href="projects">Projects</Link>
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
