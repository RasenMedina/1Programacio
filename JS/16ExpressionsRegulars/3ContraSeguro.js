
/*
Comprobar una contraseña segura
*/

"use strict";
alert("Rasen programador pro");

// (?=.*[a-z]) → al menos una minúscula.
// (?=.*[A-Z]) → al menos una mayúscula.
// (?=.*\d) → al menos un número.
// (?=.*[@$!%*?&]) → al menos un símbolo especial.
// {8,} → mínimo 8 caracteres en total.

// Ejemplo válido: MiClave@2025

let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;    
let s = prompt("Introdueix una contrasenya segura");
while (s && s.toUpperCase() !== "FI") {
    if (pattern.test(s)) alert(s + " COINCIDEIX amb " + pattern);
    else alert(s + " NO coincideix amb " + pattern);
    s = prompt("Introdueix una contrasenya segura");
}