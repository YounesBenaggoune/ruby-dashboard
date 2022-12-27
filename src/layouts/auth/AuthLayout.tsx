import { FC, ReactNode } from 'react';
import authBackground from '@/assets/images/auth-background.jpg';
import './auth-layout.scss';

type AuthLayoutProps = {
  children: ReactNode;
};

export const AuthLayout: FC<AuthLayoutProps> = ({
  children,
}: AuthLayoutProps) => {
  return (
    <section
      style={{ backgroundImage: `url(${authBackground})` }}
      className="auth-layout"
    >
      <div className="auth-layout__wrp"> {children} </div>
    </section>
  );
};
