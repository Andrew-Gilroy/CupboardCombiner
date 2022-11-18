import React from 'react';
import './FinalMealsDisplay.css';


import foodIcon1 from '../../assets/images/icons8-pizza-48.png';
import foodIcon2 from '../../assets/images/icons8-salad-48.png';
import foodIcon3 from '../../assets/images/icons8-heinz-beans-48.png';
import foodIcon4 from '../../assets/images/icons8-watermelon-48.png';
import foodIcon5 from '../../assets/images/icons8-dessert-48.png';





function FinalMealsDisplay({result, items, urlArray}) {
  
  return (
    <div className="FinalMealsDisplay">
        <h2>Your next meal will be:</h2>
        <p id="FinalMealsDisplay-p">{result}</p>
        <div>
          { urlArray.map((url, food) => <div key={food} className="finalMealsDisplay-imageWrapper">
                <img src={url} alt={food += 1} className="finalMealsDisplay-image"></img>
                </div>)
          }  
        </div>
        <br></br>
        <br></br>
           
        <img src={foodIcon1} className="foodIcon" alt="Pizza Icon" id="foodIcon1"/>
        <img src={foodIcon2} className="foodIcon" alt="Salad Icon" id="foodIcon2"/>
        <img src={foodIcon3} className="foodIcon" alt="Heinz Beans" id="foodIcon3"/>
        <img src={foodIcon4} className="foodIcon" alt="Watermelon Icon" id="foodIcon4"/>
        <img src={foodIcon5} className="foodIcon" alt="Dessert Icon" id="foodIcon5"/>
        
      </div>
  );
}

export default FinalMealsDisplay;
