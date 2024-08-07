import React from 'react';
import { CgSpinner } from 'react-icons/cg';
//import '../styles/Loading.css';

const Loading = ({}) => {
  return (
    <div className="upload-container">
      <div className="upload-box">
        <CgSpinner className="CgSpinner" />
      </div>
    </div>
  );
};

export default Loading;
