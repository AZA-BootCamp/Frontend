// Footer.js
import React from 'react';
import '../styles/Measurement.css';

const Measurement = ({ body, centimeter }) => {
  return (
    <div className="measurement-group">
      <div className="name-box">
        <p className="name_text">{body}</p>
      </div>
      <p className="measurement-count">{centimeter}</p>
      <p className="measurement-cm">cm</p>
      <div className="measurement-line"></div>
    </div>
  );
};

export default Measurement;
