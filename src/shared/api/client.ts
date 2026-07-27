import { create } from "axios";
import { TIMEOUT_MS } from "./constants";

export const apiClient = create({
  baseURL: import.meta.env.VITE_BASE_BACKEND_URL,
  timeout: TIMEOUT_MS,
});
