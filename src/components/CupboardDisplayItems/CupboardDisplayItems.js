import React from 'react';
import '../CupboardDisplayItems/CupboardDisplayItems.css';


const CupboardDisplayItems = props => (
  <div className="CupboardDisplayItems-Wrapper">
    {
      props.items.map((item, index) => <div key={index} className="CupboardItem"><h1>{item}</h1> <button  onClick={console.log("delete box")}>X</button></div>)
    }
  </div>
)

export default CupboardDisplayItems;

//{ this.props.todos.map((todo) => {
// return <li onClick={() => { this.removeItem(todo)}} key={todo}>{ todo }