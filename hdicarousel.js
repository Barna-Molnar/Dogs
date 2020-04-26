// adatok letrehozasa 
import { pitbullData } from "./pittBullData.js"


//rendezes fuggveny
function rendez(array) {
    for (var j = 0; j < array.length - 1; j++) {
        for (var i = 0; i < array.length - 1 - j; i++) {
            if (array[i]['name'] > array[i + 1]['name']) {
                var newelement = array[i];
                array[i] = array[i + 1];
                array[i + 1] = newelement;
            }
        }
    }
}



// az adatok konvertalasa egy html stringgel 
rendez(pitbullData);

var kutyok = pitbullData.map(function(kutyo, index) {
    var addclass;
    if (index == 0) {
        addclass = "visible"
    } else if (index == 1) {
        addclass = 'next'
    } else {
        addclass = ''
    }
    return `<div class="hadi-item  ${addclass}">  
    <div class="carousel-container">
        <div>
            <img src="${kutyo.photo}">
        </div>
        <div class="slide-content">
            <h3>${kutyo.headline}</h3>
            <p>${kutyo.text}</p>
            <button class="slide-button">i want to <i class="fas fa-angle-right"></i></button>
        </div>
    </div>
    </div>`
}).join(''); // atkonvertalja  a benne levo tombot egz db stringe ugy h osszefuzi oket egz db ures stringgel!


// kereses class alapjan  // az atkonvertalt adatok behelyezese a domba

var hadiCarousel = document.querySelector('.hadi-carousel');
hadiCarousel.innerHTML = kutyok;



// belehelyezzuk az indicators  a domba 

const items = [...document.querySelectorAll('.hadi-item')]
const indicators = `<div class="hadi-indicators">

                            ${items.map(function (item) {
    var check = item.className;
    var yesornot = check.includes('visible')
    var visible = (yesornot == true) ? "visible" : "";

    return `<div class="spot ${visible}"></div>`;
}).join('')}
                    </div>`
    ;


hadiCarousel.innerHTML = `${hadiCarousel.innerHTML}${indicators}`


// a carousel elinditasa automatikus valtogatassal
const spots = document.querySelectorAll(".spot");



const itemsnew = [...document.querySelectorAll('.hadi-item')];
function valt() {
    var i = itemsnew.findIndex(function (item) {
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
var hadi = setInterval(function () { valt(); }, 3000);