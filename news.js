import { news } from "./newsdata.js"
import { elementMaker } from "./elementMaker.js"

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

var hir = document.createDocumentFragment()
var title = elementMaker("h1", { innerText: selectedNews.title }, [])
hir.appendChild(title)

var picture = elementMaker("img", { src: selectedNews.photo, alt: selectedNews.title }, [])
var pictureWrapper = elementMaker("div", { className: "article-picture" }, [picture])
var spam = elementMaker("span", { innerHTML: selectedNews.longtext }, [])
var wrapper = elementMaker("div", { className: "article-grid" }, [pictureWrapper, spam])
hir.appendChild(wrapper)


document.getElementById("selected-news").appendChild(hir);