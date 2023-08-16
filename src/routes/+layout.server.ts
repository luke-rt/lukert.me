import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN,
} from "$env/static/private";
import type { Track } from "$lib/types";

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

export async function load(): Promise<Track> {
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

	const { access_token } = await response.json();

	const now_playing = await fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	});
	if (now_playing.status === 204 || now_playing.status > 400) {
		return {
			name: "",
			artists: [],
			url: "",
			album: "",
			album_img: "",
			progress_ms: 0,
			duration_ms: 0,
			playing: false,
		};
	}

	const track = await now_playing.json();

	return {
		name: track.item.name,
		artists: track.item.artists.map((artist: { name: string; }) => artist.name),
		url: track.item.external_urls.spotify,
		album: track.item.album.name,
		album_img: track.item.album.images[0].url,
		progress_ms: track.progress_ms,
		duration_ms: track.item.duration_ms,
		playing: track.is_playing,
	};
}
