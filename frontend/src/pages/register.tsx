// pages/register.tsx
import Layout from '../layouts/MainLayout';
import RegisterForm from '../modules/auth/components/RegisterForm';

const Register = () => {
  return (
    <Layout>
      <h1>Register</h1>
      <RegisterForm />
    </Layout>
  );
};

export default Register;
