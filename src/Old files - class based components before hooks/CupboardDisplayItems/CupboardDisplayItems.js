import React from "react";
import '../CupboardDisplayItems/CupboardDisplayItems.css';

const CupboardDisplayItems = props => (
  
  <div className="CupboardDisplayItems-Wrapper">
    {
      props.items.map((item, cats) => <div key={cats} className="CupboardItem">
        <h1>{item}</h1>
        <button  onClick={() => props.removeItem(cats)}>X</button>
        </div>)
    }
  </div>
)

export default CupboardDisplayItems;