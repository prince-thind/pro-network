// lib/api.ts
import axios from "./axios";

export interface UserData {
  name: string;
  email: string;
  password: string;
}

export const registerUser = async (userData: UserData) => {
  const response = await axios.post("/auth/register", userData);
  return response.data;
};

export const loginUser = async (userData: UserData) => {
  const response = await axios.post("/auth/login", userData);
  return response.data;
};

export const getUserProfile = async () => {
  const response = await axios.get("/users/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const updateUserProfile = async (userData: UserData) => {
  const response = await axios.put("/users/me", userData, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
};
