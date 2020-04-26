import { pitbullData } from "./pittBullData.js";

var kutyok = pitbullData.map(function(kutyo, index) {

    return `
    <div class="card">
    <img class="card-img-top" src="${kutyo.photo}" alt="Card image cap">
    <div class="card-body">
      <p class="card-text">${kutyo.name}</p>
    </div>
  </div>`
}).join(''); // atkonvertalja  a benne levo tombot egz db stringe ugy h osszefuzi oket egz db ures stringgel!


// kereses class alapjan  // az atkonvertalt adatok behelyezese a domba

var hadiCarousel = document.querySelector('.search-result');
hadiCarousel.innerHTML = kutyok;