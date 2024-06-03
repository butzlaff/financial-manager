'use client';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function UseQueryContext({ children }: { children: React.ReactNode }) {
  return (
    // Provide the react-query to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default UseQueryContext;
