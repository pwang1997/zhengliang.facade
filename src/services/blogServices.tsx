import { BLOG_ENDPOINT } from "utils/restUtils";

async function listBlogs() {
  const response = await fetch(`${BLOG_ENDPOINT}/list`, { next: { revalidate: 3600 } });
  const data = await response.json();
  return data;
}

async function getBlogById(id: number | string) {
  const response = await fetch(`${BLOG_ENDPOINT}/${id}`, { cache: "no-cache" });
  const data = await response.json();
  return data;
}

async function searchBlogs(query: string) {
    const response = await fetch(`${BLOG_ENDPOINT}/search?query=${query}`, { next: { revalidate: 1800 } });
    const data = await response.json();
    return data;
}

export { getBlogById, listBlogs, searchBlogs };

