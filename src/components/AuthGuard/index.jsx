import React from 'react';
import { Navigate } from 'react-router-dom';
import { useIsAuth } from 'hooks';

const AuthGuard = ({ children }) => {
  const isAuth = useIsAuth();

  return isAuth ? children : <Navigate to="/" />;
};

export default AuthGuard;
