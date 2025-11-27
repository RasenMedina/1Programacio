"use strict";
alert("Rasen programador pro");

/*
Fes un programa que permeti a l'usuari anar canviant l'estat d'un semàfor.

Inicialment, el semàfor estarà de color verd.
Cada cop que l'usuari introdueixi la paraula CANVI, el semàfor ha d'avançar al següent estat (de verd a groc, de groc a vermell o de vermell a verd).

El programa finalitzarà si l'usuari escriu qualsevol cosa que no sigui la paraula CANVI.
*/



let resposta;
let estat = 1;

do {
    // Indicar de quin color està el semàfor
    switch (estat) {
        case 1:
            alert("Semàfor en verd");
            break;
        case 2:
            alert("Semàfor en groc");
            break;
        case 3:
            alert("Semàfor en vermell");
            break;
    }

    // Demanar acció i canviar l'estat o marcar per finalitzar
    resposta = prompt("Acció semàfor").trim().toUpperCase();
    if (resposta == "CANVI") {
        ++estat;
        if (estat > 3) estat = 1;
    } else {
        estat = -1;
    }
} while (estat != -1);

// Fi del programa
alert("Programa semàfor finalitzat");