import React from 'react';
import { Logo } from '../../assets/iconComponents';
import './Header.scss';

type Props = {};

const Header = (props: Props) => {
  const {} = props;
  return (
    <header className="header">
      <div className="content-wrapper">
        <div className="logo-box">
          <Logo />
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
