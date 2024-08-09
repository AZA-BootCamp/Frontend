import React, { useState } from 'react';
import '../styles/CategoryBtn.css';

const LongShirtBtn = ({ onCategorySelect }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    onCategorySelect('긴팔'); // '반팔' 카테고리 정보를 부모에게 전달
  };

  return (
    <div className="category-btn_group">
      <button
        className="category-btn_box"
        style={{
          position: 'relative',
          width: '139px',
          height: '50px',
          left: '0px',
          top: '0px',
          background: isClicked ? '#000000' : '#FFFFFF', // 클릭 시 배경색 변경
          borderRadius: '40px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={handleClick} // 클릭 시 상태 업데이트
      >
        <p
          className="category-btn_text"
          style={{ color: isClicked ? '#FFFFFF' : '#000000' }} // 클릭 시 텍스트 색 변경
        >
          긴팔
        </p>
      </button>
    </div>
  );
};

export default LongShirtBtn;
