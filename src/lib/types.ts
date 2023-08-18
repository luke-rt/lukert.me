export type Track = {
	name: string;
	artists: string[];
	url: string;
	album: string;
	album_img: string;
	progress_ms: number;
	duration_ms: number;
	playing: boolean;
};

export type Project = {
	title: string;
	img: string;
	desc: string;
	src_url?: string;
	demo_url?: string;
}
