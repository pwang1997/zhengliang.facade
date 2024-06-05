import { parseFetchToRelated } from "utils/misc-utils";
import { METRICS_ENDPOINT } from "utils/restUtils";

export async function fetchSystemMetrics(relatedToFetch : string[]) {
    const joinedRelatedToFetch = parseFetchToRelated({related : relatedToFetch});

    const response = await fetch(`${METRICS_ENDPOINT}?relatedToFetch=${joinedRelatedToFetch}`, { next: { revalidate: 60 } });
    const data = await response.json();
    return data;
  }