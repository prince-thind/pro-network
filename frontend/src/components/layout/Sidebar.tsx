// src/components/layout/Sidebar.tsx
import styled from "styled-components";

const SidebarContainer = styled.aside`
  background-color: #f4f4f4;
  padding: 20px;
  width: 250px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SidebarLink = styled.a`
  color: #333;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;

  &:hover {
    background-color: #ddd;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLink href="/dashboard">Dashboard</SidebarLink>
      <SidebarLink href="/profile">Profile</SidebarLink>
      <SidebarLink href="/settings">Settings</SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
