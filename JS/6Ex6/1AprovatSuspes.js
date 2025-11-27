"use strict";
alert("Rasen programador pro");

/*
Fes un programa que digui "Suspès" o "Aprovat" depenent de si la nota introduïda és inferior a 5 o no.
Si la nota és inferior a 0 o superior a 10, en lloc de mostrar els missatges anteriors, ha de dir "La nota no pot ser inferior a 0" o "La nota no pot ser superior a 10" .
Fes-ho utilitzant condicionals niuats.
Fes-ho també utilitzant l'estructura if ... else if ... else if ... else ...
*/

const NOTA_MAX = 10;
const NOTA_MIN = 0;

let nota = parseFloat(prompt("Introdueix una nota: "));
//nota = nota.replace(",", ".");

if (nota>= NOTA_MIN && nota<=NOTA_MAX) { 
    if (nota<5){
        alert("Suspès");
    }
    else{ //Nota de 5 a 10
        alert("Aprovat");
    }
} 
else if (nota>NOTA_MAX) {
    alert("La nota no pot ser superior a 10");
}
else { //si la nota és negativa
    alert ("La nota no pot ser inferior a 0");
}