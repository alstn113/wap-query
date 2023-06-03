import { QueryClient } from './QueryClient';

export class QueryObserver {
  private client: QueryClient;

  constructor(client: QueryClient) {
    this.client = client;
  }

  protected onSubscribe(): void {
    return;
  }

  private updateQuery(): void {
    return;
  }
}
