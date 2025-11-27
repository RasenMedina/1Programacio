"use strict";

//Fes un programa que mostri un string però escrit al revés.

let frase= "Hello world";
let nCaracters= frase.length;
alert (frase.charAt(nCaracters-1));
alert (frase.charAt(nCaracters-2));
alert (frase.charAt(nCaracters-3));
alert (frase.charAt(nCaracters-4));
alert (frase.charAt(nCaracters-5));
alert (frase.charAt(nCaracters-6));
alert (frase.charAt(nCaracters-7));
alert (frase.charAt(nCaracters-8));
alert (frase.charAt(nCaracters-9));
alert (frase.charAt(nCaracters-10));
alert (frase.charAt(nCaracters-11));

let novaFrase = "";
alert(frase);
alert(novaFrase);

let caracter = frase.charAt(nCaracters-1);
novaFrase += caracter;
caracter = frase.charAt(nCaracters-2);
novaFrase += caracter;
caracter = frase.charAt(nCaracters-3);
novaFrase += caracter;
caracter = frase.charAt(nCaracters-4);
novaFrase += caracter;
caracter = frase.charAt(nCaracters-5);
novaFrase += caracter;
caracter = frase.charAt(nCaracters-6);
novaFrase += caracter;
caracter = frase.charAt(nCaracters-7);
novaFrase += caracter;
caracter = frase.charAt(nCaracters-8);
novaFrase += caracter; 
caracter = frase.charAt(nCaracters-9);
novaFrase += caracter;
caracter = frase.charAt(nCaracters-10);
novaFrase += caracter;
caracter = frase.charAt(nCaracters-11);
novaFrase += caracter;

alert (novaFrase);