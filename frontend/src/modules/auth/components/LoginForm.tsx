// src/modules/auth/components/LoginForm.tsx
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { loginUser } from '../../../services/authService';
import { setUser } from '../../../store/authSlice';
import { useRouter } from 'next/router';
import axios from 'axios';
import { RootState } from '../../../store/store';
import AuthLayout from '../../../layouts/AuthLayout';

const Form = styled.form`
  display: flex;
  flex:1;
  flex-direction: column;
  align-items:center;
  justify-content:center;
  gap: 15px;
  width: 100%;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0070f3;
  }
`;

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

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  text-align: center;
`;

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const dispatch = useDispatch();
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (token) {
      router.push('/homepage'); // Redirect to homepage if already authenticated
    }
  }, [token, router]);

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const response = await loginUser(data);
      if (response.token) {
        dispatch(setUser({ email: data.email, token: response.token }));
        router.push('/homepage');
      } else {
        setLoginError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setLoginError('Invalid email or password. Please try again.');
      } else {
        setLoginError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <AuthLayout>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('email', { required: 'Email is required' })} placeholder="Email" />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        
        <Input {...register('password', { required: 'Password is required' })} type="password" placeholder="Password" />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        
        <Button type="submit">Login</Button>

        {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
      </Form>
    </AuthLayout>
  );
};

export default LoginForm;
