

// var sampleResult = {
//     "type": "OrganizationSummary",
//     "uuid": "df6628127f970b439d3e12f64f504fbb",
//     "properties": {
//       "permalink": "facebook",
//       "api_path": "organizations/facebook",
//       "web_path": "organization/facebook",
//       "name": "Facebook",
//       "primary_role": "company",
//       "short_description": "Facebook is an online social networking service that enables its users to connect with friends and family as well as make new connections.",
//       "profile_image_url": "https://res.cloudinary.com/crunchbase-production/image/upload/v1408491700/ypqf483smhnqo0rh6mff.png",
//       "domain": "facebook.com",
//       "homepage_url": "http://www.facebook.com",
//       "facebook_url": "https://www.facebook.com/",
//       "twitter_url": "https://twitter.com/facebook",
//       "linkedin_url": "http://www.linkedin.com/company/facebook",
//       "city_name": "Menlo Park",
//       "region_name": "California",
//       "country_code": "USA",
//       "created_at": "2007-05-25T21:22:15-07:00",
//       "updated_at": "2015-04-30T17:19:13-07:00"
//     }
//   }



// Attach an event listener to the form submit (using jQuery)
$("#company-search-form").submit(formSubmitted);

// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
  event.preventDefault();
  var url = "https://api.crunchbase.com/v/3/organizations?name=" + $("#query").val() + "&user_key=8b3f5efb13c3a9d367f67190b608f5a1&callback=JSON";

//   $.ajax({
//       url: url,
//       type: "get",
//       dataType: "json",
//       headers: {
//         "Access-Control-Allow-Headers": "*"
// },
//       success: resultsReceived,
//   });


  $.getJSON(url, resultsReceived);
}

function resultsReceived(results) {


var nouns = results["data"]["items"];

console.log(nouns);

  document.querySelector("#companies").innerHTML = "";

  for (var i = 0; i < nouns.length; i++) {
    addCompany(nouns[i]["properties"]);
  }



}

function addCompany(company) {

// get UL #companies
  var list = document.querySelector("#companies");


// make bucket for company
  var listing = document.createElement("li");
  listing.classList.add("listing");

// get the company name and add to page
  var coname = document.createElement("div");
  coname.textContent = company["name"];  //need in bracket
  coname.classList.add("compname"); // add CSS element style from class in CSS file
  listing.appendChild(coname);

console.log(coname);

// get the company description and add to page
  var description = document.createElement("div");
  description.textContent = company["short_description"];
  description.classList.add("compdescript");
  listing.appendChild(description);

console.log(description);

// get the company homepage and add to page
  var hyperLink = document.createElement("a");
  hyperLink.setAttribute("href", company["homepage_url"]); /// need something here
  hyperLink.textContent = "Website";
  listing.appendChild(hyperLink);

console.log(hyperLink);

// get the company location (city name) and add to page
  var location = document.createElement("div");
  location.textContent = company["region_name"];
  location.classList.add("complocation"); // same
  listing.appendChild(location);

console.log(location);

  list.appendChild(listing);


}
