export const apiBaseUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000";

export async function apiGet<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${apiBaseUrl}${path}`, {
    ...init,
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });
  if (!res.ok) {
    throw new Error(`Request failed: ${res.status}`);
  }
  return (await res.json()) as T;
}
