// src/store/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string | null;
  token: string | null;
}

const initialState: AuthState = {
  email: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<{ email: string; token: string }>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token); // Store token in localStorage
    },
    clearUser(state) {
      state.email = null;
      state.token = null;
      localStorage.removeItem("token"); // Remove token from localStorage
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
