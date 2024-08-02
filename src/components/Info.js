import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../styles/Info.css';

const Info = ({ text1, style, style2, style3, style4, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  const renderContent = () => {
    switch (text1) {
      case '성별':
        return (
          <div className="info-buttons">
            <button className="info-button">남성</button>
            <button className="info-button">여성</button>
          </div>
        );
      case '키':
        return (
          <div className="info-units">
            <input type="number" className="info-input" placeholder="키" />
            <span className="info-unit">cm</span>
          </div>
        );
      case '몸무게':
        return (
          <div className="info-units">
            <input type="number" className="info-input" placeholder="몸무게" />
            <span className="info-unit">kg</span>
          </div>
        );
      case 'Brand':
        return (
          <div className="info-units">
            <input type="text" className="info-input" placeholder="Brand" />
            <FaSearch className="info-icon" />
          </div>
        );
      default:
        return (
          <div className="info-units">
            <span className="info-unit" style={style4}>
              {text1}
            </span>
          </div>
        );
    }
  };

  return (
    <div className="info-group">
      <div className="info-group1">
        <p className="category" style={style3}>
          {text1}
        </p>
        <div className="info-rectangle-outer" style={style}></div>
        <div className="info-rectangle-inner" style={style2}>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Info;
