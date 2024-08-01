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

// Helper functions to handle localStorage
const loadStateFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("auth");
    if (serializedState === null) {
      return initialState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return initialState;
  }
};

const saveStateToLocalStorage = (state: AuthState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("auth", serializedState);
  } catch {
    // Ignore write errors
  }
};

const authSlice = createSlice({
  name: "auth",
  initialState: loadStateFromLocalStorage(), // Load from localStorage on init
  reducers: {
    setUser(state, action: PayloadAction<{ email: string; token: string }>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      saveStateToLocalStorage(state); // Save to localStorage on setUser
    },
    clearUser(state) {
      state.email = null;
      state.token = null;
      saveStateToLocalStorage(state); // Save to localStorage on clearUser
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
