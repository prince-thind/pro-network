// src/store/trendingPostsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import httpClient from "../services/httpClient";

interface Post {
  _id: string;
  title: string;
  text: string;
  author: string;
  createdAt: string;
  // Add other relevant fields here
}

interface TrendingPostsState {
  posts: Post[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Initial state
const initialState: TrendingPostsState = {
  posts: [],
  status: "idle",
  error: null,
};

// Async thunk to fetch trending posts
export const fetchTrendingPosts = createAsyncThunk(
  "trendingPosts/fetchTrendingPosts",
  async () => {
    const response = await httpClient.get("/posts/trending");
    return response.data;
  }
);

const trendingPostsSlice = createSlice({
  name: "trendingPosts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTrendingPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchTrendingPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to load trending posts";
      });
  },
});

export default trendingPostsSlice.reducer;

export const selectTrendingPosts = (state: RootState) =>
  state.trendingPosts.posts;
export const selectTrendingPostsStatus = (state: RootState) =>
  state.trendingPosts.status;
export const selectTrendingPostsError = (state: RootState) =>
  state.trendingPosts.error;
