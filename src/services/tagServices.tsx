import { TAG_ENDPOINT } from "utils/restUtils";

async function listTags() {
  const response = await fetch(`${TAG_ENDPOINT}/list`,  { next: { revalidate: 3600 } });
  const data = await response.json();
  return data;
}

export { listTags };

