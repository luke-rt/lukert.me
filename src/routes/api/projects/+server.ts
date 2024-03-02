import { json } from "@sveltejs/kit";
import type { Project } from "$lib/types";

export async function GET() {
	const projects: Project[] = [];
	// projects.push({
	// 	title: "Penn Course Plan + Alert (Penn Labs Sprig 2024)",
	// 	img: "sparkify.png",
	// 	desc: "Integrates two previous Penn Labs products, Penn Course Alert (a place to sign up for alerts when a full course opens up) and Penn Course Plan (a mock schedule platform), into a single, unified platform for a more intuitive course shopping experience.",
	// 	demo_url: "https://penncourseplan.com/",
	// 	src_url: "https://github.com/pennlabs/penn-courses",
	// })
	projects.push({
		title: "Sparkify (Penn Spark Fall 2023)",
		img: "sparkify.png",
		desc: "A web app that uses AI to generate a user's collage of their top music taste on Spotify. Built with Python, Svelte, and AWS Lambda",
		demo_url: "https://sparkify.vercel.app/",
		src_url: "https://github.com/PennSpark/fa23-sparkify",
	});
	projects.push({
		title: "The Daily Pennsylvanian Platform API",
		img: "thedp.png",
		desc: "A unified API for The Daily Pennsylvanian, Under the Button, and 34th Street websites, as well as the DP+ mobile app. Built with Express, MongoDB, and TypeScript",
		src_url: "https://github.com/dailypenn/api.thedp.com",
	});
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
	projects.push({
		title: "Penn Course Cart (SHOWCASE)",
		img: "penn-course-cart.png",
		desc: "A UI for picking and viewing courses. (Penn Labs Club Application)",
		demo_url: "https://pennlabs-frontend-challenge.vercel.app/",
		src_url: "https://github.com/luke-rt/pennlabs-frontend-challenge",
	});
	projects.push({
		title: "Under the Button quiz (SHOWCASE)",
		img: "dp-challenge.png",
		desc: "A UI for an interactive satirical quiz. (The DP Club Application)",
		demo_url: "https://dp-challenge.vercel.app/",
		src_url: "https://github.com/luke-rt/dp-challenge",
	});

	return json({
		projects: projects,
	});
}
