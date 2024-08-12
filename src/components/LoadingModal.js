import React, { useRef, useEffect } from 'react';
import { CgSpinner } from 'react-icons/cg';
import '../styles/LoadingModal.css';

const LoadingModal = ({ isOpen, onClose }) => {
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
    <div className="loadingModal-overlay">
      <div className="loadingModal-group" ref={modalRef}>
        <div className="loadingUpload-box">
          <p className="loadingModal-modal_name">Loading...</p>
          <p className="loadingModal-modal_text">잠시만 기다려주세요</p>
          <CgSpinner className="loading-CgSpinner" />
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
