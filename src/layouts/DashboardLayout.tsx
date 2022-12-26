import { FC, ReactNode } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import './dashboard-layout.scss';

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout: FC<DashboardLayoutProps> = ({
  children,
}: DashboardLayoutProps) => {
  return (
    <main className="dashboard">
      <Sidebar />
      <div className="content"> {children} </div>
    </main>
  );
};

export default DashboardLayout;
