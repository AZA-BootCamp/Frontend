import React from 'react';
import '../styles/AZA.css';

const AZA = ({ style, style1, style2 }) => {
  return (
    <header>
      <div className="logo_box" style={style}>
        <div className="logo_round" style={style1}>
          <p className="logo_text" style={style2}>
            AZA
          </p>
        </div>
      </div>
    </header>
  );
};

export default AZA;
