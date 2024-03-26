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

interface SystemMetrics {
  [key: string]: {
      name?: string;
      count?: number;
      items ?: string[]
  }
}

export type { Base, MetaData, SystemMetrics };

