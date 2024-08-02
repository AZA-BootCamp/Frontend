// Footer.js
import React from 'react';
import '../styles/Footer.css';
import AZA from './AZA';
import Menu from './Menu';

const Footer = () => {
  return (
    <footer>
      <AZA
        style={{ position: 'absolute', width: '137px', height: '137px', left: '300px', top: '25px' }}
        style1={{ width: '137px', height: '57px', borderRadius: '120%' }}
        style2={{ fontSize: '32px', lineHeight: '40px' }}
      />
      <Menu showLogin={false} />
    </footer>
  );
};

export default Footer;
