import React, { ReactNode, InputHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';
import './text-field.scss';

interface TextFieldOptionalProps {
  icon?: ReactNode;
}
interface TextFieldProps
  extends TextFieldOptionalProps,
    InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  placeHolder: string;
  label: string;
  type: string;
}

const defaultProps: TextFieldOptionalProps = {
  icon: '',
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField({ label, icon, type, placeHolder }, ref) {
    return (
      <div className="text-field">
        <label htmlFor={label}> {label} </label>
        <div
          className={cn(
            'text-field__wrapper',
            icon && 'text-field__wrapper--icon'
          )}
        >
          {icon}
          <input
            type={type}
            name={label}
            id={label}
            placeholder={placeHolder}
            ref={ref}
          />
        </div>
      </div>
    );
  }
);

TextField.defaultProps = defaultProps;

export default TextField;
