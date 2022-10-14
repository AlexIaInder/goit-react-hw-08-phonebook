import { Button, Input, Stack } from '@mui/material';
import { useRegisterMutation } from 'api/auth';
import AuthContainer from 'components/AuthContainer';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoEye, GoEyeClosed } from 'react-icons/go';

const Register = () => {
  const navigate = useNavigate();
  const [register, { isSuccess }] = useRegisterMutation();
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
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
    register({ name, mail, password, type });
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
            value={mail}
            onChange={e => setMail(e.target.value)}
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
            Registration
          </Button>
        </Stack>
      </form>
    </AuthContainer>
  );
};

export default Register;
