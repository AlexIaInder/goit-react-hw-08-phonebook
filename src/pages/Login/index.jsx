import { Button, Input, Stack } from '@mui/material';
import { useLoginMutation } from 'api/auth';
import AuthContainer from 'components/AuthContainer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoEye, GoEyeClosed } from 'react-icons/go';

const Login = () => {
  const navigate = useNavigate();
  const [login, { isSuccess }] = useLoginMutation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState(false);

  const toggleBtn = () => {
    setType(prevType => !prevType);
  };
  useEffect(() => {
    if (isSuccess) {
      navigate('/contacts');
    }
  }, [isSuccess]);

  const onSubmit = () => {
    login({ name, password, type });
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
          <div>
            <Input
              type={type ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button onClick={toggleBtn}>
              {type ? <GoEyeClosed /> : <GoEye />}
            </Button>
          </div>
          <Button variant="contained" type="submit">
            Sign in
          </Button>
        </Stack>
      </form>
    </AuthContainer>
  );
};

export default Login;
