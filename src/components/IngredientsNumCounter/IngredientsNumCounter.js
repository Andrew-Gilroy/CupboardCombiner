import React from 'react';
import './IngredientsNumCounter.css';

function IngredientsNumCounter({finalResultsHandler, handleIncrement, handleDecrement, counter, radius, stroke, progress, circleStroke}) {
  
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;

  return <div className="IngredientsNumCounter">
    <h2>How many ingredients would you like to use?</h2>
      <div className="buttons-wrapper">
        <button id="removeIngredientsButton" onClick={handleDecrement} >-</button>
        <svg height={radius * 2} width={radius * 2}>
          <circle
              stroke={circleStroke}
              fill="transparent"
              strokeWidth={ stroke }
              strokeDasharray={ circumference + ' ' + circumference }
              style={ { strokeDashoffset } }
              r={ normalizedRadius }
              cx={ radius }
              cy={ radius }
              id="numCircle"
          />
          <text x="50%" y="42%" textAnchor="middle"
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

