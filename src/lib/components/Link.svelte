<script lang="ts">
	interface Props {
		href: string;
		refer?: boolean;
		large?: boolean;
		dark?: boolean;
		children?: import('svelte').Snippet;
	}

	let { href, refer = false, large = false, dark = false, children }: Props = $props();
</script>

<a
	{href}
	target={refer ? '_blank' : undefined}
	rel={refer ? 'noopener noreferrer' : undefined}
	class:large
	class:dark
>
	{@render children?.()}
</a>

<style lang="scss">
	a {
		position: relative;
		display: inline-block;

		color: $dark-2;
		font-weight: 600;

		&:after {
			content: ' ';
			background-color: $dark-2;
			position: absolute;
			display: block;
			width: 0%;
			left: 50%;
			transition:
				left 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
				width 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
		&:hover {
			color: $dark-2;
			&:after {
				width: 100%;
				height: 2px;
				left: 0;
			}
		}
	}

	a.large {
		color: $dark-1;
		font-family:
			'League Spartan',
			-apple-system,
			BlinkMacSystemFont,
			Segoe UI,
			Roboto,
			Oxygen,
			Ubuntu,
			Cantarell,
			Fira Sans,
			Droid Sans,
			Helvetica Neue,
			sans-serif;
		font-size: 1.4em;
		margin-block: 15px;
		margin-inline: 25px;

		&:hover {
			color: $dark-2;
		}

		&:after {
			color: $dark-2;
			margin-top: 5px;
		}
	}

	a.dark {
		color: gainsboro;
		&:after {
			background-color: whitesmoke;
		}
		&:hover {
			color: whitesmoke;
		}
	}
</style>
