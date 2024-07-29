import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DiagBtn.css';
import { FaArrowRight } from 'react-icons/fa6';

const DiagBtn = ({ text1, text2, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <div className="group">
      <div className="rectangle-outer">
        <p className="key-weight">{text2}</p>
      </div>
      <button className="rectangle-inner" onClick={handleClick}>
        <p className="simple-diagnosis">{text1}</p>
        <FaArrowRight className="arrow" />
      </button>
    </div>
  );
};

export default DiagBtn;
