import { QueryClient } from "@tanstack/react-query";

export const TANS_TACK_QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: true,
      // staleTime: 5000 * 60 // 1 minute
    },
  },
});
