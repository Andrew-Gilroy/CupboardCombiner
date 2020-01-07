import React from 'react';
import './IngredientsNumCounter.css';

function IngredientsNumCounter({finalResultsHandler, handleIncrement, handleDecrement, counter}) {
  
  return <div className="IngredientsNumCounter">
    <h2>How many ingredients would you like to use?</h2>
      <div className="buttons-wrapper">
      <button id="removeIngredientsButton" onClick={handleDecrement} >-</button>
      <p id="ingredientsNumCounterDisplay">{counter}</p>
      <button id="addIngredientsButton" onClick={handleIncrement}>+</button>
      </div>
    <button type="submit" id="submitTotalIngredientsButton" onClick={finalResultsHandler}>SUBMIT</button>
  </div>

};
export default IngredientsNumCounter;

//{finalResultsHandler} is how i pass in props with functional components!!!

