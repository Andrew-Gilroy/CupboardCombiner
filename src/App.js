import React, { useState } from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import ThemeToggler from './components/ThemeToggler/ThemeToggler';
import InputCupboardItem from './components/InputCupboardItem/InputCupboardItem';
import DisplayCupboardItems from './components/DisplayCupboardItems/DisplayCupboardItems';
import IngredientsNumCounter from './components/IngredientsNumCounter/IngredientsNumCounter';
import FinalMealsDisplay from './components/FinalMealsDisplay/FinalMealsDisplay';
import AppFooter from './components/AppFooter/AppFooter';

function App() {

///////////////////////////////  
/// HOOKS STATE MANAGEMENT //////////////////////////////////////////////////////////////////
///////////////////////////////

  const [term, updateTerm] = useState('');
  const [items, updateItems] = useState(["Rice", "Pasta", "Curry Sauce", "Spinach", "Cilantro", "Tomatoes", "Chicken", "Beef", "Carrots", "Peppers"]);
  // eslint-disable-next-line
  const [removed, updateRemovedItems] = useState([]);
  const [counter, updateCounter] = useState(1);
  const [result, updateResult] = useState([]);
  //API search term states
  const [searchTerm, updateSearchTerm] = useState('');
  const [fetchResult, updateFetchResult] = useState([]);

/*   useEffect(() =>
  fetch("BookApiUrl")
    .then(res => res.json())
    .then(setBook)
) */




/////////////////////////////// 
////// FUNCTIONS & LOGIC ////////////////////////////////////////////////////////////////////
///////////////////////////////

//captures user input and updates the term to live reflect the current user input
  const inputOnChange = (event) => {
    updateTerm(event.target.value);
  };


/*   async function fetchImageUrl() {

  //await fetch('https://jsonplaceholder.typicode.com/todos/1' + term) //concats term onto fetch URL
    try{ await fetch('https://jsonplaceholder.typicode.com/todos/1') //should concat term onto fetch URL
        .then(response => response.json())
        .then(json => updateFetchResult(json));
         console.log(fetchResult);
      } catch(err) {
          console.log("Fetch Error");//fix this?
      }
    }; */
  const fetchImageUrl = async () => {

  //const response = await fetch('https://jsonplaceholder.typicode.com/todos/1' + term) //concats term onto fetch URL
    try { 
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') //this should concat term onto fetch URL
        const json = await response.json();
        updateFetchResult(json); //state update function    
        console.log(fetchResult);
      } catch(err) {
          console.log("Fetch Error");
      }
    };



/*
  console.log(fetchResult.userId);
  console.log(fetchResult.id);
  console.log(fetchResult.title);
  console.log(fetchResult.completed);
  alert(fetchResult.title) */

//Adds user inputted term to the items array and updates the API searchTerm. Term is then updated to ''. 
//Items array is updated using updateItems function listed above in hooks  
  const onSubmitItemHandler = (event) => {
    event.preventDefault();
    updateSearchTerm(term);// updates & stores the state of searchTerm with term. Term is cleared later
    
    fetchImageUrl();// runs a search for img urls from Flickr API
    
// create an object to add to the array here. {foodName: Eggs, imageUrl: "https://etc}
  const termAddedToArray = [...items, term];// i need to add objects to the array. {foodName: Eggs, imageUrl: "https://etc} , {foodName: Beans, imageUrl: "https://etc}"
    updateTerm('');
    updateItems(termAddedToArray);
    document.getElementById("emptyCupboardMessage").innerHTML = "";
  };
  
//Removes an item from the original array via splice. RemovedItems array is updated. User clicks X button to remove item
  const handleRemove = (cats) => {
    const itemRemove = items.splice(cats, 1);
    updateRemovedItems({removed: itemRemove});
    if(items.length === 0){document.getElementById("emptyCupboardMessage").innerHTML = "The cupboard is bare... &#128532;"}; 
  };

//Deletes all items in the cupboard   
  const deleteAllItems = () => { 
    updateItems([]);
    document.getElementById("emptyCupboardMessage").innerHTML = "The cupboard is bare... &#128532;";
  };
//handles increments/decrements onclicks from IngredientsNumCounter
  const handleIncrement = () => { if(counter <= 4)updateCounter(counter + 1); else(alert("5 ingredients maximum"));};
  const handleDecrement = () => { if(counter >= 2)updateCounter(counter - 1); };


//Returns random final results based on number of ingredients selected  
  const finalResultsHandler = () => { 
      const copyArray = [...items];
      if (copyArray.length === 0 || copyArray.length < counter) {return alert("Please add more cupboard items");}
      const shuffled = copyArray.sort(() => 0.5 - Math.random());
      const sliced = shuffled.slice(0, counter);
      const poppedSingle = sliced.pop(0, 1);
      const finaltems = sliced.join(", ") + " and " + poppedSingle;
      counter === 1 ? updateResult(poppedSingle) : updateResult(finaltems);
      // duplicate the items array. Shuffle new array then slice *(counter num) of items. 
      // Pop out the first sliced array item then Join "sliced" and "poppedSingle (now stringified) with ,'s. 
      // ternary operator to ensure if only 1 item is shown no "and" prefix is displayed in results
      // Update the state via updateResult with only one item if counter === 1
  };

// return keyword with wrapper div on same line--important!
  return <div className="App">
            <ThemeToggler/>
            <AppHeader/> 
            <InputCupboardItem onSubmit={onSubmitItemHandler} value={term} onChange={inputOnChange} term={term}/>
            <p>{JSON.stringify(fetchResult.title)}</p>
            <DisplayCupboardItems items={items}  removeItem={handleRemove} deleteAllItems={deleteAllItems} key={() => items.toString()}/>
            <IngredientsNumCounter finalResultsHandler={finalResultsHandler} handleIncrement={handleIncrement} handleDecrement={handleDecrement} counter={counter}/>
            <FinalMealsDisplay result={result}/> 
            <AppFooter/>
          </div>
};

export default App;

///////////////////////////////  
/// NOTES AND CODE SCRAPS //////////////////////////////////////////////////////////////////
///////////////////////////////

//const [objectstate, updateObjectState ] = useState({firstname: 'Andrew', lastname:'Gilroy'})
//object hooks state example with access example,  objectstate.firstname = Andrew

/* 
<input value={firstname} onChange={firstNameonChangeHandler} onSubmit={onSubmitFirstNameHandler}placeholder="Change the name"></input>
      
<input value={lastname} onChange={lastNameonChangeHandler} onSubmit={onSubmitLastNameHandler}placeholder="Change the name"></input>
      <p>My name is: {objectstate.firstname} {objectstate.lastname} </p>

*/

//--------------------------------------------------------------
//NEW STYLE ASYNC/AWAIT    
/* const requestAnimeAwait = async (id=100) => {
    const response = await fetch(`https://jikan.me/api/anime/${id}`)
    const json = await response.json();
    console.log("async/await based");
    console.log(json);
}

requestAnimeAwait(); */

//--------------------------------------------------------------
//OLD STYLE WITH .then callback -- can lead to hell
/* const requestAnimePromise = id => {
    fetch(`https://jikan.me/api/anime/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log("Promise-based")
            console.log(json)
        });
}

requestAnimePromise(1); */

//--------------------------------------------------------------
