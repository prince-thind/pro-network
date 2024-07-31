// components/LoginForm.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { loginUser, UserData } from '../lib/api';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 1rem;
  color: #fff;
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
`;

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<UserData>();

  const onSubmit: SubmitHandler<UserData> = async (data) => {
    try {
      const response = await loginUser(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email', { required: 'Email is required' })} placeholder="Email" />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      
      <Input {...register('password', { required: 'Password is required' })} type="password" placeholder="Password" />
      {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      
      <Button type="submit">Login</Button>
    </Form>
  );
};

export default LoginForm;
