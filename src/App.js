import React from 'react';
import './App.css';
import './components/AddCupboardItem/AddCupboardItem.css';
import AppHeader from './components/AppHeader/AppHeader';
//import AddCupboardItem from './components/AddCupboardItem/AddCupboardItem';
import CupboardDisplayItems from './components/CupboardDisplayItems/CupboardDisplayItems';
import IngredientsNumCounter from './components/IngredientsNumCounter/IngredientsNumCounter';
import FinalMealsDisplay from './components/FinalMealsDisplay/FinalMealsDisplay';

// i should be storing state here to pass down the array via props


class App extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({ term: event.target.value});
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
  };


// function for submit
// function for update
// function for delete
// function for onchange

  render() {
    return (

      <div className="App">
        <AppHeader/> 
        <div className="AddCupboardItem">
            <form onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} placeholder="What's in the cupboard?" id="AddCupboardItem-input"/>
            <button id="cupboardSubmitBtn">Submit</button>
            </form>
        </div>
        <CupboardDisplayItems items={this.state.items} />
        <IngredientsNumCounter/>
        <FinalMealsDisplay/>
      </div>
);
};
}




/* */


export default App;
/*
<img src={logo} className="App-logo" alt="logo" />
       <LogoMastHead name="PROPS" > </LogoMastHead>

    />

*/

