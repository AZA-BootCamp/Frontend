import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ModalOption from './ModalOption';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const response = await fetch('http://127.0.0.1:8000/brands');
      const data = await response.json();
      setOptions(data);
    };

    if (isOpen) {
      fetchBrands();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const modalHeight = 150 + options.length * 55; // 기본 높이 + 옵션 개수에 따른 높이 조정

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ height: modalHeight }}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-search-bar">
          <FaSearch className="modal-search-icon" />
          <input type="text" className="modal-search-text" placeholder="Search ..." />
        </div>
        <div className="modal-line"></div>
        <div className="option-container">
          {options.map((option, index) => (
            <ModalOption key={index} text={option} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
