"use strict";

/*A partir de l'exercici anterior, retalla tot el text que hi ha entre la primera i l'última paraula repetida.*/


let frase = "Quan plou, plou tant que sembla que plourà tot el dia";
let paraula = "plou";
alert ("frase: " + frase);
alert ("\nparaula: " + paraula);

let primera = frase.indexOf(paraula);
let ultima = frase.lastIndexOf(paraula) + paraula.length;
alert("El text entre les dues paraules incloses:")
alert(frase.substring(primera, ultima));

primera = frase.indexOf(paraula) + paraula.length;
ultima = frase.lastIndexOf(paraula);
alert ("El text entre les dues paraules sense incloure:")
alert(frase.substring(primera, ultima));


