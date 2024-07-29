import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AZA.css';

const AZA = ({ style, style1, style2 }) => {
  const navigate = useNavigate();

  const goto_Home = () => {
    navigate('/');
  };

  return (
    <div className="logo_box" style={style}>
      <button className="logo_round" style={style1} onClick={goto_Home}>
        <p className="logo_text" style={style2}>
          AZA
        </p>
      </button>
    </div>
  );
};

export default AZA;
