"use strict";

//Fes un programa que calculi la hipotenusa d'un triangle rectangle i l'area d'un cercle utilitzant constants i mètodes de la classe Math.

let base = 15;
let altura = 21;
let radi = 10;
alert("Hipotenusa: " + Math.sqrt(base * base + altura * altura));
alert("Àrea cercle: " + Math.PI * Math.pow(radi, 2));
