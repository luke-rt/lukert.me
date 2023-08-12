<script lang="ts">
	export let href: string;
	export let refer = false;
	export let large = false;
	export let light = false;
</script>

<a
	{href}
	target={refer ? "_blank" : undefined}
	rel={refer ? "noopener noreferrer" : undefined}
	class:large
	class:light
>
	<slot />
</a>

<style lang="scss">
	a {
		position: relative;
		display: inline-block;

		color: gainsboro;
		font-weight: 600;

		&:after {
			content: " ";
			background-color: white;
			position: absolute;
			width: 0%;
			left: 50%;
			transition: left 0.2s cubic-bezier(0.215, 0.61, 0.355, 1),
				width 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
		}

		&:hover {
			color: white;
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

	a.light {
		color: $dark-1;
		&:after {
			background-color: $dark-2;
		}
		&:hover {
			color: $dark-2;
		}
	}
</style>
