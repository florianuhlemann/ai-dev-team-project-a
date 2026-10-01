export function buildGreeting(name: string): string {
	const trimmed = name.trim();
	if (trimmed === '') {
		return '';
	}
	return `Hello, ${trimmed}!`;
}
