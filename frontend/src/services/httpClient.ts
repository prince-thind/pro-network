// src/services/httpClient.ts
import axios from "axios";

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Add your API URL to the .env file
});

export default httpClient;
