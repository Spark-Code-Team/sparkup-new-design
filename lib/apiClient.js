// src/lib/apiClient.js

import axios from "axios";

// create super hard api client;
const rawBase =
  process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || "";

const baseURL = rawBase.replace(/\/+$/, "");

const apiClient = axios.create({
  baseURL: baseURL,

  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error.response && error.response.status === 401) {
      if (typeof window !== "undefined") {
        console.error("Authentication Error: Redirecting to login.");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
