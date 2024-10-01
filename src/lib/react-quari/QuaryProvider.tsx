import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export const QuaryProvider = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>;
};
