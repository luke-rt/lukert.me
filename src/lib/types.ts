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
};

export type Item = {
	title: string;
	img: string;
	location: string;
	desc: string;
	url: string;
	date: string;
}
