import type { Track } from "./types";

export function truncate(str: string, limit: number): string {
	return str.length > limit ? str.substring(0, limit - 1) + "…" : str;
}

// TODO: maybe migrate Track to a class and have a default costructor (thus can also simplify server.ts)
// TODO: spotify component has a better default loading screen than blank everything
export function newTrack(): Track {
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
