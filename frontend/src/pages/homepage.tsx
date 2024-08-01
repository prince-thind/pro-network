// src/pages/homepage.tsx
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { RootState } from '../store/store';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const HomePage = () => {
  const router = useRouter();
  const auth = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!auth.token) {
      router.push('/'); // Redirect to login page if not authenticated
    }
  }, [auth, router]);

  return (
    <Container>
      <Heading>Welcome to Your Homepage!</Heading>
      <p>You have successfully logged in.</p>
    </Container>
  );
};

export default HomePage;
