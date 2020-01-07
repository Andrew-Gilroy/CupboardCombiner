import React from 'react';
import '../DisplayCupboardItems/DisplayCupboardItems.css';

function DisplayCupboardItems({items, removeItem, deleteAllItems, fetchResult, flickrImgUrlBuilder}) {

return <div className="CupboardDisplayItems-Wrapper--paddingWrapper">
          <div className="CupboardDisplayItems-Wrapper">
            { items.map((item, cats) => <div key={cats} className="CupboardItem">
              <img src={item.url} alt="" className="ingredients-image"></img>
              <h1>{item.name}</h1>
              <button onClick={() => removeItem(cats)}>X</button>
              </div>)
            }
          <p id="emptyCupboardMessage"></p>
          </div>
      <button id="cupboardDeleteALLBtn" onClick={deleteAllItems}>REMOVE ALL</button>
      </div>
};
export default DisplayCupboardItems;