import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Container = (props: Props) => {
  const { children } = props;
  return <div className="container">{children}</div>;
};

export default React.memo(Container);
