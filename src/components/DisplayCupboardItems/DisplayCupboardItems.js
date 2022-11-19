import React from 'react';
import '../DisplayCupboardItems/DisplayCupboardItems.css';

function cupboardItemHidden () {
  const element = document.getElementById("CupboardDisplayItems");
  const chevron = document.getElementById("toggleCupboardItems");
  if (element.style.display === "none") {
    element.style.display = "flex";
    chevron.classList.toggle("fa-chevron-up");
  } else {
    element.style.display = "none";
    chevron.classList.toggle("fa-chevron-up");
  }
}

function DisplayCupboardItems({items, removeItem, deleteAllItems, fetchResult, flickrImgUrlBuilder}) {

return <div className="CupboardDisplayItems-Wrapper--paddingWrapper" >
          <div>
            <p id="toggle-item-view-p">TOGGLE CUPBOARD VIEW</p>
            <i className="fas fa-chevron-down themeChevron" id="toggleCupboardItems" onClick={cupboardItemHidden}></i>
          </div>
          <div className="CupboardDisplayItems-Wrapper" id="CupboardDisplayItems">
            { items.map((item, cats) => <div key={cats} className="CupboardItem">
              <img src={item.url} alt="" className="CupboardItem_image"></img>
              <div className='CupboardDisplayItems-h1-wrapper'>
              <h1>{item.name}</h1>
              </div>
              <button onClick={() => removeItem(cats)}>X</button>
              </div>)
            }
          <p id="emptyCupboardMessage"></p>
          </div>
        <button id="cupboardDeleteALLBtn" onClick={deleteAllItems}>REMOVE ALL</button>
        </div>
};

export default DisplayCupboardItems;