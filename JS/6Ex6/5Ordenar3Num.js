"use strict";
alert("Rasen programador pro");

/*
Introdueix tres números enters i mostra'ls ordenats de més petit a més gran.
*/

let num1 = parseFloat(prompt("Introdueix el primer número: "));
let num2 = parseFloat(prompt("Introdueix el segon número: "));
let num3 = parseFloat(prompt("Introdueix el tercer número: "));

let petit, mitja, gran;
(num1>num2)?(gran=num1,petit=num2):(gran=num2,petit=num1); //mirem quin és el gran entre num1 i num2 i l' altre fem que sigui el petit
(gran>num3)?(mitja=num3):(mitja=gran,gran=num3); //comparem el major de num1 i num2 amb num3 i així trobem el més gran; l' altre el guardem en mitjà
if(petit>mitja){ //si el petit és més gran que el mitjà els hem d'intercanviar
    let t=petit;
    petit = mitja;
    mitja = t;
}
alert(petit + " " + mitja + " " + gran);

