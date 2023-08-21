import { json } from "@sveltejs/kit";
import type { Project } from "$lib/types";

export async function GET() {
	const projects: Project[] = [];

	projects.push({
		title: "The Tower PHS",
		img: "thetowerphs.png",
		desc: "The website for Princeton High School's newspaper club, The Tower. Written with Next.js, Prisma, and TypeScript and uses postgreSQL as a database",
		demo_url: "https://www.towerphs.com/home",
		src_url: "https://github.com/luke-rt/thetowerphs.com",
	});
	projects.push({
		title: "Asciiframe",
		img: "asciiframe.png",
		desc: "A command-line tool that can convert any video (or image) into a stream of ascii characters that can be played in the terminal. Written with Rust and Open Computer Vision.",
		src_url: "https://github.com/luke-rt/asciiframe",
	});
	projects.push({
		title: "Guess the Number OS (Kernel)",
		img: "guess-the-number.png",
		desc: "A bare metal, 32-bit kernel + custom bootloader written in C and Intel Assembly. All it does is play guess the number.",
		src_url: "https://github.com/luke-rt/guess-the-number",
	});

	return json({
		projects: projects,
	});
}
