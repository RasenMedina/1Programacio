"use strict";
alert("Rasen programador pro");

/*
Fes un programa que, introduïnt el nom del mes, digui quants dies té.
Si el mes és febrer, ha de demanar l'any i dir 29 o 28 depenent si és any de traspàs o no.
Si no es reconeix el nom, ha de mostrar un error.
*/

let mes = prompt("Escriu el primer valor: ").trim().toUpperCase();
let any;

// Mostrar dies del mes (si és febrer, preguntar any)
switch (mes) {
    case "GENER":
    case "MARÇ":
    case "MAIG":
    case "JULIOL":
    case "AGOST":
    case "OCTUBRE":
    case "DESEMBRE":
        // Mesos de 31 dies
        alert("Nombre de dies: 31");
        break;

    case "ABRIL":
    case "JUNY":
    case "SETEMBRE":
    case "NOVEMBRE":
        // Mesos de 30 dies
        alert("Nombre de dies: 30");
        break;

    case "FEBRER":
        // Preguntar any
        any = parseInt(prompt("Febrer pot tenir 28 o 29 dies depenent de l'any\nPer a quin any ho vols saber? "));

        // Mostrar 29 o 28 dies en funció de si és any de traspàs o no
        if (any % 400 == 0 || (any % 4 == 0 && any % 100 != 0))
            alert("Nombre de dies: 29");
        else
            alert("Nombre de dies: 28");
        break;

    default:
        // Error sino reconeix el nom
        alert("No reconec el mes " + mes);
}

