"use client";

import { useState, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function QueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
            refetchOnWindowFocus: false,
            retry: 2,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
<<<<<<< HEAD
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
=======
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
>>>>>>> 36606741aebf48a3c9a381c80d782b15463dcc7e
    </QueryClientProvider>
  );
}
