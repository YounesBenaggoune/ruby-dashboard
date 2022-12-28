/* eslint-disable react/jsx-props-no-spreading */
import React, { FC, ReactNode } from 'react';
import './text-field.scss';

type TextFieldProps = {
  icon: ReactNode;
  placeHolder: string;
  label: string;
  type: string;
};

const TextField: FC<TextFieldProps> = ({
  icon,
  placeHolder,
  label,
  type,
  ...props
}: TextFieldProps) => {
  return (
    <div className="text-field">
      <label htmlFor="password"> {label} </label>
      <div className="text-field__wrp">
        {icon}
        <input
          type={type}
          name={label}
          id={label}
          placeholder={placeHolder}
          {...props}
        />
      </div>
    </div>
  );
};

export default TextField;
