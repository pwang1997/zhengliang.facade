import { BLOG_ENDPOINT } from "utils/restUtils";

async function listBlogs() {
  const response = await fetch(`${BLOG_ENDPOINT}/list`, { next: { revalidate: 3600 } });
  const data = await response.json();
  return data;
}

async function getBlogById(id: number | string) {
  const response = await fetch(`${BLOG_ENDPOINT}/${id}`, { next: { revalidate: 3600 } });
  const data = await response.json();
  return data;
}

export { getBlogById, listBlogs };

