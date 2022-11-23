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

/*  HOOKS STATE MANAGEMENT */

  const [term, updateTerm] = useState('');
  const [items, updateItems] = useState(
  [
    {name: 'Hamburger', url: 'https://farm2.staticflickr.com/1256/847548367_09142ee453.jpg'}, 
    {name: 'Chicken Salad', url: 'https://farm1.staticflickr.com/62/179151582_a62d0d8cde.jpg'},
    {name: 'Almonds', url: 'https://farm6.staticflickr.com/5102/5605239684_ee76ba7f79.jpg'}
  ]
  
  );

  // eslint-disable-next-line
  const [removed, updateRemovedItems] = useState([]);
  const [counter, updateCounter] = useState(1);
  const [theme, updateThemeName] = useState("default");
  const [circleStrokeColor, updateCircleStroke] = useState("RGBA(185,185,185,0.29)");
  const [result, updateResult] = useState([]);
  const [urlArray, updateUrlArray] = useState([]);
  
  //API search term states
  const [searchTerm, updateSearchTerm] = useState('');
  const [fetchResult, updateFetchResult] = useState('');//API JSON DATA
  //API image url
  const [imageURL, updateImageUrl] = useState('');
  
  
  /*////////////////////////////// 
  ////// FUNCTIONS & LOGIC ////////////////////////////////////////////////////////////////////
  //////////////////////////////*/
  
  //on page load, this useffect checks localStorage for an array of previously saved cupboard items
  //if nothing is detected then the default array "items" with placeholder images is returned
  useEffect(() => {

    if (localStorage.getItem("locallySavedItemsArray")) {
      const parsedlocalArray = JSON.parse(localStorage.getItem("locallySavedItemsArray") || items);
      
      return updateItems(parsedlocalArray)
    }
  },[]);
  
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
   // Get the button:
   let mybutton = document.getElementById("toTopBtn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
        console.log("visible")
      } else {
        mybutton.style.display = "none";
        console.log("hidden")
      }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  window.onscroll = function() {scrollFunction()};
  
  // return keyword with wrapper div on same line--important!
  return <div id="App">
            <button onClick={topFunction} id="toTopBtn">^</button>
            <AppHeader/> 
            <ThemeToggler updateThemeName={updateThemeName}/>
            <InputCupboardItem updateTerm={updateTerm} value={term} term={term} fetchResult={fetchResult} imageURL={imageURL} updateImageUrl={updateImageUrl} searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} items={items} updateItems={updateItems} updateFetchResult={updateFetchResult}/>
            <DisplayCupboardItems items={items} updateItems={updateItems} updateRemovedItems={updateRemovedItems} key={() => items.toString()} imageURL={imageURL} />
            <IngredientsNumCounter items={items} theme={theme} counter={counter} updateCircleStroke={updateCircleStroke} updateCounter={updateCounter} circleStrokeColor={circleStrokeColor} updateResult={updateResult} updateUrlArray={updateUrlArray}  />
            <FinalMealsDisplay counter={counter} items={items} numberOfIngredientsIcons={counter} urlArray={urlArray} result={result}/>
            <AppFooter/>
          </div>
};

export default App;