import { Home } from "@pages/home";
import type { RouteObject } from "react-router";
import { RoutePath } from "./paths";

export const routes: RouteObject[] = [
  {
    element: <Home />,
    path: RoutePath.HOME,
  },
];
