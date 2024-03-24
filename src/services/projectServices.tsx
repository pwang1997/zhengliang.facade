const BASE_URL = "http://localhost:8080/api/v1/projects";

export async function listProjects() {
  const response = await fetch(`${BASE_URL}/list`);
  const data = await response.json();
  return data;
}

export async function getProjectById(id : string | number) {
  const response = await fetch(`${BASE_URL}/${id}`);
  const data = await response.json();
  return data;
}