export default function getNextPage(
  endpoint: string,
  page: number | null,
  next: string | null
): string | null {
  if (page === null) return `http://localhost:3000${endpoint}?page=2`;
  if (next === null) return null;

  return `http://localhost:3000${endpoint}?page=${page + 1}`;
}
