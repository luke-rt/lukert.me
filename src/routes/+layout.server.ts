import {
	SPOTIFY_CLIENT_ID,
	SPOTIFY_CLIENT_SECRET,
	SPOTIFY_REFRESH_TOKEN,
} from "$env/static/private";
import type { Track } from "$lib/types";

const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT = "https://api.spotify.com/v1/me/player/recently-played ";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const DEFAULT: Track = {
	name: "",
	artists: [],
	url: "",
	album: "",
	album_img: "",
	progress_ms: 0,
	duration_ms: 0,
	playing: false,
};

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

	if(now_playing.status === 204 || now_playing.status > 400) return DEFAULT;

	const track = await now_playing.json();
	let track_item = track.item;
	let progress_ms = track.progress_ms;
	let playing = track.is_playing;

	if(track.currently_playing_type != "track") {
		const recently_played = await fetch(RECENTLY_PLAYED_ENDPOINT, {
			headers: {
				Authorization: `Bearer ${access_token}`,
			},
		});

		if(recently_played.status === 204 || recently_played.status > 400) return DEFAULT;

		const recent_tracks = await recently_played.json();

		track_item = recent_tracks.items[0].track;
		progress_ms = 0;
		playing = false;
	}

	return {
		name: track_item.name,
		artists: track_item.artists.map((artist: { name: string; }) => artist.name),
		url: track_item.external_urls.spotify,
		album: track_item.album.name,
		album_img: track_item.album.images[0].url,
		duration_ms: track_item.duration_ms,
		progress_ms: progress_ms,
		playing: playing,
	};
}
