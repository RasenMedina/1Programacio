
/*
Validar un número de teléfono (ej. formato español)
*/

"use strict";
alert("Rasen programador pro");

// ^(\+34|0034)? → opcionalmente puede empezar con el prefijo internacional de España.
// [6-9] → los móviles españoles empiezan por 6, 7, 8 o 9.
// \d{8}$ → seguido de 8 dígitos.

// Ejemplo válido: +34678912345 o 678912345

let pattern = /^(\+34|0034)?[6-9]\d{8}$/;    
let s = prompt("Introdueix un número de telèfon");
while (s && s.toUpperCase() !== "FI") {
    if (pattern.test(s)) alert(s + " COINCIDEIX amb " + pattern);
    else alert(s + " NO coincideix amb " + pattern);
    s = prompt("Introdueix un número de telèfon");
}