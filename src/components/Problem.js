import React from 'react';
import '../styles/Problem.css';

const Problem = ({ text }) => {
  return (
    <div className="problem_box">
      <div className="problem_box_round">
        <p className="problem_text">{text}</p>
      </div>
    </div>
  );
};

export default Problem;
