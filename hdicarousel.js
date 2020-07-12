// adatok letrehozasa 
import { dogData } from "./dogData.js"
import { elementMaker } from "./elementMaker.js";

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

    var picture = elementMaker("img", { src: kutyo.photo }, [])

    var div = elementMaker("div", {}, [picture])

    var para = elementMaker("p", { innerText: kutyo.text }, [])

    var headline = elementMaker("h3", { innerText: kutyo.headline }, [])

    var i = elementMaker("i", { className: "fas fa-angle-right" }, [])

    var button = elementMaker("button", { className: "slide-button", innerText: "i want to " }, [i])

    var slideDiv = elementMaker("div", { className: "slide-content" }, [headline, para, button])

    var carouselCont = elementMaker("div", { className: "carousel-container" }, [div, slideDiv, ])

    var kutyi = elementMaker("div", { className: `hadi-item  ${addclass}` }, [carouselCont])

    return kutyi;


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

    var div = elementMaker("div", { className: `spot ${visible}` })

    return div
})
var indicators = elementMaker("div", { className: "hadi-indicators" })

itemDivs.forEach(div => indicators.appendChild(div))

hadiCarousel.appendChild(indicators)

// a carousel elinditasa automatikus valtogatassal
const spots = document.querySelectorAll(".spot");

const itemsnew = [...document.querySelectorAll('.hadi-item')];

function valt() {
    var i = itemsnew.findIndex(function(item) {
        return item.className.includes('visible')
    });

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