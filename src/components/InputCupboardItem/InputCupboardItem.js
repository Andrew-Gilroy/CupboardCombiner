import React, { useEffect } from 'react';
import '../InputCupboardItem/InputCupboardItem.css';

function InputCupboardItem({value, term, updateTerm, imageURL, updateImageUrl,searchTerm, updateSearchTerm, items, updateItems, fetchResult, updateFetchResult}) {
  
  //captures user input and updates the term to live reflect the current user input
  const inputOnChange = (event) => {
  updateTerm(event.target.value);
  };

// chained useEffect hooks will watch for changes in state (fetchResult & imageURL)
// when API data has returned, flickrImgUrlBuilder() is invoked. The next useEffect
// will invoke arrayBuilder() to update the items object array with a name and valid image URL.
// takes returned Flickr API data then converts it to a valid image URL
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
      console.log("Image Fetch Error");
    }
  };
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    // Get the button:
    let mybutton = document.getElementById("toTopBtn");
       if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
         console.log("scroll top visible")
       } else {
         mybutton.style.display = "none";
         console.log("scroll top hidden")
       }
     }
 
     // When the user clicks on the button, scroll to the top of the document
     function topFunction() {
       document.body.scrollTop = 0; // For Safari
       document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
     }
   window.onscroll = function() {scrollFunction()};
   

  return <div className="AddCupboardItem">
            <form noValidate onSubmit={onSubmitItemHandler}>
              <input value={value} onChange={inputOnChange} placeholder="What is inside your cupboard?" id="AddCupboardItem-input" required maxLength="19"/>
              <button id="cupboardSubmitBtn">SUBMIT</button>
            </form>
            <button onClick={topFunction} style={{}} id="toTopBtn">&#8657;</button>
          </div>
};

export default InputCupboardItem;