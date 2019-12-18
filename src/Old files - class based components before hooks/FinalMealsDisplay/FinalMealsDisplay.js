import React from 'react';
import './FinalMealsDisplay.css';

function FinalMealsDisplay(props) {

  return (
  <div className="FinalMealsDisplay-Wrapper">
    <div className="FinalMealsDisplay">
      <p>{props.result}</p>
    </div>
  </div>
  );
}

export default FinalMealsDisplay;