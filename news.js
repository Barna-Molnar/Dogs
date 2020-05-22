import { news } from "./newsdata.js"

const regexSearch = /(?<=id=)[\w\d-]+/i
var cim = location.search
var result = cim.match(regexSearch)
var badId = "Nincsen a keresesnek megfelelo eredmeny"

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