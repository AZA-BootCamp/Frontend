import React from 'react';
import FileState from './Feedback';

const FeedbackDisplay = ({ feedbackData }) => {
  return (
    <div>
      {Object.entries(feedbackData).map(([label, percentage], index) => (
        <FileState key={index} label={label} nameStyle={{ width: '100px' }} percentage={percentage} />
      ))}
    </div>
  );
};

export default FeedbackDisplay;
