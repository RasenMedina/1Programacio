"use strict";
alert("Rasen programador pro");

/*
En alguns països, les notes es donen amb lletres: A = Excel·lent (9-10), B = Notable (7-8), C = Aprovat (5-6), D = Suspès (1-4).
Fes un programa on, introduïnt una d'aquestes notes (A, B, C o D) ho tradueixi a un dels textos anteriors.
Si no s'introdueix una d'aquestes lletres, ha de mostrar un error.
*/

let nota = prompt ("Escriu la nota (A,B,C,D)").trim().chartAt(0).toUpperCase(nota);

//Seleccionar missatge en funció de la qualificació
switch (nota){
    case 'A':
        alert ("Nota: Excel·lent (9-10)");
        break;
    case 'B':
        alert ("Nota: Notable (7-8)");
        break;
    case 'C':
        alert("Nota: Aprovat (5-6)");
        break;
    case 'D':
        alert("Nota: Suspès (1-4)");
        break;
    default:
        alert("No reconec la nota " + nota);
}