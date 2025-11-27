"use strict";

/*Guarda en una variable una frase que tingui una paraula repetida.
Fes que indiqui la primera i l'última posició de la paraula repetida.*/

let frase = "hello world hello";
let paraula = "hello";

alert ("La frase és: " + frase);
alert ("\nLa paraula és: " + paraula);

alert ("\nLa primera posició de la paraula repetida és: ");
alert (frase.indexOf(paraula));
alert ("\nL'última posició de la paraula repetida és: ");
alert (frase.lastIndexOf(paraula));

/*
let frase = "Quan plou, plou tant que sembla que plourà tot el dia";
let primera = frase.indexOf("plou");
let ultima = frase.lastIndexOf("plou");
alert("Primera aparició en la posició " + primera + "\nÚltima aparició: " + ultima);
*/


