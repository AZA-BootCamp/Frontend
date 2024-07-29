import React from 'react';
import '../styles/Header.css';
import AZA from './AZA';
import Menu from './Menu';
import { BiFontSize } from 'react-icons/bi';

const Header = () => {
  return (
    <header>
      <AZA
        style={{ position: 'absolute', width: '137px', height: '137px', left: '300px', top: '82px' }}
        style1={{ width: '137px', height: '57px', borderRadius: '120%' }}
        style2={{ fontSize: '32px', lineHeight: '40px' }}
      />
      <Menu />
    </header>
  );
};

export default Header;
