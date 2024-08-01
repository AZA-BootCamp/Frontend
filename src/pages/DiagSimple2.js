import React, { useEffect } from 'react';
import image from '../assets/diag.png';
import image_people from '../assets/diag_people.png';
import Info from '../components/Info';
import '../styles/DiagSimple2.css';
import NextBtn from '../components/NextBtn';
import { FaArrowRight } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';

const DiagSimple2 = () => {
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
        <Info
          text1="추천 브랜드"
          style={{ width: '222px', height: '50px' }}
          style2={{ width: '440px', height: '50px' }}
        />
        <Info text1="추천 의류" style={{ width: '222px', height: '50px' }} />
        <Info text1="추천 사이즈" style={{ width: '222px', height: '50px' }} />
      </div>
      <div className="diagsimple-title">
        <p className="diagsimple-title_text">간단 진단</p>
        <div className="diagsimple-title_box"></div>
      </div>
      <div className="show_body"></div>
      <div className="goto-home">
        <div className="goto-home_box">
          <FaHome className="home_icon" />
          <div className="goto-home_arrow_box">
            <FaArrowRight className="goto-home_arrow" />
          </div>
        </div>
      </div>
      <p className="diagsimple-detail"></p>
      <NextBtn style1={{ width: '75px', height: '47px', left: '1563px', top: '775px' }} navigateTo="/diagSimple2" />
    </div>
  );
};

export default DiagSimple2;
