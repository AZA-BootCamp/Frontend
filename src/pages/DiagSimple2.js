import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/diag.png';
import image_people from '../assets/diag_people.png';
import Info from '../components/Info';
import '../styles/DiagSimple2.css';
import PrevBtn from '../components/PrevBtn';
import { FaArrowRight } from 'react-icons/fa6';
import { FaHome } from 'react-icons/fa';

const DiagSimple2 = () => {
  const navigate = useNavigate();

  const goto_home = () => {
    navigate('/');
  };

  const goto_diagMore = () => {
    navigate('/diagMore');
  };

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
          style3={{ marginLeft: '40px' }}
          style4={{ marginLeft: '85px' }}
        />
        <Info
          text1="추천 의류"
          style={{ width: '222px', height: '50px' }}
          style3={{ marginLeft: '40px' }}
          style4={{ marginLeft: '85px' }}
        />
        <Info
          text1="추천 사이즈"
          style={{ width: '222px', height: '50px' }}
          style3={{ marginLeft: '40px' }}
          style4={{ marginLeft: '85px' }}
        />
      </div>
      <div className="diagsimple-title">
        <p className="diagsimple-title_text">간단 진단</p>
        <div className="diagsimple-title_box"></div>
      </div>
      <div className="show_body"></div>
      <div className="goto-home">
        <button className="goto-home_box" onClick={goto_home}>
          <FaHome className="home_icon" />
          <div className="goto-home_arrow_box">
            <FaArrowRight className="goto-home_arrow" />
          </div>
        </button>
      </div>
      <div className="goto-diagMore">
        <button className="goto-diagMore_box" onClick={goto_diagMore}>
          <div className="goto-diagMore_arrow_box">
            <FaArrowRight className="goto-diagMore_arrow" />
          </div>
          <p className="goto-diagMore_text">정밀 진단하러 가기</p>
        </button>
      </div>
      <p className="diagsimple-detail"></p>
      <PrevBtn style1={{ width: '75px', height: '47px', left: '313px', top: '695px' }} navigateTo="/diagSimple" />
    </div>
  );
};

export default DiagSimple2;
