<script lang="ts">
	export let href: string;
	export let refer = false;
	export let active = false;
	export let large = false;
</script>

<a
	{href}
	target={refer ? "_blank" : undefined}
	rel={refer ? "noopener noreferrer" : undefined}
	class:active
	class:large
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
		font-size: 1.5em;
		font-weight: 400;
		margin: 15px;

		&:after {
			margin-top: 5px;
		}
	}

	a.active {
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
</style>
