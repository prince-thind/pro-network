// src/modules/auth/services/authService.ts
import httpClient from "./httpClient";

export interface LoginData {
  email: string;
  password: string;
}

export const loginUser = async (data: LoginData) => {
  try {
    const response = await httpClient.post("/auth/login", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (data: LoginData) => {
  try {
    const response = await httpClient.post("/auth/register", data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};
