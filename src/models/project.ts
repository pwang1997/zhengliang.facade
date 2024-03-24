import { Base } from './base';
import { Tag } from './post';

interface Project extends Base {
  title: string;
  summary?: string;
  demoUrl: string;
  sourceCodeUrl: string;
  snapshotImageUrl?: string;
  pinned?: boolean;
  published?: boolean;
  tags?: Tag[];
}

export type { Project };
