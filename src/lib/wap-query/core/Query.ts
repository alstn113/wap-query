import { QueryObserver } from './QueryObserver';
import { QueryCache } from './QueryCache';

// readonly는 한 번 할당되면 변경할 수 없는 속성
export type QueryKey = readonly unknown[];

export interface QueryConfig {
  queryKey: QueryKey;
  queryHash: string;
  queryCache: QueryCache;
}

export class Query {
  queryKey: QueryKey;
  queryHash: string;

  private queryCache: QueryCache;
  private observers: QueryObserver[];

  constructor(config: QueryConfig) {
    this.observers = [];
    this.queryKey = config.queryKey;
    this.queryHash = config.queryHash;
    this.queryCache = config.queryCache;
  }
}
