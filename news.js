import { news } from "./newsdata.js"

// /[^?id=][a-z]+-[a-z]+-.+/ig
const regexSearch = /(?<=id=)[\w\d-]+/i
var cim = location.search
console.log(cim)

var result = cim.match(regexSearch)
console.log(result[0])

var badId = "Nincsen a keresesnek megfelelo eredmenyt"

function selectNews() {
    for (var i = 0; i < news.length; i++) {
        if (news[i]['id'] == result[0]) {
            return news[i];
        } else {
            document.getElementById("selected-news").innerHTML = badId
        }
    }
}
const selectedNews = selectNews();

var hadi = `<h1>
                ${selectedNews.title}
            </h1>
            <div class="article-grid">
                <div class="article-picture">
                    <img src="${selectedNews.photo}" alt="${selectedNews.title}">
                </div>
                ${selectedNews.longtext}
            </div>
                `

document.getElementById("selected-news").innerHTML = hadi;