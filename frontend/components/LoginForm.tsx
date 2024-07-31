// components/LoginForm.tsx
import { useState, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { loginUser, UserData } from '../lib/api';
import { useRouter } from 'next/router';
import axios from 'axios';

const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
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

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>();
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/homepage'); // Redirect to homepage if already logged in
    }
  }, [router]);

  const onSubmit: SubmitHandler<UserData> = async (data) => {
    try {
      const response = await loginUser(data);
      if (response.token) {
        localStorage.setItem('token', response.token);
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
    <FormContainer>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('email', { required: 'Email is required' })} placeholder="Email" />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        
        <Input {...register('password', { required: 'Password is required' })} type="password" placeholder="Password" />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        
        <Button type="submit">Login</Button>

        {loginError && <ErrorMessage>{loginError}</ErrorMessage>}
      </Form>
    </FormContainer>
  );
};

export default LoginForm;