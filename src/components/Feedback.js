import React from 'react';
import '../styles/FileState.css';

const Feedback = ({ label, nameStyle, percentage }) => {
  const percentStyle = {
    width: `${percentage}`,
    backgroundColor: '#000000',
  };

  return (
    <div className="filestate-group">
      <p className="filestate-name" style={nameStyle}>
        {label}
      </p>
      <div className="filestate-box3">
        <div className="max">
          <div className="percent" style={percentStyle}></div>
        </div>
      </div>
      <p className="filestate-percentage">{percentage}</p>
    </div>
  );
};

export default Feedback;
