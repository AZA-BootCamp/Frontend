import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { IoIosClose, IoIosCheckmarkCircle } from 'react-icons/io';
import '../styles/FileState.css';

const FileState = ({ fileName, progress, onDelete }) => {
  const percentStyle = {
    width: `${progress}%`,
    backgroundColor: progress === 100 ? '#000000' : '#8b8b8b',
  };

  return (
    <div className="filestate-group">
      <p className="filestate-name">{fileName}</p>
      <div className="filestate-box3">
        <div className="max">
          <div className="percent" style={percentStyle}></div>
        </div>
      </div>
      {progress === 100 ? (
        <IoIosCheckmarkCircle className="filestate-check_icon" />
      ) : (
        <RiErrorWarningFill className="filestate-error_icon" />
      )}
      <IoIosClose className="filestate-close_icon" onClick={onDelete} />
    </div>
  );
};

export default FileState;
