import { Button, Input, Stack } from '@mui/material';
import { useLoginMutation } from 'api/auth';
import AuthContainer from 'components/AuthContainer';
import PasswordInput from 'components/PasswordInput';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [login, { isSuccess, error }] = useLoginMutation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isSuccess) {
      navigate('/contacts');
    }

    if (error) {
      alert(error?.data?.message ?? 'Something went wrong');
    }
  }, [isSuccess, navigate, error]);

  const onSubmit = e => {
    e.preventDefault();

    login({ email, password });
  };

  return (
    <AuthContainer>
      <form onSubmit={onSubmit}>
        <Stack spacing={4}>
          <Input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <PasswordInput
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button variant="contained" type="submit">
            Sign in
          </Button>
        </Stack>
      </form>
    </AuthContainer>
  );
};

export default Login;
