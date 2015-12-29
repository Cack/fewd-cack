// This is what the data returning from IMDB will look like:
var sampleResult = {
  "Search": [
    {
      "Title": "Cool Runnings",
      "Type": "movie",
      "Year": "1993",
      "imdbID": "tt0106611"
    }
  ]
}

// Attach an event listener to the form submit (using jQuery)
$("#movie-search-form").submit(formSubmitted);

// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
  event.preventDefault();
  var url = "http://omdbapi.com/?s=" + $("#query").val();
  $.get(url, resultsReceived);
}

function resultsReceived(results) {
  // Try putting a debugger here and inspecting the results argument
  // The array of movies lives inside results["Search"]
  // See the sampleResult above for an example

  for (var i = 0; i < results["Search"].length; i++) {
    addMovie(results["Search"][i]);
  }


  // // Access the array of movies:
  // results["Search"]
  //
  // // Access the first movie title
  // results["Search"][0]["Title"]
}

function addMovie(movie) {

// get UL #movies
  var list = document.querySelector("#movies");
// create the elements to append to list once they've been retrieved
  var holder = document.createElement("li");
  var name = document.createElement("div");
  var hyperLink = document.createElement("a");
  var year = document.createElement("div");

  hyperLink.textContent = movie["Title"];
  var url2 = "http://www.imdb.com/title/" + movie["imdbID"];
  hyperLink.setAttribute("href", url2);
  year.textContent = movie["Year"];

  list.appendChild(holder);
  holder.appendChild(name);
  name.appendChild(hyperLink);
  holder.appendChild(year);

  holder.classList.add("movie"); // add CSS element style from class above
  name.classList.add("movie-title"); // same
  year.classList.add("movie-release-date"); // same

}
