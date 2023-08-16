<script lang="ts">
	import type { Track } from "$lib/types";
	import { truncate } from "$lib/utils";

	export let track: Track;

	let artists = track.artists.join(", ");
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
			<h3>
				{#if track.playing}
					⏸
				{:else}
					⏵
				{/if}
			</h3>
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
			text-align: center;
			border: solid gainsboro;
			border-radius: 50%;
			width: 31px;
			margin-inline: 10px;
			h3 {
				color: gainsboro;
			}
		}
	}
</style>
