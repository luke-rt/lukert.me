import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN,
} from "$env/static/private";
import type { Track } from "$lib/types";
import { newTrack } from "$lib/utils";

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played ";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

export async function GET() {
	const { access_token } = await getAccessToken();

	let response = await getItem(NOW_PLAYING_ENDPOINT, access_token);
	let track_item;
	let progress_ms = 0;
	let is_playing = false;

	if (response.status === 204 || response.status > 400) {
		// if request fails or content is empty
		response = await getItem(RECENTLY_PLAYED_ENDPOINT, access_token);
		if (response.status === 204 || response.status > 400) return new Response(JSON.stringify(newTrack()));

		const recently_played = await response.json();
		track_item = recently_played.items[0].track;
	} else {
		// if request succeeds
		const now_playing = await response.json();

		if (now_playing.currently_playing_type != "track") {
			// if now_playing is a podcast, etc
			response = await getItem(RECENTLY_PLAYED_ENDPOINT, access_token);
			if (response.status === 204 || response.status > 400) return new Response(JSON.stringify(newTrack()));

			const recently_played = await response.json();
			track_item = recently_played.items[0].track;
		} else {
			// currently playing is a track
			track_item = now_playing.item;
			progress_ms = now_playing.progress_ms;
			is_playing = now_playing.is_playing;
		}
	}

	return new Response(JSON.stringify({
		name: track_item.name,
		artists: track_item.artists.map((artist: { name: string }) => artist.name),
		url: track_item.external_urls.spotify,
		album: track_item.album.name,
		album_img: track_item.album.images[0].url,
		duration_ms: track_item.duration_ms,
		progress_ms: progress_ms,
		playing: is_playing,
	}));
}

async function getAccessToken() {
	const params = new URLSearchParams();
	params.append("grant_type", "refresh_token");
	params.append("refresh_token", SPOTIFY_REFRESH_TOKEN);

	const response = await fetch(TOKEN_ENDPOINT, {
		method: "POST",
		headers: {
			Authorization: `Basic ${btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: params,
	});
	return response.json();
}

async function getItem(endpoint: string, access_token: string) {
	const response = fetch(endpoint, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});

	return response;
}
