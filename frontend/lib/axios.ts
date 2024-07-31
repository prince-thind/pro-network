// lib/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // Adjust the base URL as needed
});

export default axiosInstance;
