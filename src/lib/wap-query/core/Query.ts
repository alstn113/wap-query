import { QueryObserver } from './QueryObserver';
import { QueryCache } from './QueryCache';

export interface QueryConfig {
  queryCache: QueryCache;
  queryHash: string;
}

export class Query {
  queryHash: string;

  private queryCache: QueryCache;
  private observers: QueryObserver[];

  constructor(config: QueryConfig) {
    this.observers = [];
    this.queryHash = config.queryHash;
    this.queryCache = config.queryCache;
  }
}
