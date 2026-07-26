import type { FC } from "react";
import { RouterProvider } from "react-router";
import { QueryClientProvider } from "./data-fetching";
import { router } from "./router";
import styles from "./App.module.scss";

export const App: FC = () => (
  <div className={styles.app}>
    <QueryClientProvider>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </div>
);
