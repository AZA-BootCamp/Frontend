import React from 'react';
import '../styles/DiagBtn.css';
import { FaArrowRight } from 'react-icons/fa6';

const DiagBtn = ({ text1, text2 }) => {
  return (
    <div className="group">
      <div className="rectangle-outer">
        <p className="key-weight">{text2}</p>
      </div>
      <button className="rectangle-inner">
        <p className="simple-diagnosis">{text1}</p>
        <FaArrowRight className="arrow" />
      </button>
    </div>
  );
};

export default DiagBtn;
