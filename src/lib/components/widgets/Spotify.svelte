<script lang="ts">
	import { onMount } from "svelte";
	import { newTrack, truncate } from "$lib/utils";

	let track = newTrack();
	let artists = "";
	onMount(async () => {
		const response = await fetch(`/api/spotify`);

		track = await response.json();
		artists = track.artists.join(", ");
	});
</script>
<a target="_blank" rel="noopener noreferrer" href={track.url}>
	<div class="spotify">
		<div class="left">
			<img src={track.album_img} alt={`${track.name} album cover`} loading="lazy" />
			<div class="track">
				<p>
					{#if track.playing}
						Now Listening:
					{:else}
						Last Listened:
					{/if}
				</p>
				<b>{truncate(track.name, 20)}&nbsp • &nbsp</b><span>{truncate(artists, 20)}</span>
				<br />
				<sub>⊙ {truncate(track.album, 50)}</sub>
			</div>
		</div>
		<div class="right">
			<span class:one={track.playing} />
			<span class:two={track.playing} />
			<span class:three={track.playing} />
			<span class:four={track.playing} />
		</div>
	</div>
</a>

<style lang="scss">
	.spotify {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: $dark-1;
		padding: 10px;

		box-shadow: 3px 3px 5px gray;

		.left {
			display: flex;
			flex-direction: row;
			img {
				width: 60px;
				height: 60px;
				border-radius: 5px;
				filter: drop-shadow(3px 3px 5px black);

				margin-right: 10px;
			}
			.track {
				b,
				span,
				p {
					color: gainsboro;
				}
				p {
					font-size: 1.1em;
					padding-bottom: 5px;
				}
				sub {
					color: silver;
				}
			}
		}
		.right {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			span {
				height: 10px;
				width: 6px;
				background: gainsboro;
				margin-inline: 1px;

				&.one {
					animation: stretch 0.5s linear infinite;
				}
				&.two {
					animation: stretch 0.5s 0.25s linear infinite;
				}
				&.three {
					animation: stretch 0.5s 0.1s linear infinite;
				}
				&.four {
					animation: stretch 0.5s 0.15s linear infinite;
				}
			}
			@keyframes stretch {
				0% {
					height: 10px;
				}
				25% {
					height: 20px;
				}
				50% {
					height: 40px;
				}
				75% {
					height: 20px;
				}
				100% {
					height: 10px;
				}
			}
		}
	}
</style>
