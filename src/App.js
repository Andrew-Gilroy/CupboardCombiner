import React, { useState } from 'react';
import './App.css';
//import './components/AddCupboardItem/AddCupboardItem.css';
import AppHeader from './components/AppHeader/AppHeader';
import InputCupboardItem from './components/InputCupboardItem/InputCupboardItem';
import DisplayCupboardItems from './components/DisplayCupboardItems/DisplayCupboardItems';
import IngredientsNumCounter from './components/IngredientsNumCounter/IngredientsNumCounter';
import FinalMealsDisplay from './components/FinalMealsDisplay/FinalMealsDisplay';
import AppFooter from './components/AppFooter/AppFooter';

function App() {

/////////////////////////////  
/// HOOKS STATE MANAGEMENT //
/////////////////////////////
  const [term, updateTerm] = useState('');
  const [items, updateItems] = useState(["Bacon", "Rice", "Pasta", "Curry Sauce", "Chicken", "Cilantro", "Tomatoes", "Chicken", "Beef", "Carrots", "Peppers"]);
  // eslint-disable-next-line
  const [removed, updateRemovedItems] = useState([]);
  const [counter, updateCounter] = useState(1);
  const [result, updateResult] = useState([]);

/////////////////////////////  
///// FUNCTIONS & LOGIC /////
/////////////////////////////

//captures user input and updates the term to live reflect the current user input
  const inputOnChange = (event) => {
    updateTerm(event.target.value);
  };

//Adds user inputted term to the items array. Term is then updated to being blank. Items array is updated using updateItems function listed above in hooks  
  const onSubmitItemHandler = (event) => {
    event.preventDefault();
    const termAddedToArray = [...items, term];
    updateTerm('');
    updateItems(termAddedToArray);
  };

//Removes an item from the original array via splice. RemovedItems array is updated. User clicks X button to remove item
  const handleRemove = (cats) => {
    const itemRemove = items.splice(cats, 1);
    updateRemovedItems({removed: itemRemove});
  }

//Deletes all items in the cupboard   
  const deleteAllItems = () => { 
    updateItems([]);
  };

  const handleIncrement = () => { if(counter <= 4)updateCounter(counter + 1); else(alert("5 ingredients maximum"))};
  const handleDecrement = () => { if(counter >= 2)updateCounter(counter - 1); };


//Returns random final results based on number of ingredients selected  
  const finalResultsHandler = () => { 
    
    const copyArray = [...items];
    let shuffled = copyArray.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, counter);
    let poppedSingle = selected.pop(0, 1);
    let joined = selected.join(", ")
    let finaltems = joined + " and " + poppedSingle;
    updateResult(finaltems);
    // duplicate the items array. shuffle new array then select *(counter num) of items. 
    // Pop out the first array item (poppedSingle) then Join -stringified with ,'s. 
    // Add poppedSingle item to result.
    // Update the state via updateResult
  };
  
// return keyword with wrapper div on same line--important!
  return <div className="App">
            <AppHeader/> 
            <InputCupboardItem onSubmit={onSubmitItemHandler} value={term} onChange={inputOnChange} term={term}/>
            <DisplayCupboardItems items={items}  removeItem={handleRemove} deleteAllItems={deleteAllItems} key={() => items.toString()}/>
            <IngredientsNumCounter finalResultsHandler={finalResultsHandler} handleIncrement={handleIncrement} handleDecrement={handleDecrement} counter={counter}/>
            <FinalMealsDisplay result={result}/> 
            <AppFooter/>
          </div>
};

export default App;

//const [objectstate, updateObjectState ] = useState({firstname: 'Andrew', lastname:'Gilroy'})
//object hooks state example with access example,  objectstate.firstname = Andrew

  /* 
  <AppFooter/>
  <button id="console-log-btn" onClick={Itemslogger}>CONSOLE ITEMS</button>
  <button id="console-log-btn-others" onClick={otherItemslogger}>CONSOLE OTHER ITEMS</button>
      
  */

/* 
<input value={firstname} onChange={firstNameonChangeHandler} onSubmit={onSubmitFirstNameHandler}placeholder="Change the name"></input>
      
<input value={lastname} onChange={lastNameonChangeHandler} onSubmit={onSubmitLastNameHandler}placeholder="Change the name"></input>
      <p>My name is: {objectstate.firstname} {objectstate.lastname} </p>

*/

/* const updateObjectStateHandler = (event) => {
  updateTerm(event.target.value);
 } 
 const firstNameonChangeHandler = (event) => {
   updateTerm(event.target.value);
 }
 
 const onSubmitFirstNameHandler = (event) => {
 event.preventDefault();
 const objectTermValue = event.target.value;
 updateFirstName({firstname: objectTermValue});
};

 const lastNameonChangeHandler = (event) => {
  updateTerm(event.target.value);
 }
 
const onSubmitLastNameHandler = (event) => {
  event.preventDefault();
  const objectTermValue = event.target.value;
  updateLastName({lastname: objectTermValue});
};
 */