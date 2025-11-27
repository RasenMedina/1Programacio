"use strict";
alert("Rasen programador pro");

/*
Ara es tracta d'introduir un número enter entre 1 i 10 i mostrar la lletra equivalent: 9-10=A, 7-8=B, 5-6=C, 1-4=Suspès.
Si el valor introduït no és cap dels anteriors, ha de mostrar un dels següents missatges: "La nota no pot ser inferior a 1" o "La nota no pot ser superior a 10".
*/

// Introduir la nota
let nota = parseInt(prompt("Escriu la nota (1 a 10)").trim());

if (isNaN(nota)) alert ("La nota introduïda no és un valor numèric");

// Mostrar lletra equivalent o error
switch (nota) {
    case 9:
    case 10:
        alert("Nota: A");
        break;
    case 7:
    case 8:
        alert("Nota: B");
        break;
    case 5:
    case 6:
        alert("Nota: C");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
        alert("Nota: D");
        break;
    default:
        if (nota < 1) alert("La nota no pot ser inferior a 1");
        else if (nota > 10) alert("La nota no pot ser superior a 10");
}