var szamok = [3, 4, 5, 2, 1];

for (var i = 0; i < szamok.length - 1; i++) {
    console.log(`${i + 1}. kor:`)
    for (var j = 0; j < szamok.length - 1 - i; j++) {
        if (szamok[j] > szamok[j + 1]) {
            let csere = szamok[j + 1];
            szamok[j + 1] = szamok[j];
            szamok[j] = csere;
        }
        console.log(szamok);
    }
}

const gyumolcsok = ['szilva', 'alma', 'korte', 'barack'];

for (var j = 0; j < gyumolcsok.length - 1; j++) {
    for (var i = 0; i < gyumolcsok.length - 1 - j; i++) {
        if (gyumolcsok[i] > gyumolcsok[i + 1]) {
            var ujgyumi = gyumolcsok[i];
            gyumolcsok[i] = gyumolcsok[i + 1];
            gyumolcsok[i + 1] = ujgyumi;
        }
    }
}
var szamok = [3, 4, 5, 2, 1];
const gyumolcsok = ['szilva', 'alma', 'korte', 'barack'];

function rendez(array) {
    for (var j = 0; j < array.length - 1; j++) {
        for (var i = 0; i < array.length - 1 - j; i++) {
            if (array[i] > array[i + 1]) {
                var newelement = array[i];
                array[i] = array[i + 1];
                array[i + 1] = newelement;
            }
        }
    }
}

function rendezCsokkeno(array) {
    for (var j = 0; j < array.length - 1; j++) {
        for (var i = 0; i < array.length - 1 - j; i++) {
            if (array[i] < array[i + 1]) {
                var newelement = array[i];
                array[i] = array[i + 1];
                array[i + 1] = newelement;
            }
        }
    }
}