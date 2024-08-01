// src/pages/homepage.tsx
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTrendingPosts,
  selectTrendingPosts,
  selectTrendingPostsStatus,
  selectTrendingPostsError,
} from "../store/trendingPostsSlice";
import { RootState, AppDispatch } from "../store/store"; // Import AppDispatch
import styled from "styled-components";
import MainLayout from "../layouts/MainLayout";

const PostList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PostItem = styled.li`
  margin-bottom: 20px;
  padding: 15px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
`;

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>(); // Ensure the correct typing here
  const trendingPosts = useSelector(selectTrendingPosts);
  const status = useSelector(selectTrendingPostsStatus);
  const error = useSelector(selectTrendingPostsError);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTrendingPosts());
    }
  }, [status, dispatch]);

  return (
    <MainLayout>
      <h1>Trending Posts</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <ErrorMessage>{error}</ErrorMessage>}
      {status === "succeeded" && (
        <PostList>
          {trendingPosts.map((post) => (
            <PostItem key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.text}</p>
              <p>
                By {post.author} on{" "}
                {new Date(post.createdAt).toLocaleDateString()}
              </p>
            </PostItem>
          ))}
        </PostList>
      )}
    </MainLayout>
  );
};

export default HomePage;
