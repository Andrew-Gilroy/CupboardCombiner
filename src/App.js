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

/*  
HOOKS STATE MANAGEMENT
*/

const [term, updateTerm] = useState('');
const [items, updateItems] = useState(
  [
    {name: 'Bacon', url: 'https://farm66.staticflickr.com/65535/49285056768_de01247872.jpg'}, 
    {name: 'Eggs', url: 'https://farm4.staticflickr.com/3348/3514192452_2981b6e008.jpg'},
    {name: 'Beans', url: 'https://farm5.staticflickr.com/4005/4300636744_3dcb938a25.jpg'}
  ]
  
  );

  // eslint-disable-next-line
  const [removed, updateRemovedItems] = useState([]);
  const [counter, updateCounter] = useState(1);
  const [theme, updateThemeName] = useState("default");
  const [circleStrokeColor, updateCircleStroke] = useState("RGBA(185,185,185,0.29)");
  
  const [result, updateResult] = useState([]);
  /*testing*/
  const [urlArray, updateUrlArray] = useState([]);
  
  //API search term states
  const [searchTerm, updateSearchTerm] = useState('');
  const [fetchResult, updateFetchResult] = useState('');//API JSON DATA
  //API image url
  const [imageURL, updateImageUrl] = useState('');
  
  
  /*////////////////////////////// 
  ////// FUNCTIONS & LOGIC ////////////////////////////////////////////////////////////////////
  //////////////////////////////*/
  
  //check this syntax, is useEffect the best method here? I could improve the logic here but it works for now!

  //on page load, useffect checks localStorage for an array of previously saved cupboard items
  //if nothing is detected then the default array "items" with placeholder images is returned
 useEffect(() => {

    if (localStorage.getItem("locallySavedItemsArray")) {
      const parsedlocalArray = JSON.parse(localStorage.getItem("locallySavedItemsArray") || items);
      
      return updateItems(parsedlocalArray)
    }
  },[]);
  //if I add items to the empty dependency array this causes an infinite loop....
  //React Hook useEffect has a missing dependency: 'items'. Either include it or remove the dependency array.

//captures user input and updates the term to live reflect the current user input
  const inputOnChange = (event) => {
        updateTerm(event.target.value);
  };

// chained useEffect hooks will watch for changes in state (fetchResult & imageURL)
// when API data has returned, flickrImgUrlBuilder() is invoked. The next useEffect
// will invoke arrayBuilder() to update the items object array with a name and valid image URL.

  useEffect(() => {
    if(fetchResult !== ""){
      flickrImgUrlBuilder();
    }
    // eslint-disable-next-line
  },[fetchResult]);
  
  useEffect(() => {
    if(imageURL !== ""){
      arrayBuilder(); 
    }
    // eslint-disable-next-line
  },[imageURL]);

  //Monitors the ingredients total value then enables food Icons
  useEffect(() => {
    
    const getIcon1 = document.getElementById("foodIcon1");  
    const getIcon2 = document.getElementById("foodIcon2");
    const getIcon3 = document.getElementById("foodIcon3");
    const getIcon4 = document.getElementById("foodIcon4");
    const getIcon5 = document.getElementById("foodIcon5");
    
    switch(counter) {
        
      case 1:
        getIcon1.style.display = "inline-block";
        getIcon2.style.display = "none";
        getIcon3.style.display = "none";
        getIcon4.style.display = "none";
        getIcon5.style.display = "none";
        break;
        
      case 2:
        getIcon1.style.display = "inline-block";
        getIcon2.style.display = "inline-block";
        getIcon3.style.display = "none";
        getIcon4.style.display = "none";
        getIcon5.style.display = "none";
        break;
    
      case 3:
        getIcon1.style.display = "inline-block";
        getIcon2.style.display = "inline-block";
        getIcon3.style.display = "inline-block";
        getIcon4.style.display = "none";
        getIcon5.style.display = "none";
        break;
  
      case 4:
        getIcon1.style.display = "inline-block";
        getIcon2.style.display = "inline-block";
        getIcon3.style.display = "inline-block";
        getIcon4.style.display = "inline-block";
        getIcon5.style.display = "none";
        break;
  
      case 5:
        getIcon1.style.display = "inline-block";
        getIcon2.style.display = "inline-block";
        getIcon3.style.display = "inline-block";
        getIcon4.style.display = "inline-block";
        getIcon5.style.display = "inline-block";
        break;
          
      default:
        getIcon1.style.display = "inline-block";
        getIcon2.style.display = "none";
        getIcon3.style.display = "none";
        getIcon4.style.display = "none";
        getIcon5.style.display = "none";
        break;
      }
  },[counter]);
    
  // monitors counter state value - updates numCounter circle stroke color as the value increases
  useEffect(() => {
    if (theme === "default") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(015,145,165, 1)"); break;
        case 2: updateCircleStroke("RGBA(035,165,185, 1)"); break;
        case 3: updateCircleStroke("RGBA(055,185,205, 1)"); break;
        case 4: updateCircleStroke("RGBA(075,205,225, 1)"); break;
        case 5: updateCircleStroke("RGBA(097,221,255, 1)"); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }
  },[theme, counter]);

  useEffect(() => {
    if (theme === "dark") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(105,105,105,0.2)"); break;
        case 2: updateCircleStroke("RGBA(125,125,125,0.4)"); break;
        case 3: updateCircleStroke("RGBA(165,165,165,0.6)"); break;
        case 4: updateCircleStroke("RGBA(205,205,205,0.7)"); break;
        case 5: updateCircleStroke("RGBA(245,245,245,1)"); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }
  },[theme, counter]);
  
  useEffect(() => {
    if (theme === "light") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(149,094,171, 1)"); break;
        case 2: updateCircleStroke("RGBA(159,104,181, 1)"); break;
        case 3: updateCircleStroke("RGBA(169,114,191, 1)"); break;
        case 4: updateCircleStroke("RGBA(189,124,211, 1)"); break;
        case 5: updateCircleStroke("RGBA(229,134,231, 1)"); break;
        default: updateCircleStroke("RGBA(255,000, 0, 0.29)"); break;      
      }
    }
  },[theme, counter]);
  
  useEffect(() => {
    if (theme === "red") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(165,035,035,0.4)"); break;
        case 2: updateCircleStroke("RGBA(185,035,035,0.6)"); break;
        case 3: updateCircleStroke("RGBA(205,035,035,0.8)"); break;
        case 4: updateCircleStroke("RGBA(225,035,035,0.9)"); break;
        case 5: updateCircleStroke("RGBA(245,035,035,1.0)"); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }
  },[theme, counter]);
  
  useEffect(() => {
    if (theme === "green") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(005,205,005,0.2)"); break;
        case 2: updateCircleStroke("RGBA(025,205,025,0.4)"); break;
        case 3: updateCircleStroke("RGBA(045,205,045,0.6)"); break;
        case 4: updateCircleStroke("RGBA(065,205,065,0.7)"); break;
        case 5: updateCircleStroke("RGBA(085,205,085,1.0)"); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }
  },[theme, counter]);

  useEffect(() => {
    if (theme === "blue") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(15, 104, 252, 0.2)"); break;
        case 2: updateCircleStroke("RGBA(25, 124, 252, 0.4)"); break;
        case 3: updateCircleStroke("RGBA(45, 144, 252, 0.6)"); break;
        case 4: updateCircleStroke("RGBA(65, 164, 252, 0.7)"); break;
        case 5: updateCircleStroke("RGBA(95, 194, 252, 1.0)"); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }      
  },[theme, counter]);
  
  useEffect(() => {
    if (theme === "yellow") {
      switch (counter) {
        case 1: updateCircleStroke("RGBA(235, 220, 013, 0.2)"); break;
        case 2: updateCircleStroke("RGBA(235, 220, 013, 0.4)"); break;
        case 3: updateCircleStroke("RGBA(235, 220, 013, 0.6)"); break;
        case 4: updateCircleStroke("RGBA(235, 220, 013, 0.7)"); break;
        case 5: updateCircleStroke("RGBA(235, 220, 013, 1.0)"); break;
        default: updateCircleStroke("RGBA(255,0,0,0.29)"); break;      
      }
    }
  },[theme, counter]);

  
//updates the items state array with user inputted item and fetched Flickr image url
//then converts the array to json before saving it into localStorage as "locallySavedItemsArray"
  function arrayBuilder() {
    const termAddedToArray = [...items, {name: searchTerm, url: imageURL}];  
    updateItems(termAddedToArray)
    localStorage.setItem("locallySavedItemsArray", JSON.stringify(termAddedToArray));
  ;}

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
  
  //Adds user inputted term to the items array then updates the API searchTerm. Term is then updated to ''. 
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
      let apiSearchTerm = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=52236809d65bcba6dfb096fa57043737&text=${term}&per_page=1&format=json&nojsoncallback=1&sort=relevance&media=photos&tags=meal%2C+cooking%2C+food&tag_mode=any`;
      const response = await fetch(apiSearchTerm);
      const json = await response.json();
      //state update function    
      updateFetchResult(json);
      //console.log(json); //updates state with returned API data
    }
    catch(err) {
      console.log("Fetch Error");
    }
  };

//Removes an item from the original array via splice. RemovedItems array is updated. User clicks X button to remove item
//Saves a copy of the array into localStorage as JSON "locallySavedItemsArray"
  const handleRemove = (cats) => {
    const itemRemove = items.splice(cats, 1);
    updateRemovedItems({removed: itemRemove});
    localStorage.setItem("locallySavedItemsArray", JSON.stringify(items));
    if(items.length === 0){document.getElementById("emptyCupboardMessage").innerHTML = "The cupboard is empty... &#128532;";} 
  };

//Deletes all items in the cupboard and in localStorage  
  const deleteAllItems = () => { 
    updateItems([]);
    localStorage.clear();
    document.getElementById("emptyCupboardMessage").innerHTML = "The cupboard is empty... &#128532;";
  };

//handles increment/decrement onclicks from IngredientsNumCounter
  const handleIncrement = () => { 
    if(counter <= 4) { updateCounter(counter + 1); } 
    else(alert("5 ingredients maximum"));
  };
 
  const handleDecrement = () => { 
    if(counter >= 2) { updateCounter(counter - 1); }
  };

//Returns random final results based on number of ingredients selected  
  const finalResultsHandler = () => {

      const copyArray = [...items];
      const nameArray = [];
      console.log(copyArray);
      const urlArray = [];

      copyArray.sort(() => 0.5 - Math.random()); //shuffled at beginning

      copyArray.forEach((element) => {
        nameArray.push(element.name);
        urlArray.push(element.url);
        updateUrlArray(urlArray);
        // extracts names from object array, also adds image urls to urlArray
      });
      
      
      if (nameArray.length === 0 || nameArray.length < counter) {return alert("Please add more cupboard items");}
      const shuffled = nameArray;    
      const sliced = shuffled.slice(0, counter);
      const poppedSingle = sliced.pop(0, 1);
      const finaltems = sliced.join(", ") + " & " + poppedSingle + " 🍴";
      //
      // const shuffled = nameArray.sort(() => 0.5 - Math.random());    
      // const sliced = shuffled.slice(0, counter);
      // const poppedSingle = sliced.pop(0, 1);
      // const finaltems = sliced.join(", ") + " & " + poppedSingle + " 🍴"; 

      counter === 1 ? updateResult(poppedSingle) : updateResult(finaltems);
      counter === 1 ? updateUrlArray(urlArray.slice(0,1)) : console.log("counter 1");
      counter === 2 ? updateUrlArray(urlArray.slice(0,2)) : console.log("counter 2");
      counter === 3 ? updateUrlArray(urlArray.slice(0,3)) : console.log("counter 3");
      counter === 4 ? updateUrlArray(urlArray.slice(0,4)) : console.log("counter 4");
      counter === 5 ? updateUrlArray(urlArray.slice(0,5)) : console.log("counter 5");
      /* duplicate the items array. Shuffle new array then slice *(counter num) of items. 
      Pop out the first sliced array item then Join "sliced" and "poppedSingle (now stringified) with ,'s. 
      ternary operator to ensure if only 1 item is shown no "and" prefix is displayed in results
      Update the state via updateResult with only one item if counter === 1 */
  };
   
  // return keyword with wrapper div on same line--important!
  return <div id="App">
            <AppHeader/> 
            <ThemeToggler updateThemeName={updateThemeName}/>
            <InputCupboardItem onSubmit={onSubmitItemHandler} value={term} onChange={inputOnChange} term={term} fetchResult={fetchResult} flickrImgUrlBuilder={flickrImgUrlBuilder}/>
            <DisplayCupboardItems items={items} removeItem={handleRemove} deleteAllItems={deleteAllItems} key={() => items.toString()} imageURL={imageURL} />
            <IngredientsNumCounter finalResultsHandler={finalResultsHandler} handleIncrement={handleIncrement} handleDecrement={handleDecrement} counter={counter} circleStrokeColor={circleStrokeColor}/>
            <FinalMealsDisplay items={items} numberOfIngredientsIcons={counter} urlArray={urlArray} result={result}/>
            <AppFooter/>
          </div>
};

export default App;