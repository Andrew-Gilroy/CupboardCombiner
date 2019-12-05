/* jshint esversion: 6 */
import React from 'react';
import '../CupboardDisplayItems/CupboardDisplayItems.css';

const CupboardDisplayItems = props => (
  <div className="CupboardDisplayItems-Wrapper">
    {
      props.items.map((item, index) => <div key={index} className="CupboardItem">{item}</div>)
    }
  </div>
);

export default CupboardDisplayItems;