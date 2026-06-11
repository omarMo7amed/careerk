"use client";

import { useState, ReactNode, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useAuthInit } from "@/features/auth";
import { useAuthStore } from "@/shared/providers/useAuthStore";

function AuthBootstrap() {
  useAuthInit();
  return null;
}

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
      {/* Sync QueryClient to auth store so we can clear cache on logout */}
      <SyncQueryClient queryClient={queryClient} />
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthBootstrap />
      {children}
    </QueryClientProvider>
  );
}

function SyncQueryClient({ queryClient }: { queryClient: QueryClient }) {
  const setQueryClient = useAuthStore((s) => s.setQueryClient);

  useEffect(() => {
    setQueryClient(queryClient);
    return () => setQueryClient(null);
  }, [queryClient, setQueryClient]);

  return null;
}
