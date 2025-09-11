import axios from "axios";
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

const api = axios.create({
  baseURL: API_BASE_URL, // your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
