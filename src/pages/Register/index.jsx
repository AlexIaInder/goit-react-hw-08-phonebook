import { Button, Input, Stack } from '@mui/material';
import { useSignupMutation } from 'api/auth';
import AuthContainer from 'components/AuthContainer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import PasswordInput from 'components/PasswordInput';

const Register = () => {
  const navigate = useNavigate();
  const [register, { isSuccess, error }] = useSignupMutation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (isSuccess) {
      navigate('/contacts');
    }

    if (error) {
      alert(error?.data?.message ?? 'Something went wrong');
    }
  }, [isSuccess, error]);

  const onSubmit = e => {
    e.preventDefault();

    register({ name, email, password });
  };

  return (
    <AuthContainer>
      <form onSubmit={onSubmit}>
        <Stack spacing={4}>
          <Input
            placeholder="Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            placeholder="Mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <PasswordInput
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button variant="contained" type="submit">
            Registration
          </Button>
        </Stack>
      </form>
    </AuthContainer>
  );
};

export default Register;
