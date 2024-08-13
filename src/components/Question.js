import React from "react";
import "../styles/Question.css";

//containerq에 대한 요소들 적용 코드를 aboutAZA.css파일에 작성해야함
const Question = ({ text }) => {
  return (
    <div className="qbox">
      <p className="qtext">{text}</p>
    </div>
  );
};

export default Question;
