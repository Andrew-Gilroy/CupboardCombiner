import React from 'react';
import './FinalMealsDisplay.css';

function FinalMealsDisplay({result}) {

  return (
    <div className="FinalMealsDisplay">
      <h2>Your next meal will be:</h2>
      <p>{result}</p>
    </div>
  );
}

export default FinalMealsDisplay;
