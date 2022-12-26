import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
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
    <DashboardLayout>
      <Suspense
        fallback={
          <div>
            <p> Loading </p>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </DashboardLayout>
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
