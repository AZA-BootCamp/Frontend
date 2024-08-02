import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/PrevBtn.css';
import { FaArrowLeft } from 'react-icons/fa6';

const PrevBtn = ({ style1, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <button className="prev_btn" style={style1} onClick={handleClick}>
      <div className="prev_box">
        <div className="prev_arrow_box">
          <FaArrowLeft className="prev_arrow" />
        </div>
      </div>
    </button>
  );
};

export default PrevBtn;
