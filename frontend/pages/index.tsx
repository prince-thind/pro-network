// pages/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/homepage'); // Redirect to homepage if already logged in
    }
  }, [router]);

  return <LoginForm />;
};

export default Index;
