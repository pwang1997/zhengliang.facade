const BASE_URL = "http://localhost:8080/api/v1/projects";

export async function listProjects() {
  const response = await fetch(`${BASE_URL}/list`,  { next: { revalidate: 3660 } });
  const data = await response.json();
  return data;
}

export async function getProjectById(id : string | number) {
  const response = await fetch(`${BASE_URL}/${id}`,  { next: { revalidate: 3660 } });
  const data = await response.json();
  return data;
}