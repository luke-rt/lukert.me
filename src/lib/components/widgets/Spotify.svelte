<script lang="ts">
	import type { Track } from "$lib/types";

	export let track: Track;

	let artists = track.artists.join(", ");
</script>

<div>
	<b>{track.name}</b>
	<span>{artists}</span>
</div>

<style lang="scss">

</style>
