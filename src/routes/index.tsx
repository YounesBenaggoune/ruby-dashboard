/* eslint-disable react/jsx-no-useless-fragment */
import { useRoutes } from 'react-router-dom';
import { privateRoutes } from './private';
import { publicRoutes } from './public';

export const AppRoutes = () => {
  const user = false;

  //   const commonRoutes = [{ path: '/', element: <Landing /> }];

  const routes = user ? privateRoutes : publicRoutes;

  const element = useRoutes([...routes]);

  return <>{element}</>;
};
