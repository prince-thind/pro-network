// pages/homepage.tsx
import styled from 'styled-components';
import Container from '../components/Container';

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const HomePage = () => {
  return (
    <Container>
      <Heading>Welcome to Your Homepage!</Heading>
      <p>You have successfully logged in.</p>
    </Container>
  );
};

export default HomePage;
