"use strict";

/*Fes un programa que indiqui si una frase comença amb una paraula determinada.*/

let paraula = "hello";
let frase = "world hello";
paraula = paraula.toLowerCase();
frase = frase.toLowerCase();
let comensa = frase.includes(paraula);  //True si la frase conté la paraula
alert("Conté la paraula: " + comensa);
let posicioParaula = frase.indexOf(paraula);
alert("\nPosicio de la paraula: " + posicioParaula);
if (posicioParaula != 0)comensa=false;


alert (frase + "\n" + paraula);
alert ("Que la frase comenci per la paraula indicada és: " + comensa);


/*
let frase = "Tallar el bacallà";
alert(frase.toUpperCase().startsWith("tallar".toUpperCase()));
*/
