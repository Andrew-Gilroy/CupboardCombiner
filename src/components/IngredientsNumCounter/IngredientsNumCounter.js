import React from 'react';
import './IngredientsNumCounter.css';

function IngredientsNumCounter({finalResultsHandler, handleIncrement, handleDecrement, counter, circleStrokeColor}) {

  const radius = 160;
  const stroke = 20;
  const progress = counter * 20;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;
  
  return <div className="IngredientsNumCounter">
    <h2>Select total number of ingredients</h2>
      <div className="buttons-wrapper">
        <button id="removeIngredientsButton" onClick={handleDecrement} >-</button>
        
        <svg>
          <circle
              stroke={circleStrokeColor}
              fill="transparent"
              strokeWidth={ stroke }
              strokeDasharray={ circumference + ' ' + circumference }
              style={ { strokeDashoffset } }
              r={ normalizedRadius }
              cx={ "50%" }
              cy={ "50%" }
              id="numCircle"
          />
          <text x="50%" y="32%" textAnchor="middle"
              id="ingredientsNumCounterDisplay" fill="#fff"
              dy=".3em" 
              alignmentBaseline="middle"
          >
          {counter}
          </text>
        </svg>
        
        <button id="addIngredientsButton" onClick={handleIncrement}>+</button>
      </div>
    <button type="submit" id="submitTotalIngredientsButton" onClick={finalResultsHandler}>SUBMIT</button>
  </div>
};

export default IngredientsNumCounter;

//{finalResultsHandler} is how i pass in props with functional components!!!

