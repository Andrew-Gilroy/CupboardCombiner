import React, {useState} from 'react';
import './App.css';
import './components/AddCupboardItem/AddCupboardItem.css';
import AppHeader from './components/AppHeader/AppHeader';
import AddCupboardItem from './components/AddCupboardItem/AddCupboardItem';
import CupboardDisplayItems from './components/CupboardDisplayItems/CupboardDisplayItems';
import IngredientsNumCounter from './components/IngredientsNumCounter/IngredientsNumCounter';
import FinalMealsDisplay from './components/FinalMealsDisplay/FinalMealsDisplay';
import Fcomp1 from './components/IngredientsNumCounter/IngredientsNumCounterHOOKS';

class App extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Set initial state
    this.state = {
      term: '',
      items: ["Fruit", "Rice", "Beef", "Strawberries"],
      result: [],
    };
  }
  
  inputOnChange = (event) => {
    this.setState({ term: event.target.value});
  };
  
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term,]      
    });
  };
  
  submitIngredients = () => { 
    this.setState({ result: [...this.state.items.join(", ")] });
    console.log("Submitted");
  };
  
  deleteAllItems = () => { 
    this.setState({ items : [] })
  };
  
  handleRemove (cats) {
    const items = this.state.items.splice(cats, 1);
    // const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({otherItems: items});
  }
  
  Itemslogger = () => console.log(this.state.items);
  otherItemslogger = () => console.log(this.state.otherItems);
  
  render() {
    return (
      
      <div className="App">
      <AppHeader/> 
      
      <AddCupboardItem onSubmit={this.onSubmit} value={this.state.term} onChange={this.inputOnChange} term={this.state.term}/>
      
      <CupboardDisplayItems items={this.state.items}  removeItem={this.handleRemove} key={() => this.state.items.toString()}/>
      
      <button id="cupboardDeleteBtn" onClick={this.deleteAllItems}>Clear List</button>
      
      <IngredientsNumCounter submitIngredients={this.submitIngredients}/>
      
      <FinalMealsDisplay result={this.state.result} />
      
      <button id="console-log-btn" onClick={this.Itemslogger} >CONSOLE ITEMS</button>
      <button id="console-log-btn-others" onClick={this.otherItemslogger} >CONSOLE OTHER ITEMS</button>
      
      <Fcomp1 submitIngredients={this.submitIngredients}/>
      </div>
      );
    };
  }
  
  export default App;


/*

import React, {useState} from 'react';
import './App.css';
import './components/AddCupboardItem/AddCupboardItem.css';
import AppHeader from './components/AppHeader/AppHeader';
import AddCupboardItem from './components/AddCupboardItem/AddCupboardItem';
import CupboardDisplayItems from './components/CupboardDisplayItems/CupboardDisplayItems';
import IngredientsNumCounter from './components/IngredientsNumCounter/IngredientsNumCounter';
import FinalMealsDisplay from './components/FinalMealsDisplay/FinalMealsDisplay';
import Fcomp1 from './components/functionalcomponent-tests/Fcomp1';
import Fcomp2 from './components/functionalcomponent-tests/Fcomp1';


class App extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
    this.inputOnChange = this.inputOnChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Set initial state
    this.state = {
      term: '',
      items: ["Fruit", "Rice", "Beef", "Strawberries"],
      result: [],
    };
  }
  
  inputOnChange = (event) => {
    this.setState({ term: event.target.value});
  };
  
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term,]      
    });
  };
  
  submitIngredients = () => { 
    this.setState({ result: [...this.state.items.join(", ")] });
    console.log("Submitted");
  };
  
  deleteAllItems = () => { 
    this.setState({ items : [] })
  };
  
  handleRemove (cats) {
    const items = this.state.items.splice(cats, 1);
    // const items = this.state.items.filter(item => item.id !== itemId);
    this.setState({otherItems: items});
  }
  
  Itemslogger = () => console.log(this.state.items);
  otherItemslogger = () => console.log(this.state.otherItems);
  
  render() {
    return (
      
      <div className="App">
      <AppHeader/> 
      
      <AddCupboardItem onSubmit={this.onSubmit} value={this.state.term} onChange={this.inputOnChange} term={this.state.term}/>
      
      <CupboardDisplayItems items={this.state.items}  removeItem={this.handleRemove} key={() => this.state.items.toString()}/>
      
      <button id="cupboardDeleteBtn" onClick={this.deleteAllItems}>Clear List</button>
      
      <IngredientsNumCounter submitIngredients={this.submitIngredients}/>
      
      <FinalMealsDisplay result={this.state.result} />
      
      <button id="console-log-btn" onClick={this.Itemslogger} >CONSOLE ITEMS</button>
      <button id="console-log-btn-others" onClick={this.otherItemslogger} >CONSOLE OTHER ITEMS</button>
      

      <AddCupboardItemHOOK onSubmit={this.onSubmit} value={this.state.term} onChange={this.inputOnChange} term={this.state.term}/>

      <Fcomp2 result={this.state.result}/>
      <Fcomp1 submitIngredients={this.submitIngredients}/>
      </div>
      );
    };
  }
  
  export default App;
  */