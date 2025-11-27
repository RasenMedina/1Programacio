
/*
Validar un número de teléfono (ej. formato español)
*/

"use strict";
alert("Rasen programador pro");



let pattern = /^((00|\+)\d{1,3}\s*-?\s*)?(\d{3}\s*\.?\s*){1,3}\d{3}$/;   
let s = prompt("Introdueix un número de telèfon");
while (s && s.toUpperCase() !== "FI") {
    if (pattern.test(s)) alert(s + " COINCIDEIX amb " + pattern);
    else alert(s + " NO coincideix amb " + pattern);
    s = prompt("Introdueix un número de telèfon");
}


// ^\s*(\+[\d]{1,3})|(00[\d]{1,3})(\s|-)*[\d]{3}(\s|\.)*[\d]{3}(\s|\.)*[\d]{3}(\s|\.)*[\d]{3}\s*$/;  
// ^\s*(\+|00)[\d]{1,3})(\s*|-)[\d]{3}((\s*|\.)[\d]{3}){1,3}$/; //SIMPLIFICAT

// SOLUCIO PERE:

// /^((00|\+)\d{1,3}\s*-?\s*)?(\d{3}\s*\.?\s*){1,3}\d{3}$/;
