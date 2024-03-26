import { parseFetchToRelated } from "utils/misc-utils";

const BASE_URL = "http://localhost:8080/api/v1/metrics";

export async function fetchSystemMetrics(relatedToFetch : string[]) {

    const joinedRelatedToFetch = parseFetchToRelated({related : relatedToFetch});

    const response = await fetch(`${BASE_URL}?relatedToFetch=${joinedRelatedToFetch}`, { next: { revalidate: 3660 } });
    const data = await response.json();
    return data;
  }