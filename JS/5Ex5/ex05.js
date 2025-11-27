"use strict";

// El mètode alert() serveix per mostrar missatges i dades
alert("Rasen programador pro");

//Fes un programa que calculi la hipotenusa d'un triangle rectangle i l'area d'un cercle utilitzant constants i mètodes de la classe Math.
//Els valors de la base, l'altura i el radi han de ser variables.

let n1, n2;
 
n1 = parseInt(prompt("Introdueix el primer número"));
n2 = parseInt(prompt("Introdueix el segon número"));
 
if (n1 % n2 == 0) {
    alert(n1 + " és múltiple de " + n2);
} else {
    alert(n1 + " NO és múltiple de " + n2);
}