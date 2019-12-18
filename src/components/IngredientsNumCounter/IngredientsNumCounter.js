import React from 'react';
import './IngredientsNumCounter.css';

//import React, { useState } ---- useState is required to enable hooks stateful components
//{finalResultsHandler} is how i pass in props with functional components!!!
function IngredientsNumCounter({finalResultsHandler, handleIncrement, handleDecrement, counter}) {
  
  //Hooks state
  //const [counter, updateCounter] = useState(1);
  //const handleIncrement = () => { if(counter <= 4)updateCounter(counter + 1); else(alert("5 ingredients maximum"))};
  //const handleDecrement = () => { if(counter >= 2)updateCounter(counter - 1); };

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


