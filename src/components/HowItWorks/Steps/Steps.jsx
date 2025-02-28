import React from 'react';

const Step = ({ title, text }) => {
  return (
    <div className="step">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>
  );
};

export default Step;
