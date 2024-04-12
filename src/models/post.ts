import { Base, MetaData } from './base';

interface Tag extends Base {
  name: string;
}

interface Post extends Base {
  summary?: string;
  content: string;
  title: string;
  published: boolean;
  pinned: boolean;
  tags?: Tag[];
  postMeta?: MetaData;
  metrics ?: Metrics;
}

interface Metrics extends Base {
  views : number;
  likes : number
}

export type { Metrics, Post, Tag };

