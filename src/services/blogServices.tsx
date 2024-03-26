const BASE_URL = "http://localhost:8080/api/v1/posts";

async function listBlogs() {
  const response = await fetch(`${BASE_URL}/list`, { next: { revalidate: 3660 } });
  const data = await response.json();
  return data;
}

async function getBlogById(id: number | string) {
  const response = await fetch(`${BASE_URL}/${id}`, { next: { revalidate: 3660 } });
  const data = await response.json();
  return data;
}

export { getBlogById, listBlogs };

