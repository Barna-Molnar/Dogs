import { dogData } from "./dogData.js";




// kereses class alapjan  // az atkonvertalt adatok behelyezese a domba

var searchResult = document.querySelector('.search-result');
renderDogs(dogData);

// Location filter creating with for loop

var locations = []
for (var i = 0; i < dogData.length; i++) {
    if (locations.includes(dogData[i]["location"]) === false) {
        locations.push(dogData[i]["location"])
    }
}
locations.sort();

var locationTemplates = locations.map(function(location) {
    return `<option value="${location}">${location}</option>`
}).join('')

var locationFilter = document.getElementById("locationFilter")
locationFilter.innerHTML = `<option value="" selected>choose..</option>${locationTemplates}`

locationFilter.addEventListener("change", handleFilterChange)

// Breed filter creating with for loop

var breeds = []
for (var i = 0; i < dogData.length; i++) {
    if (breeds.includes(dogData[i]["breed"]) === false) {
        breeds.push(dogData[i]["breed"])
    }
}
breeds.sort();

var breedTemplates = breeds.map(function(breed) {
    return `<option value="${breed}">${breed}</option>`
}).join('')

var breedFilter = document.getElementById("breedFilter")
breedFilter.innerHTML = `<option value="" selected>choose..</option>${breedTemplates}`

breedFilter.addEventListener("change", handleFilterChange)

var ageGroupValues = {
    Puppy: { min: 0, max: 2 },
    Young: { min: 2, max: 4 },
    Adult: { min: 4, max: 6 },
    Senior: { min: 6, max: Infinity }
};

// valami lesz majd belole de egyenlore semmi >D>D>D>D>D
var ages = []
var ageGroupKeys = Object.keys(ageGroupValues); // ["Puppy", "Young", "Adult", "Senior"]
console.log(ageGroupKeys)
for (var i = 0; i < dogData.length; i++) {
    const ageGroup = ageGroupKeys.find(key => dogData[i]["age"] > ageGroupValues[key].min && dogData[i]["age"] <= ageGroupValues[key].max);
    console.log(ageGroup)
    if (!ages.includes(ageGroup || 'Unknown')) {
        ages.push(ageGroup || 'Unknown')
    }
}

// dogData.forEach(dog => {
//     const ageGroup = Object.keys(ageGroupValues).find(key => dog.age > ageGroupValues[key].min && dog.age <= ageGroupValues[key].max);
//     ages.includes(ageGroup || 'Unknown') || ages.push(ageGroup || 'Unknown');
// });

//////////////////////////////////////////
//var ages = []


// Age filter creating with foor loop
// var puppy = { min: 0, max: 2 }
// var young = { min: 2, max: 4 }
// var adult = { min: 4, max: 6 }


// for (var i = 0; i < dogData.length; i++) {
//     if (dogData[i]["age"] <= puppy.max) {
//         if (!ages.includes("Puppy")) {
//             ages.push("Puppy")
//         }
//     } else if (dogData[i]["age"] > 2 && dogData[i]["age"] <= young.max) {
//         if (!ages.includes("Young")) {
//             ages.push("Young")
//         }
//     } else if (dogData[i]["age"] > 4 && dogData[i]["age"] <= adult.max) {
//         if (!ages.includes("Adult")) {
//             ages.push("Adult")
//         }
//     } else {
//         if (!ages.includes("Senior")) {
//             ages.push("Senior")
//         }
//     }
// }
const ageGroupPriority = {
    Puppy: 1,
    Young: 2,
    Adult: 3,
    Senior: 4
};
ages.sort((a, b) => {
    if (ageGroupPriority[a] > ageGroupPriority[b]) {
        return 1;
    }

    if (ageGroupPriority[b] > ageGroupPriority[a]) {
        return -1;
    }

    return 0;
});

var ageTemplates = ages.map(function(num) {
    return `<option value="${num}">${num}</option>`
}).join('')

var ageFilter = document.getElementById("ageFilter")


ageFilter.innerHTML = `<option value="" selected>choose..</option>${ageTemplates}`

ageFilter.addEventListener("change", handleFilterChange)

function handleFilterChange() {
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

    var selectedAge = ageFilter.value
    var dogDataForAge = []
    if (selectedAge == "") {
        dogDataForAge = dogDataForBreed
    } else {
        const selectedAgeValues = ageGroupValues[selectedAge];
        for (var i = 0; i < dogDataForBreed.length; i++) {
            if (dogData[i]["age"] > selectedAgeValues.min && dogData[i]["age"] <= selectedAgeValues.max) {
                dogDataForAge.push(dogDataForBreed[i])
            }
        }
    }
    renderDogs(dogDataForAge);
}

function renderDogs(dogs) {
    searchResult.innerHTML = dogs.map(function(dog) {
        return ` <div class="card">
  <img class="card-img-top" src="${dog.photo}" alt="Card image cap">
  <div class="card-body">
    <p class="card-text">${dog.name}</p>
  </div>
</div>`
    }).join("")
}