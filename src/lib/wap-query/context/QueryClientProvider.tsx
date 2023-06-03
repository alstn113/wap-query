import { createContext } from 'react';
import { QueryClient } from '../core';

const QueryClientContext = createContext<QueryClient | undefined>(undefined);

interface QueryClientProviderProps {
  client: QueryClient;
  children?: React.ReactNode;
}

const QueryClientProvider = ({
  client,
  children,
}: QueryClientProviderProps) => {
  return (
    <QueryClientContext.Provider value={client}>
      {children}
    </QueryClientContext.Provider>
  );
};

export default QueryClientProvider;
