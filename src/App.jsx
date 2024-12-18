import React, { useState, useRef } from 'react';
import Input from './components/Input';
import Result from './components/Result';

import { calculateBMI, getBMICategory } from './utils/CalculateBMI';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const weightInputRef = useRef(null);

  const handleCalculateBMI = () => {
    if (weight > 0 && height > 0) {
      const bmiValue = calculateBMI(weight, height);
      setBmi(bmiValue);
      setCategory(getBMICategory(bmiValue));
      setWeight('');
      setHeight('');

      weightInputRef.current.focus();
    } else {
      setBmi(null);
      setCategory('');
      alert('Enter only positive numbers!');
    }
  };

  return (
    <div
      className={`bmi-calculator ${category.toLowerCase().replace(/\s+/g, '')}`}
    >
      <h2>Body Mass Index (BMI) Calculator</h2>

      <Input
        weight={weight}
        setWeight={setWeight}
        height={height}
        setHeight={setHeight}
        onCalculate={handleCalculateBMI}
        weightRef={weightInputRef}
      />

      <Result bmi={bmi} category={category} />
    </div>
  );
}

export default App;
