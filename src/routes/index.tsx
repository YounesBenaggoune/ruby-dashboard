/* eslint-disable react/jsx-no-useless-fragment */
import { useRoutes } from 'react-router-dom';

import { privateRoutes } from './private';

export const AppRoutes = () => {
  //   const auth = useAuth();

  //   const commonRoutes = [{ path: '/', element: <Landing /> }];

  //   const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...privateRoutes]);

  return <>{element}</>;
};
