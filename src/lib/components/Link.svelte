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

		color: $dark-1;
		font-weight: 600;

		&:after {
			content: " ";
			background-color: $dark-2;
			position: absolute;
			width: 0%;
			left: 50%;
			transition: left 0.2s cubic-bezier(0.215, 0.61, 0.355, 1),
				width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
		}

		&:hover {
			color: $dark-2;
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
		font-family: "League Spartan", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size: 1.4em;
		margin-block: 15px;
		margin-inline: 25px;

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
