// src/lib/apiClient.js

import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true, 
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});


apiClient.interceptors.response.use(

  (response) => {
    return response;
  },

  (error) => {

    if (error.response && error.response.status === 401) {

      if (typeof window !== 'undefined') {
        console.error("Authentication Error: Redirecting to login.");
        window.location.href = '/login'; 
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
