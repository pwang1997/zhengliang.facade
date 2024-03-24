interface Base {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
}

interface MetaData {
  id?: string;
  likes?: string | number;
  views?: string | number;
}

export type { Base, MetaData };
