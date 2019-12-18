import React from 'react';
import '../DisplayCupboardItems/DisplayCupboardItems.css';


//{deleteAllItems etc} is how i pass in props with hooks!!!
function DisplayCupboardItems({items, removeItem, deleteAllItems}) {
  
return <div className="CupboardDisplayItems-Wrapper--paddingWrapper">
    <div className="CupboardDisplayItems-Wrapper">
    { items.map((item, cats) => <div key={cats} className="CupboardItem">
          <h1>{item}</h1>
          <button  onClick={() => removeItem(cats)}>X</button>
          </div>)
      }
      </div>
      <button id="cupboardDeleteALLBtn" onClick={deleteAllItems}>REMOVE ALL</button>
  </div>
};
export default DisplayCupboardItems;

//updateItems({ term: '', items: [...items, term,] })
