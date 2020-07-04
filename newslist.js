import { news } from "./newsdata.js"
import { dogData } from "./dogData.js";

var hirek = news.map(function(hir) {
    var dogsDiv = document.createElement("div")
    dogsDiv.className = "article-dogs"
    var imageDiv = document.createElement("div")
    imageDiv.className = "article-image"
    var anchor = document.createElement("a")
    var img = document.createElement("img")
    img.src = hir.photo
    anchor.appendChild(img)
    imageDiv.appendChild(anchor)
    dogsDiv.appendChild(imageDiv)
    var content = document.createElement("div")
    content.className = "content"
    var contentAnchor = document.createElement("a")
    contentAnchor.href = `/news.html?id=${hir.id}`
    var cimH3 = document.createElement("h3")
    cimH3.innerText = hir.title
    contentAnchor.appendChild(cimH3)
    var para = document.createElement("p")
    para.innerText = hir.text
    var buttonAnchor = document.createElement("a")
    buttonAnchor.href = `/news.html?id=${hir.id}`
    buttonAnchor.innerText = hir.button
    content.appendChild(contentAnchor)
    content.appendChild(para)
    content.appendChild(buttonAnchor)
    dogsDiv.appendChild(content)

    return dogsDiv
});

var hadiNews = document.querySelector('.proba');
for (var i = 0; i < hirek.length; i++) {
    hadiNews.appendChild(hirek[i])
};

// var contentAnchor = document.createElement("a")
// contentAnchor.href = `/news.html?id=${hir.id}` /// ??
// var cimH3 = 

// return `
// <div class="article-dogs">
//     <div class="article-image">
//         <a>
//             <img src="${hir.photo}">
//         </a>
//     </div>
//     <div class="content">
//         <a href="/news.html?id=${hir.id}">
//             <h3>${hir.title}</h3>
//         </a>
//         <p>${hir.text}</p>
//         <a href="/news.html?id=${hir.id}">${hir.button}</a>
//     </div>
// </div>
//     `