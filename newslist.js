import { news } from "./newsdata.js"
import { elementMaker } from "./elementMaker.js";

var hirek = news.map(function(hir) {

    var img = elementMaker("img", { src: hir.photo }, [])

    var anchor = elementMaker("a", {}, [img])

    var imageDiv = elementMaker("div", { className: "article-image" }, [anchor])

    var cimH3 = elementMaker("h3", { innerText: hir.title }, [])

    var contentAnchor = elementMaker("a", { href: `/news.html?id=${hir.id}`, }, [cimH3])

    var para = elementMaker("p", { innerText: hir.text }, [])

    var buttonAnchor = elementMaker("a", { href: `/news.html?id=${hir.id}`, innerText: hir.button }, [])

    var content = elementMaker("div", { className: "content" }, [contentAnchor, para, buttonAnchor])

    var dogsDiv = elementMaker("div", { className: "article-dogs" }, [imageDiv, content])

    return dogsDiv
});

var hadiNews = document.querySelector('.proba');
for (var i = 0; i < hirek.length; i++) {
    hadiNews.appendChild(hirek[i])
};