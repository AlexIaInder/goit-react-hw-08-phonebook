import {
  AppBar as AppBarMui,
  Box,
  Typography,
  Toolbar,
  Link,
  Stack,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useIsAuth } from 'hooks';

const AppBar = () => {
  const navigate = useNavigate();
  const isAuth = useIsAuth();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarMui position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              sx={{ cursor: 'pointer' }}
              color="inherit"
              underline="none"
              onClick={() => navigate('/')}
            >
              Home
            </Link>
          </Typography>
          {isAuth ? (
            <Stack direction="row" spacing={2}>
              <Link
                sx={{ cursor: 'pointer' }}
                color="inherit"
                underline="none"
                onClick={() => navigate('/contacts')}
              >
                Contacts
              </Link>
              <Link
                sx={{ cursor: 'pointer' }}
                color="inherit"
                underline="none"
                onClick={logout}
              >
                Logout
              </Link>
            </Stack>
          ) : (
            <Stack direction="row" spacing={2}>
              <Link
                sx={{ cursor: 'pointer' }}
                color="inherit"
                underline="none"
                onClick={() => navigate('/login')}
              >
                Login
              </Link>
              <Link
                sx={{ cursor: 'pointer' }}
                color="inherit"
                underline="none"
                onClick={() => navigate('/register')}
              >
                Registration
              </Link>
            </Stack>
          )}
        </Toolbar>
      </AppBarMui>
    </Box>
  );
};

export default AppBar;
