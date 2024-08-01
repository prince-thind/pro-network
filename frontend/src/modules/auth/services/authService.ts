// src/modules/auth/services/authService.ts
import httpClient from "../../../services/httpClient";

export const loginUser = async (data: { email: string; password: string }) => {
  const response = await httpClient.post("/auth/login", data);
  return response.data;
};
