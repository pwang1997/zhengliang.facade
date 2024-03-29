import { PROJECT_ENDPOINT } from "utils/restUtils";

export async function listProjects() {
  const response = await fetch(`${PROJECT_ENDPOINT}/list`, { next: { revalidate: 3600 } });
  const data = await response.json();
  return data;
}

export async function getProjectById(id: string | number) {
  const response = await fetch(`${PROJECT_ENDPOINT}/${id}`, { next: { revalidate: 3600 } });
  const data = await response.json();
  return data;
}