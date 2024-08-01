// src/pages/404.tsx
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  margin-top: 50px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #ff6f61;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #333;
`;

const NotFoundPage = () => {
  return (
    <Container>
      <Heading>404</Heading>
      <Message>Oops! The page you&apos;re looking for doesn&apos;t exist.</Message>
      <Link href="/">Go back to the homepage</Link>
    </Container>
  );
};

export default NotFoundPage;
