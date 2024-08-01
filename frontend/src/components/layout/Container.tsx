// src/components/layout/Container.tsx
import styled from "styled-components";

const ContainerDiv = styled.div``;

const Container = ({ children }: { children: React.ReactNode }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

export default Container;
