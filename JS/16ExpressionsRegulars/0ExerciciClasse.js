
/*

*/

"use strict";
alert("Rasen programador pro");

/* DNI XXXXXXXXA

let pattern = /^[0-9]{8}[A-Z]$/;    // Posar aquí el patró a comprovar
let s = prompt("Introdueix un text");
while (s && s.toUpperCase() !== "FI") {
    if (pattern.test(s)) alert(s + " COINCIDEIX amb " + pattern);
    else alert(s + " NO coincideix amb " + pattern);
    s = prompt("Introdueix un text");
}

*/

/*
// MATRÍCULA COTXE XXXX-AAA
let pattern = /^[0-9]{4}[ -]?[A-Z]{3}$/;    // Posar aquí el patró a comprovar
let s = prompt("Introdueix un text");
while (s && s.toUpperCase() !== "FI") {
    if (pattern.test(s)) alert(s + " COINCIDEIX amb " + pattern);
    else alert(s + " NO coincideix amb " + pattern);
    s = prompt("Introdueix un text");
}
 */

/*
//Hola i Adeu
let pattern = /^([Hh]ola|[Aa]deu)$/;    
let s = prompt("Introdueix un text");
while (s && s.toUpperCase() !== "FI") {
    if (pattern.test(s)) alert(s + " COINCIDEIX amb " + pattern);
    else alert(s + " NO coincideix amb " + pattern);
    s = prompt("Introdueix un text");
}
*/

//Codi colors HTML
let pattern = /^#([A-Fa-f\d]{3}|[A-Fa-f\d]{6})$/;    
let s = prompt("Introdueix un text");
while (s && s.toUpperCase() !== "FI") {
    if (pattern.test(s)) alert(s + " COINCIDEIX amb " + pattern);
    else alert(s + " NO coincideix amb " + pattern);
    s = prompt("Introdueix un text");
}