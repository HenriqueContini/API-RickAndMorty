export default function getPrevPage(
  endpoint: string,
  page: number | null,
  prev: string | null
): string | null {
  if (prev === null || page === null) return null;

  return `http://localhost:3000${endpoint}?page=${page - 1}`;
}
