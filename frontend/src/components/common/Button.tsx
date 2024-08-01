// src/components/common/Button.tsx
import styled from 'styled-components';

const Button = styled.button`
  padding: 12px;
  font-size: 1rem;
  color: #ffffff;
  background-color: #0070f3;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005bb5;
  }
`;

export default Button;
