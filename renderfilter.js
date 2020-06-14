import { dogData } from "./dogData.js";


export var getLocationTemplates = function(selectedLocationFromUrl) {
    var locations = []
    for (var i = 0; i < dogData.length; i++) {
        if (locations.includes(dogData[i]["location"]) === false) {
            locations.push(dogData[i]["location"])
        }
    }
    locations.sort();
    var locationTemplates = locations.map(function(location) {
        if (location == selectedLocationFromUrl) {
            return `<option selected value="${location}">${location}</option>`
        } else {
            return `<option value="${location}">${location}</option>`
        }

    }).join('')
    if (selectedLocationFromUrl == "") {
        return `<option selected value="">choose</option>${locationTemplates}`
    } else {
        return `<option value="">choose...</option>${locationTemplates}` // problem
    }
}

export var getBreedTemplates = function(selectedBreedFromUrl) {
    var breeds = []
    for (var i = 0; i < dogData.length; i++) {
        if (breeds.includes(dogData[i]["breed"]) === false) {
            breeds.push(dogData[i]["breed"])
        }
    }
    breeds.sort();
    var breedTemplates = breeds.map(function(breed) {
        if (breed == selectedBreedFromUrl) {
            return `<option selected value="${breed}">${breed}</option>`
        } else {
            return `<option value="${breed}">${breed}</option>`
        }

    }).join('')
    if (selectedBreedFromUrl == "") {
        return `<option selected value="">choose..</option>${breedTemplates}`
    } else {
        return `<option value="">choose...</option>${breedTemplates}` //problem 
    }
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
    var ageTemplates = ages.map(function(num) {
        if (num == selectedAgeFromUrl) {
            return `<option selected value="${num}">${num}</option>`
        } else {
            return `<option value="${num}">${num}</option>`
        }

    }).join('')
    if (selectedAgeFromUrl == "") {
        return `<option value="" selected>choose...</option>${ageTemplates}`
    } else {
        return `<option value="">choose...</option>${ageTemplates}`
    }
}

export var getGenderTemplates = function(selectedGenderFromUrl) {
    var genders = []
    for (var i = 0; i < dogData.length; i++) {
        if (genders.includes(dogData[i]["gender"]) == false) {
            genders.push(dogData[i]["gender"])
        }
    }
    genders.sort();
    console.log(genders)
    console.log(selectedGenderFromUrl)
    var genderTemplates = genders.map(function(gender) {
        console.log(gender)
        if (gender == selectedGenderFromUrl) {
            return `<option selected value="${gender}">${gender}</option>`
        } else {
            return `<option value="${gender}">${gender}</option>`
        }
    }).join('')
    if (selectedGenderFromUrl == "") {
        return `<option selected value="">choose..</option>${genderTemplates}`
    } else {
        return `<option value="">choose..</option>${genderTemplates}`
    }
}