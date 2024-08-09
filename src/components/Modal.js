import React, { useRef, useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ModalOption from './ModalOption';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, options, onSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const modalRef = useRef();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setSearchTerm(''); // 모달이 열리면 검색어 초기화
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const filteredOptions = options.filter((option) => option.toLowerCase().includes(searchTerm.toLowerCase()));

  const modalHeight = 50 + filteredOptions.length * 55; // 기본 높이 + 옵션 개수에 따른 높이 조정

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ height: modalHeight }} ref={modalRef}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-search-bar">
          <FaSearch className="modal-search-icon" />
          <input
            type="text"
            className="modal-search-text"
            placeholder="Search ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="modal-line"></div>
        <div className="option-container">
          {filteredOptions.map((option, index) => (
            <div key={index} onClick={() => onSelect(option)}>
              <ModalOption text={option} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
