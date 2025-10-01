import { apiGet } from "./config";

type ListCoursesResponse = {
  items: Array<{
    id: string;
    title: string;
    slug: string;
    thumbnailUrl?: string;
    level?: string;
    certificationType?: string;
  }>;
  total: number;
  page: number;
  pageSize: number;
};

export async function getCourses(params: {
  q?: string;
  category?: string;
  level?: string;
  language?: string;
  cert?: string;
  page?: number;
  limit?: number;
}) {
  const usp = new URLSearchParams();
  if (params.q) usp.set("q", params.q);
  if (params.category) usp.set("category", params.category);
  if (params.level) usp.set("level", params.level);
  if (params.language) usp.set("language", params.language);
  if (params.cert) usp.set("cert", params.cert);
  if (params.page) usp.set("page", String(params.page));
  if (params.limit) usp.set("limit", String(params.limit));
  const qs = usp.toString();
  const path = `/api/olp/courses${qs ? `?${qs}` : ""}`;
  const data = await apiGet<ListCoursesResponse>(path);
  return data;
}
