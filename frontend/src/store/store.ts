// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import trendingPostsReducer from './trendingPostsSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    trendingPosts: trendingPostsReducer,
    // Add other slices here as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
