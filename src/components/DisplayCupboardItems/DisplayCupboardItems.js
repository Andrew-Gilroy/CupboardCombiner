import React from 'react';
import '../DisplayCupboardItems/DisplayCupboardItems.css';


//Deletes all items in the cupboard and in localStorage  


function DisplayCupboardItems({items, fetchResult, flickrImgUrlBuilder, updateItems, updateRemovedItems}) {
  
  function cupboardItemHidden () {
    const element = document.getElementById("CupboardDisplayItems");
    const cupboardDeleteALLBtn = document.getElementById("cupboardDeleteALLBtn");
    const chevron = document.getElementById("toggleCupboardItems");
    if (element.style.display === "none") {
      element.style.display = "flex";
      cupboardDeleteALLBtn.style.display = "block";
      chevron.classList.toggle("fa-chevron-up");
    } else {
      element.style.display = "none";
      cupboardDeleteALLBtn.style.display = "none";
      chevron.classList.toggle("fa-chevron-up");
    }
  }
  
  const deleteAllItems = () => { 
    if (window.confirm("Are you sure you want to remove all cupboard items?") === true) {
      //text = "You pressed OK!";
      updateItems([]);
      localStorage.clear();
      document.getElementById("emptyCupboardMessage").innerHTML = "The cupboard is empty... &#128532;";
    } else {
      //alert("carry on!");
    }
    
  };
//Removes an item from the original array via splice. RemovedItems array is updated. User clicks X button to remove item
//Saves a copy of the array into localStorage as JSON "locallySavedItemsArray"
const removeItem = (foods) => {
  const itemRemove = items.splice(foods, 1);
  updateRemovedItems({removed: itemRemove});
  localStorage.setItem("locallySavedItemsArray", JSON.stringify(items));
  if(items.length === 0){document.getElementById("emptyCupboardMessage").innerHTML = "The cupboard is empty... &#128532;";} 
};

return <div className="CupboardDisplayItems-Wrapper--paddingWrapper" >
          <div>
            <p id="toggle-item-view-p">TOGGLE CUPBOARD VIEW</p>
            <i className="fas fa-chevron-down themeChevron" id="toggleCupboardItems" onClick={cupboardItemHidden}></i>
          </div>
          <div className="CupboardDisplayItems-Wrapper" id="CupboardDisplayItems">
            { items.map((item, foods) => <div key={foods} className="CupboardItem">
              <img src={item.url} alt="" className="CupboardItem_image"></img>
              <div className='CupboardDisplayItems-h1-wrapper'>
              <h1>{item.name}</h1>
              </div>
              <button onClick={() => removeItem(foods)}>X</button>
              </div>)
            }
          <p id="emptyCupboardMessage"></p>
          </div>
        <button id="cupboardDeleteALLBtn" onClick={deleteAllItems}>REMOVE ALL</button>
        </div>
};

export default DisplayCupboardItems;