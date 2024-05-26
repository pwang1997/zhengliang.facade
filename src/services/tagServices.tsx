import { TAG_ENDPOINT } from "utils/restUtils";

async function listTags(relatedToFetch = '') {
  const response = await fetch(`${TAG_ENDPOINT}/list?relatedToFetch=${relatedToFetch}`,  { next: { revalidate: 3600 } });
  const data = await response.json();
  return data;
}

export { listTags };

