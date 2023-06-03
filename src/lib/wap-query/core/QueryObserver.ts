import { QueryClient } from './QueryClient';

export class QueryObserver {
  private client: QueryClient;

  constructor(client: QueryClient) {
    this.client = client;
  }

  // protected는 상속받은 클래스에서만 접근 가능
  protected onSubscribe(): void {
    return;
  }

  private updateQuery(): void {
    return;
  }
}
