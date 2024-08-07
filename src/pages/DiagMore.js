import React, { useEffect, useState } from 'react';
import image from '../assets/diag.png';
import image_people from '../assets/diag_people.png';
import Info from '../components/Info';
import '../styles/DiagSimple.css';
import NextBtn from '../components/NextBtn';
import { saveUserData } from '../api/InfoApi'; // API 함수 가져오기
import { useNavigate } from 'react-router-dom';

const DiagMore = () => {
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [brand, setBrand] = useState('');
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
        threshold: 0.1, // 요소가 10% 이상 보일 때 콜백 실행
      }
    );

    // 감시할 요소들 선택
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

  const handleNextClick = async () => {
    if (!gender || !height || !weight || !brand) {
      alert('성별, 키, 몸무게, 브랜드를 모두 입력해주세요.');
      return;
    }

    const userData = {
      gender,
      height: parseFloat(height),
      weight: parseFloat(weight),
      brand,
    };

    console.log('Sending user data:', userData); // 디버깅 로그 추가

    try {
      const message = await saveUserData(userData);
      console.log(message);
      navigate('/diagMore2');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
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
      <div className="info-container">
        <Info text1="성별" setValue={setGender} />
        <Info text1="키" setValue={setHeight} />
        <Info text1="몸무게" setValue={setWeight} />
        <Info text1="Brand" setValue={setBrand} />
      </div>
      <div className="diagsimple-title">
        <p className="diagsimple-title_text">정밀 진단</p>
        <div className="diagsimple-title_box"></div>
      </div>
      <p className="diagsimple-detail">기본 정보 입력</p>
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

export default DiagMore;
