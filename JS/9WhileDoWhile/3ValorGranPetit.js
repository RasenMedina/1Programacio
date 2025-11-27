"use strict";
alert("Rasen programador pro");

/*
Fes un programa per trobar el número més gran de tots els què introdueixi l'usuari.
Els números han de ser enters i més grans que 0.

Quan l'usuari introdueixi el 0, s'ha de finalitzar el bucle i mostrar el valor més gran.

Modifica el programa perquè indiqui també el valor més petit.
*/

let num = parseInt(prompt("Introdueix un número positiu (0 per acabar):").trim());
let gran = num;
let petit = num;

while (num != 0) {
    if (num>gran) gran = num;
    if (num<petit) petit = num;
    num = parseInt(prompt("Introdueix un número positiu (0 per acabar):").trim());
}

alert("El número més gran és "+ gran);
alert("El número més petit és "+ petit);

/*
let resposta, mesGran, mesPetit;

resposta = parseInt(prompt("Introdueix un número positiu (0 per acabar)"));
mesGran = resposta;
mesPetit = resposta;

while(resposta != 0) {
    resposta = parseInt(prompt("Introdueix un número positiu (0 per acabar)"));
    if (resposta != 0) {
        if (resposta > mesGran) mesGran = resposta;
        if (resposta < mesPetit) mesPetit = resposta;
    }
}

if (mesGran == 0) {
    alert("No has introduït cap número");
} else {
    alert("El número més gran és " + mesGran);
    alert("El número més petit és " + mesPetit);
}

4 - Calcular el factorial
*/

