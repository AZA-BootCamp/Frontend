// Header.js
import React from 'react';
import '../styles/Header.css';
import AZA from './AZA';
import Menu from './Menu';

const Header = () => {
  return (
    <header>
      <AZA
        style={{ position: 'absolute', width: '137px', height: '60px', left: '300px', top: '22px' }}
        style1={{ width: '137px', height: '57px', borderRadius: '120%' }}
        style2={{ fontSize: '32px', lineHeight: '40px' }}
      />
      <Menu showLogin={true} />
    </header>
  );
};

export default Header;
