import React from 'react';
import './FieldContainer.scss';

interface Props {
  htmlFor: string;
  label: string;
  children: React.ReactNode;
}

const FieldContainer = (props: Props) => {
  const { htmlFor, label, children } = props;
  return (
    <div className="input-container">
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
  );
};

export default React.memo(FieldContainer);
