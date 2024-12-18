import React from 'react';
import './Result.css';

function Result({ bmi, category }) {
  return (
    <div className="result">
      <h3>BMI: {bmi}</h3>
      <p>Category: {category}</p>
    </div>
  );
}

export default Result;
  