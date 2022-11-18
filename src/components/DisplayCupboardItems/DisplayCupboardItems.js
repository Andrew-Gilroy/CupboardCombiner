import React from 'react';
import '../DisplayCupboardItems/DisplayCupboardItems.css';

function DisplayCupboardItems({items, removeItem, deleteAllItems, fetchResult, flickrImgUrlBuilder}) {

return <div className="CupboardDisplayItems-Wrapper--paddingWrapper">
          <div className="CupboardDisplayItems-Wrapper" >
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


// function allowDrop(ev) {
//   ev.preventDefault();
// }

// function drag(ev) {
//   ev.dataTransfer.setData("text", ev.target.id);
// }

// function drop(ev) {
//   ev.preventDefault();
//   var data = ev.dataTransfer.getData("text");
//   ev.target.appendChild(document.getElementById(data));
// }
// </script>
// </head>
// <body>

// <div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)"></div>

// <img id="drag1" src="img_logo.gif" draggable="true" ondragstart="drag(event)" width="336" height="69"></img>