import { getLocationTemplates, getBreedTemplates, getAgeTemplates, getGenderTemplates } from './renderfilter.js'; //funkciok  importolasa a renderfilterbol

var locationTemplates = getLocationTemplates()
var locationFilter = document.getElementById("locationFilter")
locationFilter.innerHTML = locationTemplates



var breedTemplates = getBreedTemplates()
var breedFilter = document.getElementById("breedFilter")
breedFilter.innerHTML = breedTemplates

var ageTemplates = getAgeTemplates()
var ageFilter = document.getElementById("ageFilter")
ageFilter.innerHTML = ageTemplates

var genderTemplates = getGenderTemplates()
var genderFilter = document.getElementById("genderFilter")
genderFilter.innerHTML = genderTemplates


document.getElementById("dogSearchButton").addEventListener("click", function(event) {
    event.stopPropagation()
    event.preventDefault()

    location.replace(`http://127.0.0.1:5501/alldogs.html?location=${locationFilter.value}&age=${ageFilter.value}&breeds=${breedFilter.value}&gender=${genderFilter.value}`)
})