
/*
Validar un correo electrónico
*/

"use strict";
alert("Rasen programador pro");


// ^[\w.-]+ → empieza con letras, números, guiones o puntos.
// @ → debe tener una arroba.
// [a-zA-Z\d.-]+ → dominio (letras, números, puntos o guiones).
// \.[a-zA-Z]{2,}$ → extensión del dominio (como .com, .edu, .org, etc.).

// Ejemplo válido: maria.lopez23@gmail.com

let pattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;    
let s = prompt("Introdueix un correu electrònic");
while (s && s.toUpperCase() !== "FI") {
    if (pattern.test(s)) alert(s + " COINCIDEIX amb " + pattern);
    else alert(s + " NO coincideix amb " + pattern);
    s = prompt("Introdueix un correu electrònic");
}