const dogData = [

    {
        name: "whatsaupdogs",
        photo: "/whatsaupdogs.jpg",
        headline: "Lorem ipsum",
        text: "lorem ipsum dolor sit amen valami de nem irja automatikusan es nekem kurvara nincsne kedvem ennel t0bbet beleirni"
    },

    {
        name: "frbulldog",
        photo: "/franciabull1x1.jpg",
        headline: "Lorem ipsum",
        text: "lorem ipsum dolor sit amen valami de nem irja automatikusan es nekem kurvara nincsne kedvem ennel t0bbet beleirni"
    },

    {
        name: "Ali",
        photo: "/IMG-1584223733316.jpg",
        headline: "Lorem ipsum",
        text: "lorem ipsum dolor sit amen valami de nem irja automatikusan es nekem kurvara nincsne kedvem ennel t0bbet beleirni"
    },

    {
        name: "frbullfall",
        photo: "/Französische-Bulldogge-im-Erbst-1x1.jpg",
        headline: "Lorem ipsum",
        text: "lorem ipsum dolor sit amen valami de nem irja automatikusan es nekem kurvara nincsne kedvem ennel t0bbet beleirni"
    },

    {
        name: "Brownpit",
        photo: "/Brownpit.jpg",
        headline: "Lorem ipsum",
        text: "lorem ipsum dolor sit amen valami de nem irja automatikusan es nekem kurvara nincsne kedvem ennel t0bbet beleirni"
    },
    {
        name: "Cukikutya",
        photo: "/Cukikutya.jpg",
        headline: "Lorem ipsum",
        text: "lorem ipsum dolor sit amen valami de nem irja automatikusan es nekem kurvara nincsne kedvem ennel t0bbet beleirni"
    },
    {
        name: "Kidpit",
        photo: "/Kidpit.jpg",
        headline: "Lorem ipsum",
        text: "lorem ipsum dolor sit amen valami de nem irja automatikusan es nekem kurvara nincsne kedvem ennel t0bbet beleirni"
    },
    {
        name: "Babybul3",
        photo: "/Babybul3.jpg",
        headline: "Lorem ipsum",
        text: "lorem ipsum dolor sit amen valami de nem irja automatikusan es nekem kurvara nincsne kedvem ennel t0bbet beleirni"
    }

]




var dogTemplates = []

for (var i = 0; i < dogData.length; i++) {
    var yesornot = (i == 0) ? "active" : "";
    var kutyo = `<div class="carousel-item ${yesornot} ">  
                        <div class="carousel-container">
                            <div>
                                <img src="${dogData[i].photo}">
                            </div>
                            <div class="slide-content">
                                <h3>${dogData[i].headline}</h3>
                                <p>${dogData[i].text}</p>
                                <button class="slide-button">i want to <i class="fas fa-angle-right"></i></button>
                            </div>
                        </div>
                    </div>`
    dogTemplates.push(kutyo)
};




console.log(dogTemplates);
document.getElementById("try").innerHTML = dogTemplates.join('')


/*var isActive = (dog([i]) === "0") ? "active" : "";  


<div class="carousel-item">  
            <div class="carousel-container">
                <div>
                    <img src="${dog.photo}">
                </div>
                <div class="slide-content">
                    <h3>${dog.headline}</h3>
                    <p>${dog.text}</p>
                    <button class="slide-button">i want to <i class="fas fa-angle-right"></i></button>
                </div>
            </div>
        </div>

        <img  src="${dog.photo}">
    <h2 >${dog.name} <span class="species">(${dog.headline})</span></h2>
*/