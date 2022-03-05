import React from 'react';

import { Button, ButtonProps } from 'rsuite';

import './Button.scss';

interface Props {
  label: string;
  onClick?: () => void;
  color?: ButtonProps['color'];
  type?: ButtonProps['type'];
  appearance?: ButtonProps['appearance'];
}

const CustomButton = (props: Props) => {
  const { label, color, type = 'button', appearance = 'primary', onClick } = props;

  return (
    <Button
      type={type}
      onClick={onClick}
      color={color}
      className="customButton"
      appearance={appearance}
    >
      {label}
    </Button>
  );
};

export default React.memo(CustomButton);
