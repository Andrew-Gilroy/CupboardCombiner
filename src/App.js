import React from 'react';
import './App.css';
import './components/AddCupboardItem/AddCupboardItem.css';
import AppHeader from './components/AppHeader/AppHeader';
//import AddCupboardItem from './components/AddCupboardItem/AddCupboardItem';
import CupboardDisplayItems from './components/CupboardDisplayItems/CupboardDisplayItems';
import IngredientsNumCounter from './components/IngredientsNumCounter/IngredientsNumCounter';
import FinalMealsDisplay from './components/FinalMealsDisplay/FinalMealsDisplay';


class App extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    //binds the submitIngredients method so that it can be passed to submit button via props.
    this.submitIngredients = this.submitIngredients.bind(this);
    // Set initial state
    this.state = {
      term: '',
      items: [],
      result: []
    };
  }

  inputOnChange = (event) => {
    this.setState({ term: event.target.value});
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term],
      
    });
    //console.log(this.state.items);
  };

//randomiser functinon here. Take array and return new random/results array


  submitIngredients = () => { 
    this.setState({ result: [...this.state.items, " array & string logic here" , " added to array index"] })
    return console.log(this.state.result);
  };
  
  render() {
    return (

      <div className="App">
        <AppHeader/> 
        <div className="AddCupboardItem">
            <form onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.inputOnChange} placeholder="What's in the cupboard?" id="AddCupboardItem-input"/>
            <button id="cupboardSubmitBtn">Submit</button>
            </form>
        </div>
        <CupboardDisplayItems items={this.state.items} />
        
        <IngredientsNumCounter submitIngredients={this.submitIngredients}/>
        <FinalMealsDisplay result={this.state.result}/>
      </div>
);
};
}
//LESSON HERE
/*submitIngredients={this.submitIngredients} is how the submitIngredients function/method is passed down to IngredientsNumCounter*/



/* */


export default App;
/*
<img src={logo} className="App-logo" alt="logo" />
       <LogoMastHead name="PROPS" > </LogoMastHead>

    />

*/

