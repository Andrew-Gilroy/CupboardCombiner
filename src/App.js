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
  const [items, updateItems] = useState([{name: 'Bacon', url: 'https://farm66.staticflickr.com/65535/49285056768_de01247872.jpg'}, {name: 'Carrots', url: 'https://farm2.staticflickr.com/1496/24428604506_dfa351a5a7.jpg'}, {name: 'Eggs', url: 'https://farm4.staticflickr.com/3348/3514192452_2981b6e008.jpg'}, {name: 'Noodles', url: 'https://farm8.staticflickr.com/7858/31620262177_8678387c2c.jpg'}, {name: 'Rice', url: ' https://farm5.staticflickr.com/4063/4513240600_a9df7d1739.jpg'}]);

  // eslint-disable-next-line
  const [removed, updateRemovedItems] = useState([]);
  const [counter, updateCounter] = useState(1);
  const [result, updateResult] = useState([]);
  //API search term states
  const [searchTerm, updateSearchTerm] = useState('');
  const [fetchResult, updateFetchResult] = useState('');//API JSON DATA
  //API image url
  const [imageURL, updateImageUrl] = useState('');
  
  
/////////////////////////////// 
////// FUNCTIONS & LOGIC ////////////////////////////////////////////////////////////////////
///////////////////////////////

//captures user input and updates the term to live reflect the current user input
const inputOnChange = (event) => {
      updateTerm(event.target.value);
  };

// chained useEffect hooks will watch for changes in state (fetchResult & imageURL)
// when API data has returned flickrImgUrlBuilder() is invoked. The next useEffect
// will invoke arrayBuilder() to update the items object array with a name and valid image URL.

//investigate here for possible infinite loops...
  useEffect(() => {
    if(fetchResult !== ""){
      flickrImgUrlBuilder();
      ;}
    },[fetchResult]);

  useEffect(() => {
    if(imageURL !== ""){
      arrayBuilder(); 
      ;}
    },[imageURL]);
  
//updates the items state array with user inputted item and fetched Flickr image url
  function arrayBuilder() {
    const termAddedToArray = [...items, {name: searchTerm, url: imageURL}];  
  updateItems(termAddedToArray);}


// takes returned Flickr API data then converts it to a valid image URL
const flickrImgUrlBuilder = () => {
    if (fetchResult.photos.photo.length !== 0) {
        const farmId = fetchResult.photos.photo[0].farm;
        const serverId = fetchResult.photos.photo[0].server;
        const id = fetchResult.photos.photo[0].id;
        const secret = fetchResult.photos.photo[0].secret;  
        const imgUrl = `https://farm${farmId}.staticflickr.com/${serverId}/${id}_${secret}.jpg`;
        updateImageUrl(imgUrl);
    }
    else {
        return alert("Item image not found - please try another search term");
    }
  };
  

  //Adds user inputted term to the items array and updates the API searchTerm. Term is then updated to ''. 
  //Items array is updated using updateItems function listed above in hooks  
    const onSubmitItemHandler = (event) => {
      event.preventDefault();
      updateSearchTerm(term);// updates & stores the state of apisearchTerm with term. Term is cleared later
      fetchImageUrl(searchTerm);// runs an async request for a single img. Json data is stored in state. This triggers image url builder function (flickrImgUrlBuilder).
      updateTerm('');// term cleared after submit
      document.getElementById("emptyCupboardMessage").innerHTML = "";
    };


const fetchImageUrl = async () => {
    try { 
      let apiSearchTerm = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=52236809d65bcba6dfb096fa57043737&text=${term}&per_page=1&format=json&nojsoncallback=1&sort=relevance&media=photos`;
      const response = await fetch(apiSearchTerm);
      const json = await response.json();
      //state update function    
      updateFetchResult(json); //updates state with returned API data
    }
    catch(err) {
      console.log("Fetch Error");
    }
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
      const nameArray = [];
      copyArray.forEach((element) => {
        nameArray.push(element.name);
      }); // extracts names from object array

      if (nameArray.length === 0 || nameArray.length < counter) {return alert("Please add more cupboard items");}
      const shuffled = nameArray.sort(() => 0.5 - Math.random());    
      const sliced = shuffled.slice(0, counter);
      const poppedSingle = sliced.pop(0, 1);
      const singleName = poppedSingle.name;
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
            {/* <button onClick={arrayBuilder}>make array</button> */}
            <InputCupboardItem onSubmit={onSubmitItemHandler} value={term} onChange={inputOnChange} term={term} fetchResult={fetchResult} flickrImgUrlBuilder={flickrImgUrlBuilder}/>
            <DisplayCupboardItems items={items} removeItem={handleRemove} deleteAllItems={deleteAllItems} key={() => items.toString()} imageURL={imageURL} />
            <IngredientsNumCounter finalResultsHandler={finalResultsHandler} handleIncrement={handleIncrement} handleDecrement={handleDecrement} counter={counter}/>
            <FinalMealsDisplay result={result}/> 
            <AppFooter/>
          </div>
};

export default App;

///////////////////////////////  
/// NOTES AND CODE SCRAPS //////////////////////////////////////////////////////////////////
///////////////////////////////
