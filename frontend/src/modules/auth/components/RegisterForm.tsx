// components/RegisterForm.tsx
import { useForm, SubmitHandler } from 'react-hook-form';
import { registerUser, UserData } from '../lib/api';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<UserData>();

  const onSubmit: SubmitHandler<UserData> = async (data) => {
    try {
      const response = await registerUser(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('name')} placeholder="Name" required />
      <input {...register('email')} placeholder="Email" required />
      <input {...register('password')} placeholder="Password" type="password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
