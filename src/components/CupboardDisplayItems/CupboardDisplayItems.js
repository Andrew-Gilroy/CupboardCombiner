/* jshint esversion: 6 */
import React from 'react';

const CupboardDisplayItems = props => (
  <div className="cupboardDisplayItems-Wrapper">
    {
      props.items.map((item, index) => <div key={index} className="CupboardItem">{item}</div>)
    }
  </div>
);

export default CupboardDisplayItems;