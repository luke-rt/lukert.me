export async function load({ fetch }) {
	const response = await fetch("/api/projects");
	return await response.json();
}
