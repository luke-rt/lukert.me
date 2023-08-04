<script lang="ts">
	export let href: string;
	export let refer = false;
	export let large = false;
	export let dark = false;
</script>

<a
	{href}
	target={refer ? "_blank" : undefined}
	rel={refer ? "noopener noreferrer" : undefined}
	class:large
	class:dark
>
	<slot />
</a>

<style lang="scss">
	a {
		position: relative;
		display: inline-block;

		color: black;
		font-weight: 600;

		&:after {
			content: " ";
			background-color: gray;
			position: absolute;
			width: 0%;
			left: 50%;
			transition: left 0.2s cubic-bezier(0.215, 0.61, 0.355, 1),
				width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
		}

		&:hover {
			color: dimgray;
			transition: 0.3s;
			&:after {
				content: " ";
				position: absolute;
				display: block;
				width: 100%;
				height: 2px;
				left: 0;
			}
		}
	}

	a.large {
		font-size: 1.2em;
		font-weight: 400;
		margin: 15px;

		&:after {
			margin-top: 5px;
		}
	}

	a.dark {
		color: lightgray;
		&:after {
			background-color: white;
		}
		&:hover {
			color: white;
		}
	}
</style>
