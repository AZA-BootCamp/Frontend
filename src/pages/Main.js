import React, { useEffect } from 'react';
import image from '../assets/main.png';
import '../styles/Main.css';
import Footer from '../components/Footer';
import DiagBtn from '../components/DiagBtn';
import AZA from '../components/AZA';
import Problem from '../components/Problem';
import { FaArrowDown } from 'react-icons/fa';

const Main = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('fade-out');
            entry.target.classList.add('fade-in');
          } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
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

  return (
    <div>
      <img src={image} alt="Background" className="background_img fade-element" />
      <div className="textBox1 fade-element">
        <p className="text1">AI 기반 맞춤형 의류 추천 서비스</p>
      </div>
      <div className="textBox2 fade-element">
        <p className="text2_1">A 아름답고</p>
        <p className="text2_2">Z 자연스러운</p>
        <p className="text2_3">A 아웃핏</p>
      </div>
      <div className="buttons-container fade-element">
        <DiagBtn text1="간단 진단하기" text2="키, 몸무게만으로" navigateTo="/diagSimple" />
        <DiagBtn text1="정밀 진단하기" text2="사진으로" navigateTo="/diagMore" />
      </div>
      <div className="fade-element">
        <AZA
          style={{ position: 'absolute', width: '411px', height: '150px', left: '386px', top: '181px' }}
          style1={{ width: '300px', height: '150px', borderRadius: '70%' }}
          style2={{ fontSize: '64px', lineHeight: '80px' }}
        />
      </div>
      <div className="problem-container fade-element">
        <Problem text={`해외 의류\n사이즈 불일치\n문제`} />
        <Problem text={`한국인 체형과\n맞지 않는\n핏감`} />
        <Problem text={`번거로운\n반품과 교환\n과정`} />
        <FaArrowDown className="solve_arrow" />
        <div className="solve_box">
          <p className="solve_text">쉬운 신체 사이즈 측정 및 해외 의류 추천</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
