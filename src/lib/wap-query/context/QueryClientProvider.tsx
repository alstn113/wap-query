import { createContext } from 'react';
import { QueryClient } from '../core';

export const QueryClientContext = createContext<QueryClient | undefined>(
  undefined,
);

export interface QueryClientProviderProps {
  client: QueryClient;
  children?: React.ReactNode;
}

export const QueryClientProvider = ({
  client,
  children,
}: QueryClientProviderProps) => {
  return (
    <QueryClientContext.Provider value={client}>
      {children}
    </QueryClientContext.Provider>
  );
};
