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
//
//{ this.props.todos.map((todo) => {
// return <li onClick={() => { this.removeItem(todo)}} key={todo}>{ todo }

//onClick={() => this.props.onDelete(this.props.id)}

/*

const CupboardDisplayItems = props => (
  <div className="CupboardDisplayItems-Wrapper">
    {
      props.items.map((item, index) => <div key={index} className="CupboardItem">
        <h1>{item}</h1> 
        <button  onClick={this.handleDelete}>X</button>
        </div>)
    }
  </div>
)
getStyle = () => {
  return {
    color: "red",
    fontSize: "99pt",

  }
};
*** styledprops***
style={this.getStyle()}
*/