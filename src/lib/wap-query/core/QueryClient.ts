import { QueryCache } from './QueryCache';

export class QueryClient {
  private queryCache: QueryCache;

  constructor(queryCache?: QueryCache) {
    this.queryCache = queryCache || new QueryCache();
  }
}
