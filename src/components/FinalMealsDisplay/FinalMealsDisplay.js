import React, { useState , useEffect } from 'react';
import './FinalMealsDisplay.css';


import foodIcon1 from '../../assets/images/icons8-pizza-48.png';
import foodIcon2 from '../../assets/images/icons8-salad-48.png';
import foodIcon3 from '../../assets/images/icons8-heinz-beans-48.png';
import foodIcon4 from '../../assets/images/icons8-watermelon-48.png';
import foodIcon5 from '../../assets/images/icons8-dessert-48.png';

function FinalMealsDisplay({result, items, urlArray, counter}) {
  
  //Monitors the ingredients total value then enables food Icons
  useEffect(() => {
    
    const getIcon1 = document.getElementById("foodIcon1");  
    const getIcon2 = document.getElementById("foodIcon2");
    const getIcon3 = document.getElementById("foodIcon3");
    const getIcon4 = document.getElementById("foodIcon4");
    const getIcon5 = document.getElementById("foodIcon5");
    
    switch(counter) {
        
      case 1:
        getIcon1.style.display = "inline-block";
        getIcon2.style.display = "none";
        getIcon3.style.display = "none";
        getIcon4.style.display = "none";
        getIcon5.style.display = "none";
        break;
        
      case 2:
        getIcon1.style.display = "inline-block";
        getIcon2.style.display = "inline-block";
        getIcon3.style.display = "none";
        getIcon4.style.display = "none";
        getIcon5.style.display = "none";
        break;
    
      case 3:
        getIcon1.style.display = "inline-block";
        getIcon2.style.display = "inline-block";
        getIcon3.style.display = "inline-block";
        getIcon4.style.display = "none";
        getIcon5.style.display = "none";
        break;
  
      case 4:
        getIcon1.style.display = "inline-block";
        getIcon2.style.display = "inline-block";
        getIcon3.style.display = "inline-block";
        getIcon4.style.display = "inline-block";
        getIcon5.style.display = "none";
        break;
  
      case 5:
        getIcon1.style.display = "inline-block";
        getIcon2.style.display = "inline-block";
        getIcon3.style.display = "inline-block";
        getIcon4.style.display = "inline-block";
        getIcon5.style.display = "inline-block";
        break;
          
      default:
        getIcon1.style.display = "inline-block";
        getIcon2.style.display = "none";
        getIcon3.style.display = "none";
        getIcon4.style.display = "none";
        getIcon5.style.display = "none";
        break;
      }
  },[counter]);

  return (
    <div className="FinalMealsDisplay">
        <h2>Your next meal will be:</h2>
        <p id="FinalMealsDisplay-p">{result}</p>
        <div className="finalMealsDisplay-image-row">
          { urlArray.map((url, food) => <div key={food} className="finalMealsDisplay-imageWrapper">
                <img src={url} alt={food += 1} className="finalMealsDisplay-image"></img>
                </div>)
          }  
        </div>
        <br></br>
        <br></br>
        <div className='foodIcon-wrapper'> 
          <img src={foodIcon1} className="foodIcon" alt="Pizza Icon" id="foodIcon1"/>
          <img src={foodIcon2} className="foodIcon" alt="Salad Icon" id="foodIcon2"/>
          <img src={foodIcon3} className="foodIcon" alt="Heinz Beans" id="foodIcon3"/>
          <img src={foodIcon4} className="foodIcon" alt="Watermelon Icon" id="foodIcon4"/>
          <img src={foodIcon5} className="foodIcon" alt="Dessert Icon" id="foodIcon5"/>
        </div>
      </div>
  );
}

export default FinalMealsDisplay;
