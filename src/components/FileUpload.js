import React, { useState } from 'react';
import { IoIosCamera } from 'react-icons/io';
import '../styles/FileUpload.css';

function FileUpload({ onFilesChange }) {
  const [files, setFiles] = useState([]);

  const handleFilesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    onFilesChange(selectedFiles);
  };

  const handleClick = () => {
    document.getElementById('file-upload').click();
  };

  const uploadFiles = (e) => {
    e.preventDefault();
    // 파일 업로드 로직 추가
  };

  return (
    <div className="photo-group">
      <IoIosCamera className="camera" onClick={handleClick} />
      <form onSubmit={uploadFiles}>
        <input
          className="file-input"
          type="file"
          multiple
          onChange={handleFilesChange}
          id="file-upload"
          style={{ display: 'none' }}
        />
        <label htmlFor="file-upload" className="choose-file_btn" onClick={handleClick}>
          <p className="choose-file_text">Choose Files</p>
        </label>
        {files.length > 0 && (
          <div className="file-names">
            {files.map((file, index) => (
              <p key={index} className="file-name">
                {file.name}
              </p>
            ))}
          </div>
        )}
        <button type="submit" className="upload-btn">
          <p className="upload_text">Upload</p>
        </button>
      </form>
      <div className="filename-line"></div>
    </div>
  );
}

export default FileUpload;
