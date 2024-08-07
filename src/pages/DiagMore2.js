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

const DiagMore2 = () => {
  const [files, setFiles] = useState([]);

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
      <Upload text="Drag files to upload" />
      <GuideUploadBtn />
      {/*<Loading /> 업로드 중
      <div className="fileState-container"> 파일 업로딩 상태
        <FileState fileName="file23456.png" progress="20" />
        <FileState fileName="file.png" progress="50" />
        <FileState fileName="file.png" progress="100" />
      </div>*/}
      {/*<Done /> 파일 업로드 완료*/}
      <PrevBtn style1={{ width: '75px', height: '47px', left: '313px', top: '695px' }} navigateTo="/diagMore" />
      <NextBtn
        style1={{
          width: '75px',
          height: '47px',
          left: '1563px',
          top: '695px',
        }}
        navigateTo="/diagMore3"
      />
    </div>
  );
};

export default DiagMore2;
