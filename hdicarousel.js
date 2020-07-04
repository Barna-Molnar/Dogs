// adatok letrehozasa 
import { dogData } from "./dogData.js"

function compare(a, b) {
    var adate = new Date(a['date'])
    var bdate = new Date(b['date'])

    if (adate > bdate) {
        return -1;
    }
    if (adate < bdate) {
        return 1;
    }
    // a must be equal to b
    return 0;
}

// az adatok konvertalasa egy html stringgel 
const copyPitbullData = dogData.map(function(item) { return item });
copyPitbullData.sort(compare);
var slicePitbull = copyPitbullData.slice(0, 5);

var kutyok = slicePitbull.map(function(kutyo, index) {
    var addclass;
    if (index == 0) {
        addclass = "visible"
    } else if (index == 1) {
        addclass = 'next'
    } else {
        addclass = ''
    }

    var kutyi = document.createElement("div")
    kutyi.className = `hadi-item  ${addclass}`
    var carouselCont = document.createElement("div")
    carouselCont.className = "carousel-container";
    var div = document.createElement("div")
    var picture = document.createElement("img")
    picture.src = kutyo.photo
    div.appendChild(picture)
    carouselCont.appendChild(div)
    kutyi.appendChild(carouselCont)
    var slideDiv = document.createElement("div")
    slideDiv.className = "slide-content"
    carouselCont.appendChild(slideDiv)
    var headline = document.createElement("h3")
    headline.innerText = kutyo.headline
    slideDiv.appendChild(headline)
    var para = document.createElement("p")
    para.innerText = kutyo.text
    slideDiv.appendChild(para)
    var button = document.createElement("button")
    button.className = "slide-button"
    button.innerText = "i want to "
    var i = document.createElement("i")
    i.className = "fas fa-angle-right"
    button.appendChild(i)
    slideDiv.appendChild(button)

    return kutyi;

    // return `<div class="hadi-item  ${addclass}">  
    //             <div class="carousel-container">
    //                 <div>
    //                     <img src="${kutyo.photo}">
    //                 </div>
    //                 <div class="slide-content">
    //                     <h3>${kutyo.headline}</h3>
    //                     <p>${kutyo.text}</p>
    //                     <button class="slide-button">i want to <i class="fas fa-angle-right"></i></button>
    //                 </div>
    //             </div>
    //         </div>`
}); // atkonvertalja  a benne levo tombot egy db stringe ugy h osszefuzi oket egy db ures stringgel!


// kereses class alapjan  // az atkonvertalt adatok behelyezese a domba

var hadiCarousel = document.querySelector('.hadi-carousel');
for (var i = 0; i < kutyok.length; i++) {
    hadiCarousel.appendChild(kutyok[i])
}

// belehelyezzuk az indicators  a domba 

const items = [...document.querySelectorAll('.hadi-item')]
const itemDivs = items.map(function(item) {
    var check = item.className;
    var yesornot = check.includes('visible')
    var visible = (yesornot == true) ? "visible" : "";

    var div = document.createElement("div")
    div.className = `spot ${visible}`

    return div
})
var indicators = document.createElement("div")
indicators.className = "hadi-indicators"
itemDivs.forEach(div => indicators.appendChild(div))

hadiCarousel.appendChild(indicators)

// a carousel elinditasa automatikus valtogatassal
const spots = document.querySelectorAll(".spot");

const itemsnew = [...document.querySelectorAll('.hadi-item')];

function valt() {
    var i = itemsnew.findIndex(function(item) {
        return item.className.includes('visible')
    });
    console.log(i);
    itemsnew[i].classList.remove("visible");
    spots[i].classList.remove("visible");
    if (i == itemsnew.length - 1) {
        itemsnew[0].classList.add("visible")
        itemsnew[0].classList.remove("next")
        itemsnew[1].classList.add("next");
        spots[0].classList.add("visible")
    } else {
        itemsnew[i + 1].classList.add("visible");
        itemsnew[i + 1].classList.remove("next");
        spots[i + 1].classList.add("visible");
        if (i == itemsnew.length - 2) {
            itemsnew[0].classList.add("next");
        } else {
            itemsnew[i + 2].classList.add("next");
        }
    }
}
window.hadi = setInterval(function() { valt(); }, 3000);