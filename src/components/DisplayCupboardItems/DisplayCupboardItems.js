import React from 'react';
import '../DisplayCupboardItems/DisplayCupboardItems.css';

function DisplayCupboardItems({items, removeItem, deleteAllItems, imageURL}) {
  
return <div className="CupboardDisplayItems-Wrapper--paddingWrapper">
          <div className="CupboardDisplayItems-Wrapper">
            { items.map((item, cats) => <div key={cats} className="CupboardItem">
              <img src={imageURL} alt="" className="ingredients-image"></img>
              <h1>{item}</h1>
              <button onClick={() => removeItem(cats)}>X</button>
              </div>)
            }
          <p id="emptyCupboardMessage"></p>
          </div>
      <button id="cupboardDeleteALLBtn" onClick={deleteAllItems}>REMOVE ALL</button>
      </div>
};
export default DisplayCupboardItems;

//{deleteAllItems etc} is how i pass in props with hooks!!!
//updateItems({ term: '', items: [...items, term,] })
