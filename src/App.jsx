import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import AppBar from 'components/AppBar';
import AuthGuard from 'components/AuthGuard';

export const App = () => (
  <>
    <AppBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/contacts"
        element={
          <AuthGuard>
            <Contacts />
          </AuthGuard>
        }
      />
    </Routes>
  </>
);
