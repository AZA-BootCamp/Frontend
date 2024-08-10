import React, { useEffect, useState } from 'react';
import image from '../assets/diag.png';
import image_people from '../assets/diag_people.png';
import '../styles/DiagSimple.css';
import NextBtn from '../components/NextBtn';
import PrevBtn from '../components/PrevBtn';
import Measurement from '../components/Measurement';
import Info from '../components/Info';
import { getMeasurementData } from '../api/GetMeasurementApi'; // 데이터를 가져오는 API 함수 임포트

const DiagMore3 = () => {
  const [measurements, setMeasurements] = useState(null);

  useEffect(() => {
    const fetchMeasurements = async () => {
      try {
        const data = await getMeasurementData(); // API 호출하여 측정 데이터를 가져옴
        setMeasurements(data); // 데이터를 상태에 저장
      } catch (error) {
        console.error('Error fetching measurements:', error);
      }
    };

    fetchMeasurements();

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

  if (!measurements) {
    return <div>Loading...</div>; // 데이터를 불러오는 동안 로딩 메시지 표시
  }

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
      <p className="diagsimple-detail">측정 결과</p>
      <div className="measurement-container1">
        <Measurement body="가슴 둘레" centimeter={measurements.chest_length.toFixed(2)} />
        <Measurement body="허리 둘레" centimeter={measurements.waist_length.toFixed(2)} />
        <Measurement body="엉덩이 둘레" centimeter={measurements.hip_length.toFixed(2)} />
      </div>
      <div className="measurement-container2">
        <Measurement body="팔 길이" centimeter={measurements.arm_length.toFixed(2)} />
        <Measurement body="어깨 길이" centimeter={measurements.shoulder_distance.toFixed(2)} />
        <Measurement body="아웃심" centimeter={measurements.outseam.toFixed(2)} />
        <Measurement body="인심" centimeter={measurements.inseam.toFixed(2)} />
      </div>
      <div className="show_body"></div>
      <div className="info-container" style={{ left: '1500px' }}>
        {/*<Info text1="남성" style2={{ width: '350px' }} />
        <Info text1="키" style2={{ width: '350px' }} />
        <Info text1="몸무게" style2={{ width: '350px' }} />
        <Info text1="BMI" style2={{ width: '350px' }} />*/}
      </div>
      <PrevBtn style1={{ width: '75px', height: '47px', left: '313px', top: '695px' }} navigateTo="/diagMore2" />
      <NextBtn
        style1={{
          width: '75px',
          height: '47px',
          left: '1563px',
          top: '695px',
        }}
        navigateTo="/diagMore4"
      />
    </div>
  );
};

export default DiagMore3;
