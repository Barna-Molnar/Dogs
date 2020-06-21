import { dogData } from "./dogData.js";
import { getLocationTemplates, getBreedTemplates, getAgeTemplates, getGenderTemplates, ageGroupValues } from './renderfilter.js';

// regex for location + get location from url + assign to variable
const regexLocation = /(?<=location=)[\w\d-%]+/i
var selectedLocationFromUrl = decodeURI((location.search.match(regexLocation) || [])[0])

// regex for breed + get breed from url + assign to variable
const regexBreed = /(?<=breeds=)[\w\d-%]+/i
var selectedBreedFromUrl = decodeURI((location.search.match(regexBreed) || [])[0])

//regex for age + get age from url + assign to variable
const regexAge = /(?<=age=)[\w\d-%]+/i
var selectedAgeFromUrl = decodeURI((location.search.match(regexAge) || [])[0])

// regex for gender + get gender from url + assign to a variable
const regexGender = /(?<=gender=)[\w\d-%]+/i
var selectedGenderFromUrl = decodeURI((location.search.match(regexGender) || [])[0])

console.log(selectedAgeFromUrl)
console.log(selectedBreedFromUrl)
console.log(selectedLocationFromUrl)
console.log(selectedGenderFromUrl)

// kereses class alapjan  // az atkonvertalt adatok behelyezese a domba
var searchResult = document.querySelector('.search-result'); // 



// call getLocationTemplates function with an argument (if it is available/selected) (import from renderfilter ->)
var locationTemplates = getLocationTemplates(selectedLocationFromUrl)
console.log()

// searching to ID  // converted/selceted data put in the dom 
var locationFilter = document.getElementById("locationFilter")
locationFilter.appendChild(locationTemplates)

// locationfilter event figyeles,ha valtozas van call handleFilterChange function
locationFilter.addEventListener("change", handleFilterChange)



// Breed filter creating with for loop

var breedTemplates = getBreedTemplates(selectedBreedFromUrl)

var breedFilter = document.getElementById("breedFilter")
breedFilter.appendChild(breedTemplates)

breedFilter.addEventListener("change", handleFilterChange)



// valami lesz majd belole de egyenlore semmi >D>D>D>D>D
var ageTemplates = getAgeTemplates(selectedAgeFromUrl)

var ageFilter = document.getElementById("ageFilter")
ageFilter.innerHTML = ageTemplates

//`<option value="" selected>choose..</option>${ageTemplates}`

ageFilter.addEventListener("change", handleFilterChange)

// gender trying

var genderTemplates = getGenderTemplates(selectedGenderFromUrl)
var genderFilter = document.getElementById("genderFilter")
genderFilter.innerHTML = genderTemplates

genderFilter.addEventListener("change", handleFilterChange)



handleFilterChange(dogData);

export function handleFilterChange() {
    var selectedLocation = locationFilter.value

    var dogDataForLocation = []
    if (selectedLocation == "") {
        dogDataForLocation = dogData
    } else {
        for (var i = 0; i < dogData.length; i++) {
            if (dogData[i]["location"] == selectedLocation) {
                dogDataForLocation.push(dogData[i])
            }
        }
    }
    var selectedBreed = breedFilter.value
    var dogDataForBreed = []

    if (selectedBreed == "") {
        dogDataForBreed = dogDataForLocation
    } else {
        for (var i = 0; i < dogDataForLocation.length; i++) {
            if (dogDataForLocation[i]["breed"] == selectedBreed) {
                dogDataForBreed.push(dogDataForLocation[i])
            }
        }
    }
    var selectedGender = genderFilter.value
    var dogdataForGender = []
    if (selectedGender == "") {
        dogdataForGender = dogDataForBreed
    } else {
        for (var i = 0; i < dogDataForBreed.length; i++) {
            if (dogDataForBreed[i]["gender"] == selectedGender) {
                dogdataForGender.push(dogDataForBreed[i])
            }
        }
    }

    var selectedAge = ageFilter.value

    var dogDataForAge = []
    if (selectedAge == "") {

        dogDataForAge = dogdataForGender
    } else {

        var selectedAgeValues = ageGroupValues[selectedAge];

        for (var i = 0; i < dogdataForGender.length; i++) {

            if (dogdataForGender[i]["age"] > selectedAgeValues.min && dogdataForGender[i]["age"] <= selectedAgeValues.max) {
                dogDataForAge.push(dogdataForGender[i])
            }
        }
    }

    renderDogs(dogDataForAge);
}

function renderDogs(dogs) {
    searchResult.innerHTML = "";

    var dogCards = dogs.map(dog => {
        var cardDiv = document.createElement("div")
        cardDiv.className = "card"
        var imgCard = document.createElement("img")
        imgCard.className = "card-img-top"
        imgCard.src = dog.photo
        imgCard.alt = "Card image cap"
        cardDiv.appendChild(imgCard)
        var cardBody = document.createElement("div")
        cardBody.className = "card-body"
        var pCard = document.createElement("p")
        pCard.className = "card-text"
        pCard.innerText = dog.name
        cardBody.appendChild(pCard)
        cardDiv.appendChild(cardBody)



        return cardDiv
    })
    for (var i = 0; i < dogCards.length; i++) {
        searchResult.appendChild(dogCards[i])
    }
}

// searchResult.innerHTML = dogs.map(function(dog) {
//     return ` <div class="card">
// <img class="card-img-top" src="${dog.photo}" alt="Card image cap">
// <div class="card-body">
// <p class="card-text">${dog.name}</p>
// </div>
// </div>`
// }).join("")