"use strict";

/*Fes un programa que indiqui si una paraula està dins d'una frase.*/

let paraula = "hello";
let frase = "hello world";
paraula = paraula.toLowerCase();
frase = frase.toLowerCase();
 
alert (frase + "\n" + paraula);
alert (frase.includes(paraula));

/*
let frase = "Les coses clares i la xocolata espessa";
let paraula = "XoCoLaTa";
frase = frase.toUpperCase();
paraula = paraula.toUpperCase();
let inclosa = frase.includes(paraula);
alert(inclosa);
*/