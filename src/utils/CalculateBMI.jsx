export const calculateBMI = (weight, height) => {
  if (weight > 0 && height > 0) {
    return (weight / (height / 100) ** 2).toFixed(2);
  }
  return null;
};

export const getBMICategory = (bmiValue) => {
  if (!bmiValue) return '';
  if (bmiValue < 18.5) return 'Underweight';
  if (bmiValue >= 18.5 && bmiValue < 24.9) return 'Normal weight';
  if (bmiValue >= 25 && bmiValue < 29.9) return 'Overweight';
  return 'Obesity';
};
