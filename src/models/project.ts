import { Base } from './base';
import { Metrics, Tag } from './post';

interface Project extends Base {
  title: string;
  summary?: string;
  demoUrl: string;
  sourceCodeUrl: string;
  snapshotImageUrl?: string;
  pinned?: boolean;
  published?: boolean;
  tags?: Tag[];
  metrics ?: Metrics;
}

export type { Project };

