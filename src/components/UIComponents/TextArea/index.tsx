import React from 'react';

import { UseFormRegisterReturn } from 'react-hook-form';

import FieldContainer from '../FieldContainer';

import './TextArea.scss';

interface Props extends Partial<UseFormRegisterReturn> {
  id: string;
  label: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
}

const CustomTextArea = React.forwardRef<HTMLTextAreaElement, Props>((props, ref) => {
  const { id, label, placeholder = '', rows = 10, maxLength = 150, onChange, ...rest } = props;

  const [value, setValue] = React.useState('');

  const handleValue = (value: string) => {
    setValue(value);
  };

  return (
    <FieldContainer htmlFor={id} label={label}>
      <textarea
        ref={ref}
        rows={rows}
        className="custom-textarea"
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        onChange={(event) => {
          onChange && onChange(event);
          handleValue(event.target.value);
        }}
        {...rest}
      />
      <span className="maxLength">
        {value.length} / {maxLength}
      </span>
    </FieldContainer>
  );
});

export default React.memo(CustomTextArea);
