// src/components/layout/AuthLayout.tsx
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AuthLayout;
