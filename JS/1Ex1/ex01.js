"use strict";

// El mètode alert() serveix per mostrar missatges i dades
alert("Rasen programador pro");

//Fes un programa que calculi la hipotenusa d'un triangle rectangle i l'area d'un cercle utilitzant constants i mètodes de la classe Math.
//Els valors de la base, l'altura i el radi han de ser variables.

let base = 4;
let altura = 5;              
let radi = 3;
let hipotenusaTriangle = Math.sqrt(base*base+altura*altura);
let area = Math.PI * Math.pow(radi,2);
let missatge = "El valor de la hipotenusa és " +  hipotenusaTriangle + " Y el valor de l' àrea del cercle és " + area; 
alert(missatge)

/*let base = 15;
let altura = 21;
let radi = 10;
alert("Hipotenusa: " + Math.sqrt(base * base + altura * altura));
alert("Àrea cercle: " + Math.PI * Math.pow(radi, 2)); */