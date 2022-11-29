import React, { useEffect } from 'react';
import './IngredientsNumCounter.css';

function IngredientsNumCounter({items, theme, counter, updateCounter, updateCircleStroke, circleStrokeColor, updateResult, updateUrlArray}) {

    //handles increment/decrement onclicks from IngredientsNumCounter
  const handleIncrement = () => { 
    if(counter <= 4) { updateCounter(counter + 1); } 
    else(alert("5 ingredients maximum"));
  };

  const handleDecrement = () => { 
    if(counter >= 2) { updateCounter(counter - 1); }
  };

  // monitors counter state value - updates numCounter circle stroke color as the value increases
  useEffect(() => {
    if (theme === "default") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(015,145,165, 1)"); break;
        case 2: updateCircleStroke("RGBA(035,165,185, 1)"); break;
        case 3: updateCircleStroke("RGBA(055,185,205, 1)"); break;
        case 4: updateCircleStroke("RGBA(075,205,225, 1)"); break;
        case 5: updateCircleStroke("RGBA(097,221,255, 1)"); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }
  },[theme, counter]);

  useEffect(() => {
    if (theme === "dark") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(105,105,105,0.2)"); break;
        case 2: updateCircleStroke("RGBA(125,125,125,0.4)"); break;
        case 3: updateCircleStroke("RGBA(165,165,165,0.6)"); break;
        case 4: updateCircleStroke("RGBA(205,205,205,0.7)"); break;
        case 5: updateCircleStroke("RGBA(255,255,255,1)"); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }
  },[theme, counter]);
  
  useEffect(() => {
    if (theme === "light") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(149,094,171, 1)"); break;
        case 2: updateCircleStroke("RGBA(159,104,181, 1)"); break;
        case 3: updateCircleStroke("RGBA(169,114,191, 1)"); break;
        case 4: updateCircleStroke("RGBA(189,124,211, 1)"); break;
        case 5: updateCircleStroke("RGBA(229,134,231, 1)"); break;
        default: updateCircleStroke("RGBA(255,000, 0, 0.29)"); break;      
      }
    }
  },[theme, counter]);
  
  useEffect(() => {
    if (theme === "red") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(165,035,035,0.4)"); break;
        case 2: updateCircleStroke("RGBA(185,035,035,0.6)"); break;
        case 3: updateCircleStroke("RGBA(205,035,035,0.8)"); break;
        case 4: updateCircleStroke("RGBA(225,035,035,0.9)"); break;
        case 5: updateCircleStroke("RGBA(245,035,035,1.0)"); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }
  },[theme, counter]);
  
  useEffect(() => {
    if (theme === "green") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(005,205,005,0.2)"); break;
        case 2: updateCircleStroke("RGBA(025,205,025,0.4)"); break;
        case 3: updateCircleStroke("RGBA(045,205,045,0.6)"); break;
        case 4: updateCircleStroke("RGBA(065,205,065,0.7)"); break;
        case 5: updateCircleStroke("RGBA(085,205,085,1.0)"); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }
  },[theme, counter]);

  useEffect(() => {
    if (theme === "blue") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(15, 104, 252, 0.2)"); break;
        case 2: updateCircleStroke("RGBA(25, 124, 252, 0.4)"); break;
        case 3: updateCircleStroke("RGBA(45, 144, 252, 0.6)"); break;
        case 4: updateCircleStroke("RGBA(65, 164, 252, 0.7)"); break;
        case 5: updateCircleStroke("RGBA(95, 194, 252, 1.0)"); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }      
  },[theme, counter]);
  
  useEffect(() => {
    if (theme === "yellow") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(235, 220, 013, 0.2)"); break;
        case 2: updateCircleStroke("RGBA(235, 220, 013, 0.4)"); break;
        case 3: updateCircleStroke("RGBA(235, 220, 013, 0.6)"); break;
        case 4: updateCircleStroke("RGBA(235, 220, 013, 0.7)"); break;
        case 5: updateCircleStroke("RGBA(235, 220, 013, 1.0)"); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }
  },[theme, counter]);
  
  useEffect(() => {
    if (theme === "purple") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(191, 0, 255, 0.2)"); break;
        case 2: updateCircleStroke("RGBA(191, 0, 255, 0.4)"); break;
        case 3: updateCircleStroke("RGBA(191, 0, 255, 0.6)"); break;
        case 4: updateCircleStroke("RGBA(191, 0, 255, 0.7)"); break;
        case 5: updateCircleStroke('RGBA(191, 0, 255, 1)'); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }
  },[theme, counter]);
  useEffect(() => {
    if (theme === "orange") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(230, 92, 0, 0.2)"); break;
        case 2: updateCircleStroke("RGBA(230, 92, 0, 0.4)"); break;
        case 3: updateCircleStroke("RGBA(230, 92, 0, 0.6)"); break;
        case 4: updateCircleStroke("RGBA(230, 92, 0, 0.7)"); break;
        case 5: updateCircleStroke('RGBA(230, 92, 0, 1)'); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }
  },[theme, counter]);
  useEffect(() => {
    if (theme === "pink") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(191, 0, 255, 0.2)"); break;
        case 2: updateCircleStroke("RGBA(191, 0, 255, 0.4)"); break;
        case 3: updateCircleStroke("RGBA(191, 0, 255, 0.6)"); break;
        case 4: updateCircleStroke("RGBA(191, 0, 255, 0.7)"); break;
        case 5: updateCircleStroke('RGBA(191, 0, 255, 1)'); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }
  },[theme, counter]);
  useEffect(() => {
    if (theme === "random") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(255, 255, 255, 0.2)"); break;
        case 2: updateCircleStroke("RGBA(255, 255, 255, 0.4)"); break;
        case 3: updateCircleStroke("RGBA(255, 255, 255, 0.6)"); break;
        case 4: updateCircleStroke("RGBA(255, 255, 255, 0.7)"); break;
        case 5: updateCircleStroke('RGBA(255, 255, 255, 1)'); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }
  },[theme, counter]);


  //FINAL RESULTS HANDLER
  //Returns random final results based on number of ingredients selected  
  const finalResultsHandler = () => {

    const copyArray = [...items];
    const nameArray = [];
    console.log(copyArray);
    const urlArray = [];

    copyArray.sort(() => 0.5 - Math.random()); //shuffled at beginning

    copyArray.forEach((element) => {
      nameArray.push(element.name);
      urlArray.push(element.url);
      updateUrlArray(urlArray);
      // extracts names from object array, also adds image urls to urlArray
    });
    
    if (nameArray.length === 0 || nameArray.length < counter) {return alert("Please add more cupboard items");}
    const shuffled = nameArray;    
    const sliced = shuffled.slice(0, counter);
    const poppedSingle = sliced.pop(0, 1);
    const finaltems = sliced.join(", ") + " & " + poppedSingle;
    //
    // const shuffled = nameArray.sort(() => 0.5 - Math.random());    
    // const sliced = shuffled.slice(0, counter);
    // const poppedSingle = sliced.pop(0, 1);
    // const finaltems = sliced.join(", ") + " & " + poppedSingle + " 🍴"; 

    counter === 1 ? updateResult(poppedSingle) : updateResult(finaltems);
    counter === 1 ? updateUrlArray(urlArray.slice(0,1)) : console.log("counter 1");
    counter === 2 ? updateUrlArray(urlArray.slice(0,2)) : console.log("counter 2");
    counter === 3 ? updateUrlArray(urlArray.slice(0,3)) : console.log("counter 3");
    counter === 4 ? updateUrlArray(urlArray.slice(0,4)) : console.log("counter 4");
    counter === 5 ? updateUrlArray(urlArray.slice(0,5)) : console.log("counter 5");
    /* duplicate the items array. Shuffle new array then slice *(counter num) of items. 
    Pop out the first sliced array item then Join "sliced" and "poppedSingle (now stringified) with ,'s. 
    ternary operator to ensure if only 1 item is shown no "and" prefix is displayed in results
    Update the state via updateResult with only one item if counter === 1 */
    window.scrollBy({
      top: 800,
      left: 0,
      behavior: 'smooth'
    });
};
  const radius =  195;
  const stroke = 30;
  const progress = counter * 20;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;
  
  return <div className="IngredientsNumCounter">
    <h2>Select the total number of ingredients<br></br> for your next meal</h2>
      <div className="buttons-wrapper">
        <button id="removeIngredientsButton" onClick={handleDecrement}>&#45;</button>
        
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
        
        <button id="addIngredientsButton" onClick={handleIncrement}>&#43;</button>
      </div>
    <button type="submit" id="submitTotalIngredientsButton" onClick={finalResultsHandler}>SUBMIT</button>
  </div>
};

export default IngredientsNumCounter;