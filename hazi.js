// Ird at map-el
var animals = ['dog', 'cat', 'mouse'];
var uppercaseAnimals = [];

for (var i = 0; i < animals.length; i++) {
    uppercaseAnimals.push(animals[i].toUpperCase());
}
console.log(uppercaseAnimals);

// Hw number one with map 

var upperstuff = animals.map(function(animal) {
    return animal.toUpperCase()
});

console.log(upperstuff);

// HW number one with while loop 
var animals = ['dog', 'cat', 'mouse'];
var whileArray = [];
var i = 0;
while (i < animals.length) {
    whileArray.push(animals[i].toUpperCase());
    i++
}
console.log(whileArray);


// Number Two
// Ird at for loop-al

var words = ['apple', 'animal', 'asshole', 'bull', 'bilingual', 'bob', 'cat', 'car'];

var wordLengths = words.map(function(word) {
    return word.length > 4 ? "long" : "short";
});

console.log(wordLengths);

// HW number two with for loop

var array = []

for (var i = 0; i < words.length; i++) {
    var sorl = (words[i].length > 4) ? "long" : "short";
    array.push(sorl)
};

console.log(array);

// Hw Number Two with while loop 

var words = ['apple', 'animal', 'asshole', 'bull', 'bilingual', 'bob', 'cat', 'car'];
var whileLength = [];
var i = 0;
while (i < words.length) {
    var ask = (words[i].length > 4) ? "long" : "short";
    whileLength.push(ask)
    i++;
};


console.log(whileLength);


// dogtemplate mappel
function convertDog(dog, index) {
    var yesornot = (index == 0) ? "active" : "";
    return `<div class="carousel-item ${yesornot} ">  
    <div class="carousel-container">
        <div>
            <img src="${dog.photo}">
        </div>
        <div class="slide-content">
            <h3>${dog.headline}</h3>
            <p>${dog.text}</p>
            <button class="slide-button">i want to <i class="fas fa-angle-right"></i></button>
        </div>
    </div>
</div>
    
    `
}

var dogTemplate = dogData.map(convertDog);
console.log(dogTemplate);
document.getElementById("try").innerHTML = dogTemplates.join('')

function renderDog(dog, index) {
    var yesornot = (index == 0) ? "active" : "";
    var targetDiv = document.getElementById("try");
    targetDiv.innerHTML = `${targetDiv.innerHTML}<div class="carousel-item ${yesornot} ">  
    <div class="carousel-container">
        <div>
            <img src="${dog.photo}">
        </div>
        <div class="slide-content">
            <h3>${dog.headline}</h3>
            <p>${dog.text}</p>
            <button class="slide-button">i want to <i class="fas fa-angle-right"></i></button>
        </div>
    </div>
</div>
    
    `
}

dogData.forEach(renderDog);

// dogtemplate with while loop


var whiledog = [];
var i = 0;
while (i < dogData.length) {
    var yesornot = (i == 0) ? "active" : "";
    var kutyo = `<div class="carousel-item ${yesornot} ">  
                        <div class="carousel-container">
                            <div>
                                <img src="${dogData[i].photo}">
                            </div>
                            <div class="slide-content">
                                <h3>${dogData[i].headline}</h3>
                                <p>${dogData[i].text}</p>
                                <button class="slide-button">i want to <i class="fas fa-angle-right"></i></button>
                            </div>
                        </div>
                    </div>`
    whiledog.push(kutyo)
    i++
};
console.log(whiledog);


function confirmEnding(str, target) {
    var barni = ""
    for (var i = str.length - 1; i >= (str.length - target.length); i--) {
        console.log(i)
        var targetindex = i - (str.length - target.length)
        if (target[targetindex] !== str[i]) {
            return false
        }
    }
    return true
}

console.log(confirmEnding("Connor", "n"));