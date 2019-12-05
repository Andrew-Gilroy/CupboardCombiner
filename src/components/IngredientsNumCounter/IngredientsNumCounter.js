import React from 'react';
import './IngredientsNumCounter.css';

export default class IngredientsNumCounter extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      counter: 0,
      items: []
    };
  }

  increment = () => {
    const { counter } = this.state;
    return this.setState({ counter: counter + 1 });
  };
  decrement = () => {
    const { counter } = this.state;
    return this.setState({ counter: counter - 1 });
  };

  render() {
  return (
  <div className="IngredientsNumCounter">
    <h2>How many ingredients would you like to use?</h2>
    <hr/>
    <button id="removeIngredientsButton" onClick={this.decrement} >-</button>
  <p id="ingredientsNumCounterDisplay">{this.state.counter}</p>
    <button id="addIngredientsButton" onClick={this.increment}>+</button>
    <button type="submit" id="submitTotalIngredientsButton">SUBMIT</button>
  </div>
  );
  
};
}