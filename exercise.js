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

// Bubble sorting

function rendez(array) {
    for (var j = 0; j < array.length - 1; j++) {
        for (var i = 0; i < array.length - 1 - j; i++) {
            console.log(`osszehasonlit: mit ${i}: ${array[i]} mivel  ${i + 1}: ${array[i + 1]}`)
            if (array[i] > array[i + 1]) {

                console.log(`CSere: mit ${i}: ${array[i]} mivel  ${i + 1}: ${array[i + 1]}`)
                var newelement = array[i];
                array[i] = array[i + 1];
                array[i + 1] = newelement;

            }
        }
    }
}

//Rendez function with while loop 20.04.2020
var szamok = [3, 4, 5, 2, 1];

function whRendez(arr) {

    var j = 0;
    while (j < arr.length - 1) {
        var i = 0;
        while (i < arr.length - 1 - j) {
            if (arr[i] > arr[i + 1]) {
                var newelement = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = newelement;

            }
            i++;
        }
        j++;
    }
    console.log(arr);
    return arr;
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

//RENDEZ FUNCTION WITH i-- 20.04.2020

function rendez(array) {
    for (var j = array.length - 1; j > 0; j--) {
        for (var i = array.length - 1 - j; i >= 0; i--) {
            if (array[i] > array[i + 1]) {
                var newelement = array[i];
                array[i] = array[i + 1];
                array[i + 1] = newelement;
            }
        }
    }
}

// legkisebbszam kereses plussz kiiratas + index 24.04.2020

function legkissebszam(arr) {
    var legkissebindex
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            legkissebindex = i + 1;

        }
    }
    console.log(legkissebindex)
    console.log(arr[legkissebindex]);
}


function selectionSorting(arr) {

    for (var j = 0; j < arr.length - 1; j++) {
        var minindex = j
        for (var i = j + 1; i < arr.length; i++) {
            console.log(`Osszehasonlit: mit ${i}: ${arr[i]} mivel ${minindex}: ${arr[minindex]}`)
            if (arr[i] < arr[minindex]) {
                minindex = i;

            }
        }
        console.log(`CSere: mit ${j}: ${arr[j]} mivel ${minindex}: ${arr[minindex]}`);
        if (arr[j] != arr[minindex]) {
            [arr[j], arr[minindex]] = [arr[minindex], arr[j]];
        }

    }
};