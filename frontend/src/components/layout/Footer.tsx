// src/components/layout/Footer.tsx
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 0.11rem;
  text-align: center;
  margin-top: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Pro-Network. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
