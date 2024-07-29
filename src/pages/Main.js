import React from 'react';
import image from '../assets/main.png';
import '../styles/Main.css';
import Footer from '../components/Footer';
import DiagBtn from '../components/DiagBtn';
import AZA from '../components/AZA';

const Main = () => {
  return (
    <div>
      <img src={image} alt="Background" className="background_img" />
      <div className="textBox1">
        <p className="text1">AI 기반 맞춤형 의류 추천 서비스</p>
      </div>
      <div className="textBox2">
        <p className="text2_1">A 아름답고</p>
        <p className="text2_2">Z 자연스러운</p>
        <p className="text2_3">A 아웃핏</p>
      </div>
      <div className="buttons-container">
        <DiagBtn text1="간단 진단하기" text2="키, 몸무게만으로" className="simple_box" />
        <DiagBtn text1="정밀 진단하기" text2="사진으로" className="more_box" />
      </div>
      <AZA
        style={{ position: 'absolute', width: '411px', height: '150px', left: '386px', top: '1191px' }}
        style1={{ width: '300px', height: '150px', borderRadius: '70%' }}
        style2={{ fontSize: '64px', lineHeight: '80px' }}
      />
      <Footer />
    </div>
  );
};

export default Main;
