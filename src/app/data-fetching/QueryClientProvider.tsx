import type { FC } from "react";
import { QueryClient, QueryClientProvider as QueryClientProviderBase } from "react-query";
import type { QueryClientProviderProps } from "./props";

const queryClient = new QueryClient();

export const QueryClientProvider: FC<QueryClientProviderProps> = ({ children }) => (
  <QueryClientProviderBase client={queryClient}>{children}</QueryClientProviderBase>
);
