import { news } from "./newsdata.js"

var hirek = news.map(function(hir, index) {
    return `
        <div class="article-dogs">
            <div class="article-image">
                <a><img src="${hir.photo}"></a>
            </div>
            <div class="content">
                <a href="/news.html?id=${hir.id}">
                    <h3>${hir.title}</h3>
                </a>
                <p>${hir.text}</p>
                <a href="/news.html?id=${hir.id}">${hir.button}</a>
            </div>
        </div>
            `
}).join('');

var hadiNews = document.querySelector('.proba');
hadiNews.innerHTML = hirek;