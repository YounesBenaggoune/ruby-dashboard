import { FC, ReactNode } from 'react';
import './button.scss';

type ButtonProps = {
  children: ReactNode;
};

const Button: FC<ButtonProps> = ({ children }: ButtonProps) => {
  return (
    <div className="button">
      <button type="button"> {children} </button>
    </div>
  );
};

export default Button;
