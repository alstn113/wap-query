import { QueryCache } from './QueryCache';

export interface QueryClientConfig {
  queryCache?: QueryCache;
}
export class QueryClient {
  private queryCache: QueryCache;

  constructor(config: QueryClientConfig = {}) {
    this.queryCache = config.queryCache || new QueryCache();
  }
}
