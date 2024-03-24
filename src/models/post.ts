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
}

export type { Post, Tag };
