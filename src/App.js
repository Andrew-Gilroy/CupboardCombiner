import React, { useState , useEffect } from 'react';
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
  const [fetchResult, updateFetchResult] = useState('');//
  //API image url
  const [imageURL, updateImageUrl] = useState('');
  

/////////////////////////////// 
////// FUNCTIONS & LOGIC ////////////////////////////////////////////////////////////////////
///////////////////////////////

//captures user input and updates the term to live reflect the current user input
  const inputOnChange = (event) => {
    updateTerm(event.target.value);
  };


const flickrImgUrlBuilder = () => {
  if (fetchResult !== "") {
    
    const farmId = fetchResult.photos.photo[0].farm;
    const serverId = fetchResult.photos.photo[0].server;
    const id = fetchResult.photos.photo[0].id;
    const secret = fetchResult.photos.photo[0].secret;  
    const imgUrl = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
    updateImageUrl(imgUrl);
  }
  else {
    return alert("flickrImgUrlBuilder error")
  }
    };
//I NEED - FARM ID - SERVER ID - ID - SECRET
//https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg


// use effect hook should! watch for changes in fetchResult(json returned) 
// it then runs flickrImgUrlBuilder() to create an image url from the fetched JSON
useEffect(() => {
     if(fetchResult !== ""){flickrImgUrlBuilder()}// create image url from json data
});
// }, [fetchResult]); // dependancy array it could be important here to stop crashes?
// it seems like FLICKr api crashes on certain words... carrots...
const fetchImageUrl = async () => {

try { 
  let apiSearchTerm = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=52236809d65bcba6dfb096fa57043737&text=${term}&per_page=1&format=json&nojsoncallback=1&sort=relevance`;
  const response = await fetch(apiSearchTerm);
  const json = await response.json();
  //state update function    
  updateFetchResult(json); //updates state with returned API data
}
catch(err) {
  console.log("Fetch Error");
}};

//Adds user inputted term to the items array and updates the API searchTerm. Term is then updated to ''. 
//Items array is updated using updateItems function listed above in hooks  
  const onSubmitItemHandler = (event) => {
    event.preventDefault();
    
    updateSearchTerm(term);// updates & stores the state of apisearchTerm with term. Term is cleared later
    
    fetchImageUrl(term);// runs a search for img urls from Flickr API

  const termAddedToArray = [...items, term];// i need 
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
            <img src={imageURL} alt="" className="ingredients-image"></img>
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
