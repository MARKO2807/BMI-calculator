import React from 'react';
import './Input.css';

function Input({
  weight,
  setWeight,
  height,
  setHeight,
  onCalculate,
  weightRef,
}) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      onCalculate();
    }
  };

  return (
    <div className="input-container">
      <div className="input-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight in kilograms"
          onKeyDown={handleKeyPress}
          autoFocus
          ref={weightRef}
          required
        />
      </div>

      <div className="input-group">
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height in centimeters"
          onKeyDown={handleKeyPress}
          required
        />
      </div>

      <button onClick={onCalculate}>Calculate BMI</button>
    </div>
  );
}

export default Input;
