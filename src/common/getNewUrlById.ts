export default function getNewUrlById(endpoint: string, id: number): string {
  return `http://localhost:3000${endpoint}/${id}`;
}
