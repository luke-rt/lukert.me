export function truncate(str: string, limit: number): string {
	return str.length > limit ? str.substring(0, limit - 1) + "…" : str;
}
