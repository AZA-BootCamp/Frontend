import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/NextBtn.css';
import { FaArrowRight } from 'react-icons/fa6';

const NextBtn = ({ style1, onClick, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button className="next_btn" style={style1} onClick={handleClick}>
      <div className="next_box">
        <div className="next_arrow_box">
          <FaArrowRight className="next_arrow" />
        </div>
      </div>
    </button>
  );
};

export default NextBtn;
