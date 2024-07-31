// pages/index.tsx
import styled from 'styled-components';
import Container from '../components/Container';
import LoginForm from '../components/LoginForm';

const Heading = styled.h1`
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

const SubHeading = styled.h2`
  font-size: 1.5rem;
  color: #666;
  text-align: center;
  margin-bottom: 40px;
`;

const Home = () => {
  return (
    <Container>
      <Heading>Welcome to Pro-Network</Heading>
      <SubHeading>Connect with professionals around the world</SubHeading>
      <LoginForm />
    </Container>
  );
};

export default Home;
