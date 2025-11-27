
/*
DATA
*/

"use strict";
alert("Rasen programador pro");



let pattern = /^([0]?(1-9))|([10-31])-?([0]?\d)|([10-12])-?[\d]{2}|[\d]{4}$/;  
let s = prompt("Introdueix un número de telèfon");
while (s && s.toUpperCase() !== "FI") {
    if (pattern.test(s)) alert(s + " COINCIDEIX amb " + pattern);
    else alert(s + " NO coincideix amb " + pattern);
    s = prompt("Introdueix un número de telèfon");
}

// /^([0]?(1-9))|([10-31])-?([0]?\d)|([10-12])-?[\d]{2}|[\d]{4}$/;    

/* 
classe: solució Pere

/^((00|\+)\d{1,3}\s*-?\s*)?(\d{3}s\*\.?\s*){1,3}\d{3}$/;

*/