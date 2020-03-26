// eslint-disable-next-line strict
'use-strict'
//Takes the form the user puts in, and returns the string. 
function userInput() { return $('#js-search-term').val(); }

function userLimitInput() { return $('#js-max-results').val(); }
// function fetchesDescription(obj){
//   let parkList = obj.data;
//   let describePark = parkList.description;
//   return describePark;
// }

// //fetches URL
// function fetchesURL(parkList){
//   console.log(parkList);
//   return parkList.url;
// }

// //fetches fullName
// function fullName(parkList){
//   return parkList.fullName;
// }

function printsDescription(jsonObject) {
  const parkList = jsonObject.data;
  parkList.forEach(park => {
    $('#park-list').append(`<br /><br />` + park.fullName);
    $('#park-list').append(`<br /><br />` + park.description);
    $('#park-list').append(`<br /><br />` + park.url);
  });

}
function fetchJSONObject() {
  let options = { method: "GET" };
  fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${userInput()}&limit=${userLimitInput()}&api_key=Cta9esCA704MdiuY7jMLiDt124Fvte9IEZ3Qn6c0`, options)
    .then(response => response.json())
    .then(responseJSONObject => printsDescription(responseJSONObject));
}



function watchForm() {
  $('#js-form').submit(event => {
    event.preventDefault();
    //Empty the proper p tags.
    $('#js-description').empty();
    $('#js-url').empty();
    $('#js-full-name').empty();
    fetchJSONObject();
    //searchState();
    //queryParam();
  });
}

$(function () {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});