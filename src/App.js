import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import AddCupboardItem from './components/AddCupboardItem/AddCupboardItem';
import CupboardDisplayItems from './components/CupboardDisplayItems/CupboardDisplayItems';
import IngredientsNumCounter from './components/IngredientsNumCounter/IngredientsNumCounter';
import FinalMealsDisplay from './components/FinalMealsDisplay/FinalMealsDisplay';

function App() {
  return (
    <div className="App">
            <AppHeader/> 
            <AddCupboardItem/>
            <CupboardDisplayItems/>
            <IngredientsNumCounter/>
            <FinalMealsDisplay/>
    </div>
);
}

export default App;
/*
<img src={logo} className="App-logo" alt="logo" />
       <LogoMastHead name="PROPS" > </LogoMastHead>

           <Person
      name="Agent Smith"
      age="42"
      hobby1="Spying"
      hobby2="Observing"
      hobby3="Sleuthing"
      hobby4="Detecting"
    />

*/

