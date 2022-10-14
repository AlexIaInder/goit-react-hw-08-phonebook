import { GoEye, GoEyeClosed } from 'react-icons/go';
import { useState } from 'react';
import { IconButton, Input } from '@mui/material';

const PasswordInput = ({
  fullWidth = true,
  placeholder = 'Password',
  onChange,
  value,
}) => {
  const [type, setType] = useState(false);

  const toggleBtn = () => {
    setType(prevType => !prevType);
  };

  return (
    <Input
      fullWidth={fullWidth}
      type={type ? 'text' : 'password'}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      endAdornment={
        <IconButton onClick={toggleBtn}>
          {type ? <GoEyeClosed /> : <GoEye />}
        </IconButton>
      }
    />
  );
};

export default PasswordInput;
