import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { lazyImport } from '../utils/lazyImport';

const { Products } = lazyImport(
  () => import('../features/products'),
  'Products'
);
const { Overview } = lazyImport(
  () => import('../features/overview'),
  'Overview'
);

const App = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div>
            <p> Loading </p>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export const privateRoutes = [
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Overview /> },
      { path: '/products', element: <Products /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
