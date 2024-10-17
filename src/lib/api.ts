import { Store } from "@/models/store.model";
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

const store = JSON.parse(sessionStorage.getItem(Store.AUTH) || "{}");

API.defaults.headers.common["Content-Type"] = "application/json";

if (store?.state?.token) {
  API.defaults.headers.common.Authorization = `Bearer ${store?.state?.token}`;
}

if (!store?.state?.token) {
  sessionStorage.clear();
}

API.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export { API };
