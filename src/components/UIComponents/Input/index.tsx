import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import FieldContainer from '../FieldContainer';

import './CustomInput.scss';

interface Props extends Partial<UseFormRegisterReturn> {
  id: string;
  label: string;
  placeholder?: string;
  type?: 'password' | 'text' | 'number';
}

const CustomInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { id, label, type = 'text', placeholder, ...rest } = props;

  return (
    <FieldContainer label={label} htmlFor={id}>
      <input
        className="custom-input"
        type={type}
        ref={ref}
        id={id}
        placeholder={placeholder}
        {...rest}
      />
    </FieldContainer>
  );
});

export default React.memo(CustomInput);
