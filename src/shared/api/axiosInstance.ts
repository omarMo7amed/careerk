import axios from "axios";
import { BASE_API_URL, MOCK_TOKEN } from "./constants";

export const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  // replace with token from your auth store
  const token = MOCK_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
