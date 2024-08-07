import React, { useEffect, useState } from 'react';
import image from '../assets/diag.png';
import image_people from '../assets/diag_people.png';
import '../styles/DiagSimple.css';
import NextBtn from '../components/NextBtn';
import PrevBtn from '../components/PrevBtn';
import Upload from '../components/Upload';
import GuideUploadBtn from '../components/GuideUploadBtn';
import Loading from '../components/Loading';
import FileState from '../components/FileState';
import Done from '../components/Done';
import { uploadFiles, listFiles, deleteFile } from '../api/UploadApi';
import { useNavigate } from 'react-router';

const DiagMore2 = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState([]);
  const [uploadComplete, setUploadComplete] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.fade-element');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const handleFileUpload = async (uploadedFiles) => {
    setFiles(uploadedFiles);
    setUploading(true);

    try {
      await uploadFiles(uploadedFiles);
      setUploadProgress(uploadedFiles.map(() => 100));
      setUploadComplete(true);
      setUploading(false);
      const files = await listFiles();
      setUploadedFiles(files);
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  const handleFileDelete = async (fileName) => {
    try {
      await deleteFile(fileName);
      const files = await listFiles();
      setUploadedFiles(files);
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  const handleNextClick = async () => {
    navigate('/diagMore3');
  };

  return (
    <div className="diagsimple-group fade-element">
      <div className="content fade-element">
        <img src={image} alt="Background" className="diagsimple-group_5" />
        <div className="diagsimple-group_1">
          <div className="diagsmple-group_4"></div>
          <div className="diagsimple-group_2">
            <div className="diagsimple-group_3">
              <img src={image_people} alt="People" className="diagsimple-group_6" />
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="diagsimple-title">
        <p className="diagsimple-title_text">정밀 진단</p>
        <div className="diagsimple-title_box"></div>
      </div>
      <p className="diagsimple-detail">Photo Upload</p>
      {!uploading && !uploadComplete && (
        <>
          <Upload text="Drag files to upload" onUpload={handleFileUpload} />
          <GuideUploadBtn />
        </>
      )}
      {uploading && (
        <>
          <Loading />
          <div className="fileState-container">
            {files.map((file, index) => (
              <FileState
                key={index}
                fileName={file.name}
                progress={uploadProgress[index] || 0}
                onDelete={() => handleFileDelete(file.name)}
              />
            ))}
          </div>
        </>
      )}
      {uploadComplete && (
        <>
          <Done />
          <div className="fileState-container">
            {files.map((file, index) => (
              <FileState
                key={index}
                fileName={file.name}
                progress={uploadProgress[index] || 0}
                onDelete={() => handleFileDelete(file.name)}
              />
            ))}
          </div>
        </>
      )}
      <PrevBtn style1={{ width: '75px', height: '47px', left: '313px', top: '695px' }} navigateTo="/diagMore" />
      <NextBtn
        style1={{
          width: '75px',
          height: '47px',
          left: '1563px',
          top: '695px',
        }}
        onClick={handleNextClick}
      />
    </div>
  );
};

export default DiagMore2;
