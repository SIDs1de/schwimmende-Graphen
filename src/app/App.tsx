import type { FC } from "react";
import { RouterProvider } from "react-router";
import { QueryClientProvider } from "./data-fetching";
import { router } from "./router";
import "normalize.css";

export const App: FC = () => (
  <QueryClientProvider>
    <RouterProvider router={router} />
  </QueryClientProvider>
);
