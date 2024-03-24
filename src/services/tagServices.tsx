const BASE_URL = "http://localhost:8080/api/v1/tags";

async function listTags() {
  const response = await fetch(`${BASE_URL}/list`);
  const data = await response.json();
  return data;
}

export { listTags };

