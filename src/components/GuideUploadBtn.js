import React, { useState } from 'react';
import '../styles/GuideUploadBtn.css';
import '../styles/FileUpload.css';
import GuideModal from './GuideModal';

const GuideUploadBtn = ({ onFilesChange }) => {
  const [files, setFiles] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFilesChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    if (onFilesChange) {
      onFilesChange(selectedFiles);
    }
  };

  const handleClick = () => {
    document.getElementById('file-upload').click();
  };

  const uploadFiles = (e) => {
    e.preventDefault();
    // 파일 업로드 로직 추가
  };

  return (
    <div className="twoBtn-group">
      <div className="guideBtn-group">
        <button className="guideBtn-box" onClick={() => setModalOpen(true)}>
          <p className="guideBtn-text">Guide</p>
        </button>
      </div>
      <div className="uploadBtn-group">
        <button className="uploadBtn-box" onClick={handleClick}>
          <form onSubmit={uploadFiles}>
            <input
              className="file-input"
              type="file"
              multiple
              onChange={handleFilesChange}
              id="file-upload"
              style={{ display: 'none' }}
            />
            <p className="uploadBtn-text">Upload</p>
          </form>
        </button>
        <p className="twoBtn-text">전신이 다 나오도록, 정면과 양 측면 사진을 업로드 해주세요.</p>
        <GuideModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </div>
    </div>
  );
};

export default GuideUploadBtn;
