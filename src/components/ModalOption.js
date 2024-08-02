import React from 'react';
import '../styles/ModalOption.css';

const ModalOption = ({ text }) => {
  return (
    <div className="option">
      <div className="option_box">
        <p className="option_text">{text}</p>
      </div>
    </div>
  );
};

export default ModalOption;
