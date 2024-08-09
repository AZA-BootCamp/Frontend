import React, { useEffect, useState } from 'react';
import image from '../assets/diag.png';
import image_people from '../assets/diag_people.png';
import Info from '../components/Info';
import '../styles/DiagSimple.css';
import NextBtn from '../components/NextBtn';
import { saveUserData, fetchAvailableCategories } from '../api/InfoApi';
import { useNavigate } from 'react-router-dom';
import ShortShirtBtn from '../components/ShortShirtBtn';
import LongShirtBtn from '../components/LongShirtBtn';
import PantsBtn from '../components/PantsBtn';

const DiagMore = () => {
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [brand, setBrand] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
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

  useEffect(() => {
    if (gender && brand) {
      const fetchCategories = async () => {
        try {
          const feedback = await fetchAvailableCategories(gender, brand);
          setCategories(feedback);
        } catch (error) {
          console.error('Error fetching brand feedback:', error);
          setCategories([]);
        }
      };
      fetchCategories();
    } else {
      setCategories([]);
    }
  }, [gender, brand]);

  const handleNextClick = async () => {
    if (!gender || !height || !weight || !brand || !selectedCategory) {
      alert('성별, 키, 몸무게, 브랜드 및 카테고리를 모두 입력해주세요.');
      return;
    }

    const userData = {
      gender,
      height: parseFloat(height),
      weight: parseFloat(weight),
      brand,
      category: selectedCategory, // 선택된 카테고리 추가
    };

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
      {categories.length > 0 && (
        <div className="Ncategory-btn_box">
          {categories.includes('반팔') && <ShortShirtBtn onCategorySelect={setSelectedCategory} />}
          {categories.includes('긴팔') && <LongShirtBtn onCategorySelect={setSelectedCategory} />}
          {categories.includes('바지') && <PantsBtn onCategorySelect={setSelectedCategory} />}
        </div>
      )}
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
