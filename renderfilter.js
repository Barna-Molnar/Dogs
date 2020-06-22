import { dogData } from "./dogData.js";


export var getLocationTemplates = function(selectedLocationFromUrl) {
    var locations = []
    for (var i = 0; i < dogData.length; i++) {
        if (locations.includes(dogData[i]["location"]) === false) {
            locations.push(dogData[i]["location"])
        }
    }
    locations.sort();
    var locationNodes = document.createDocumentFragment()

    var locationNodeArray = locations.map(function(location) {
        var option = document.createElement("option")

        if (location == selectedLocationFromUrl) {
            option.selected = true
            option.value = location
            option.innerText = location
            return option

        } else {
            option.value = location
            option.innerText = location
            return option
        }
    })

    var firstOption = document.createElement("option")
    firstOption.value = ""
    firstOption.innerText = "choose..."
    if (selectedLocationFromUrl == "") {

        firstOption.selected = true

    }
    locationNodes.appendChild(firstOption)



    for (var i = 0; i < locationNodeArray.length; i++) {
        locationNodes.appendChild(locationNodeArray[i])
    }

    return locationNodes

}




export var getBreedTemplates = function(selectedBreedFromUrl) {
    var breeds = []
    for (var i = 0; i < dogData.length; i++) {
        if (breeds.includes(dogData[i]["breed"]) === false) {
            breeds.push(dogData[i]["breed"])
        }
    }
    breeds.sort();
    var breedNodes = document.createDocumentFragment()

    var breedNodeArray = breeds.map(function(breed) {
        var option = document.createElement("option")
        option.value = breed
        option.innerText = breed

        if (breed == selectedBreedFromUrl) {
            option.selected = true
            return option

        } else {
            return option
        }

    })
    var firstOption = document.createElement("option")
    firstOption.value = ""
    firstOption.innerText = "choose..."
    if (selectedBreedFromUrl == "") {

        firstOption.selected = true

    }
    breedNodes.appendChild(firstOption)

    for (var i = 0; i < breedNodeArray.length; i++) {
        breedNodes.appendChild(breedNodeArray[i])
    }
    return breedNodes

}

export var ageGroupValues = {
    Puppy: { min: 0, max: 2 },
    Young: { min: 2, max: 4 },
    Adult: { min: 4, max: 6 },
    Senior: { min: 6, max: Infinity }
};
const ageGroupPriority = {
    Puppy: 1,
    Young: 2,
    Adult: 3,
    Senior: 4
};



export var getAgeTemplates = function(selectedAgeFromUrl) {
    var ages = []
    var ageGroupKeys = Object.keys(ageGroupValues); // ["Puppy", "Young", "Adult", "Senior"]

    for (var i = 0; i < dogData.length; i++) {
        const ageGroup = ageGroupKeys.find(key => dogData[i]["age"] > ageGroupValues[key].min && dogData[i]["age"] <= ageGroupValues[key].max);

        if (!ages.includes(ageGroup || 'Unknown')) {
            ages.push(ageGroup || 'Unknown')
        }
    }
    ages.sort((a, b) => {
        if (ageGroupPriority[a] > ageGroupPriority[b]) {
            return 1;
        }

        if (ageGroupPriority[b] > ageGroupPriority[a]) {
            return -1;
        }

        return 0;
    });
    var ageNodes = document.createDocumentFragment()

    var ageNodeArrey = ages.map(function(num) {

        var option = document.createElement("option")
        option.value = num
        option.innerText = num

        if (num == selectedAgeFromUrl) {

            option.selected = true
            return option

        } else {
            return option
        }

    })

    var firstOption = document.createElement("option")
    firstOption.value = ""
    firstOption.innerText = "choose..."

    if (selectedAgeFromUrl == "") {
        firstOption.selected = true
    }
    ageNodes.appendChild(firstOption)

    for (var i = 0; i < ageNodeArrey.length; i++) {
        ageNodes.appendChild(ageNodeArrey[i])
    }
    return ageNodes
}

export var getGenderTemplates = function(selectedGenderFromUrl) {
    var genders = []
    for (var i = 0; i < dogData.length; i++) {
        if (genders.includes(dogData[i]["gender"]) == false) {
            genders.push(dogData[i]["gender"])
        }
    }
    genders.sort();
    var genderNodes = document.createDocumentFragment()

    var genderNodeArray = genders.map(function(gender) {

        var option = document.createElement("option")
        option.value = gender
        option.innerText = gender

        if (gender == selectedGenderFromUrl) {
            option.selected = true
            return option

        } else {
            return option
        }
    })
    var firstOption = document.createElement("option")
    firstOption.value = ""
    firstOption.innerText = "choose..."

    if (selectedGenderFromUrl == "") {

        firstOption.selected = true
    }
    genderNodes.appendChild(firstOption)

    for (var i = 0; i < genderNodeArray.length; i++) {
        genderNodes.appendChild(genderNodeArray[i])
    }
    return genderNodes
}