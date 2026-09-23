export function buildGreeting(name?: string): string {
  const trimmed = name?.trim();
  return trimmed ? `Hello, ${trimmed}!` : "Hello!";
}
