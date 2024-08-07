import React, { useState } from 'react';
import { IoCloudUpload } from 'react-icons/io5';
import '../styles/Upload.css';

const Upload = ({ text, onUpload }) => {
  const [isActive, setActive] = useState(false);
  const [files, setFiles] = useState([]);

  const handleDragStart = (e) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragEnd = (e) => {
    e.preventDefault();
    setActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setActive(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleFilesChange = (event) => {
    const files = Array.from(event.target.files);
    onUpload(files);
  };

  return (
    <div className="upload-container">
      <label
        className={`upload-group${isActive ? ' active' : ''}`}
        onDragEnter={handleDragStart}
        onDragOver={handleDragStart}
        onDragLeave={handleDragEnd}
        onDrop={handleDrop}
      >
        <div className="upload-box">
          <IoCloudUpload className="upload-icon" />
          <p className="upload-text">{text}</p>
          <input type="file" multiple onChange={handleFilesChange} style={{ display: 'none' }} />
        </div>
      </label>
      {files.length > 0 && (
        <div className="file-list">
          {files.map((file, index) => (
            <p key={index} className="file-name">
              {file.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Upload;
