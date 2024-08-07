import React, { useRef, useEffect } from 'react';
import '../styles/GuideModal.css';
import { IoIosClose } from 'react-icons/io';
import ImageSlider from './ImageSlider';
import image1 from '../assets/3111M_BD_A.A000-H000.png';
import image2 from '../assets/3111M_BD_A.A000-H090.png';
import image3 from '../assets/3111M_BD_A.A000-H270.png';

const GuideModal = ({ isOpen, onClose }) => {
  const images = [image1, image2, image3];
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

  if (!isOpen) return null;

  return (
    <div className="guideModal-overlay">
      <div className="guideModal-group" ref={modalRef}>
        <IoIosClose className="guideModal-close_icon" onClick={onClose} />
        <p className="guideModal-modal_name">Photo Guide</p>
        <p className="guideModal-modal_text">T자로 서있는 정면, 양 측면의 사진이 필요해요.</p>
        <ImageSlider images={images} interval={2000} />
      </div>
    </div>
  );
};

export default GuideModal;
