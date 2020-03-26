'use strict';

// put your own value below!
const apiKey = 'Cta9esCA704MdiuY7jMLiDt124Fvte9IEZ3Qn6c0';
const searchURL = 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=Cta9esCA704MdiuY7jMLiDt124Fvte9IEZ3Qn6c0';

/*
*COMPLETE* The user must be able to set the max number of results, with a default of 10.

The search must trigger a call to NPS's API.

The user must be able to search for parks in one or more states.

The parks in the given state must be displayed on the page. Include at least:
Full name
Description
Website URL

The user must be able to make multiple searches and see only the results for the current search.
*/

//Function that will reference our searchURL variable. 


//MAKE A STORE FOR THE JSON OBJECT
//MAKE THE API SEARCH BY ID

//make a function that maps each state, we access and return the new array of parks


// function searchState(){
//   const state; //Based on user input, text will replace the assignment value.
//   return state;
// }

//make the search bar read states only (state codes are two letters)
//on search submit, return parks belonging to that state and display on a list //clear the search form on new submit
//list includes Full name, description and website URL


//make a function that foreach state access and return each park description
//make a function that foreach state access and return each park website

//make a function that 

// 'use strict';
// FOREACH ACCESS THESE STRINGS FROM THE STORE AND JOIN THEM THEN LIST THEM AS ONE <li> SEGMENT {
// Data.states
// Data.fullName
// data.directionsUrl
//  }


function queryParam() {
  //fetch from searchURL and .then() search for one park.
  let state = 'CA';
  const options = { method: 'GET' };
  //fetch all the park information and compile it into a JSON object
  //put template literal "search" into search form and RUN
  //Fetching this URI gives us the information of the parks in a given state.


  
  fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${state}&api_key=Cta9esCA704MdiuY7jMLiDt124Fvte9IEZ3Qn6c0`, options)
    .then(response => response.json())
    .then(responseJsonObject =>
      //display the string
      displayResults(responseJsonObject))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJsonObject) {
  $('.results').removeClass('hidden');
  $('.results').empty();
  console.log(responseJsonObject);
  //$('.results').html(responseJsonObject.message.map(element => `<img src= "${element}" class="results-img"/>`).join(''));


  //This is the .append() solution. 
  // let currentImg = responseJson.message;
  // currentImg.forEach(element => {
  //   $('.results').append(`<img src="${element}" class="results-img"/>`)
  // });
}

function watchForm() {
  $('js-form').submit(event => {
    event.preventDefault();
    $('#js-results').html(`Hello, I am working`);
    //searchState();
    queryParam();
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});