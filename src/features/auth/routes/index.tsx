import { Route, Routes } from 'react-router-dom';
import NotFound from '@/components/not-found/NotFound';
import { Login } from './login/Login';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
