export function truncate(str: string, limit: number): string {
	return str.length > limit ? str.substring(0, limit - 1) + "…" : str;
}

export function typewriter(node: Element, { delay = 0, speed = 2 }) {
	if(!node.textContent) throw new Error("Must have text content");

	const text = node.textContent;
	const duration = text.length / (speed * 0.01);

	return {
		delay,
		duration,
		tick: (t: number) => {
			const i = Math.trunc(text.length * t);
			node.textContent = text.slice(0, i) + "|";
		}
	};
}
