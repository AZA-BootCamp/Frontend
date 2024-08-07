import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/Info.css';
import Modal from './Modal';
import { fetchBrands } from '../api/InfoApi'; // API 함수 가져오기

const Info = ({ text1, style, style2, style3, style4, setValue }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const loadBrands = async () => {
      const brands = await fetchBrands();
      setOptions(brands);
    };

    loadBrands();
  }, []);

  useEffect(() => {
    if (text1 === '성별') setValue(selectedGender);
    if (text1 === '키') setValue(height);
    if (text1 === '몸무게') setValue(weight);
    if (text1 === 'Brand') setValue(selectedBrand);
  }, [selectedGender, height, weight, selectedBrand, text1, setValue]);

  const handleSelectBrand = (brand) => {
    setSelectedBrand(brand);
    setModalOpen(false);
  };

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };

  const renderContent = () => {
    switch (text1) {
      case '성별':
        return (
          <div className="info-buttons">
            <button
              className={` ${selectedGender === '남성' ? 'info-button-select' : 'info-button'}`}
              onClick={() => handleGenderClick('남성')}
            >
              남성
            </button>
            <button
              className={` ${selectedGender === '여성' ? 'info-button-select' : 'info-button'}`}
              onClick={() => handleGenderClick('여성')}
            >
              여성
            </button>
          </div>
        );
      case '키':
        return (
          <div className="info-units">
            <input
              type="number"
              className="info-input"
              placeholder="키"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <span className="info-unit">cm</span>
          </div>
        );
      case '몸무게':
        return (
          <div className="info-units">
            <input
              type="number"
              className="info-input"
              placeholder="몸무게"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
            <span className="info-unit">kg</span>
          </div>
        );
      case 'Brand':
        return (
          <div className="info-units">
            <input type="text" className="info-input" placeholder="Brand" value={selectedBrand} readOnly />
            <FaSearch className="info-icon" onClick={() => setModalOpen(true)} />
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
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} options={options} onSelect={handleSelectBrand} />
    </div>
  );
};

export default Info;
