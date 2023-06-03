import { Query } from './Query';

export interface QueryMap {
  [key: string]: Query;
}
export class QueryCache {
  private queries: Query[];
  private queriesMap: QueryMap;

  constructor() {
    this.queries = [];
    this.queriesMap = {};
  }

  add(query: Query): void {
    if (this.queriesMap[query.queryHash]) return;

    this.queriesMap[query.queryHash] = query;
    this.queries.push(query);
    // this.notify({});
  }
}
