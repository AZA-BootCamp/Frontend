import React from 'react';
import image from '../assets/diag.png';
import image_people from '../assets/diag_people.png';
import Info from '../components/Info';

const DiagSimple = () => {
  return (
    <div className="group">
      <div className="content">
        <img src={image} alt="Background" className="group_5" />
        <div className="group_1">
          <div className="group_4"></div>
          <div className="group_2">
            <div className="group_3">
              <img src={image_people} alt="Background" className="group_6" />
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <Info />
      <Info />
      <Info />
      <Info />
    </div>
  );
};

export default DiagSimple;
