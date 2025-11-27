
/*
REGEX
*/

"use strict";
alert("Rasen programador pro");



let pattern = /^$/;  
let s = prompt("Introdueix un número de telèfon");
while (s && s.toUpperCase() !== "FI") {
    if (pattern.test(s)) alert(s + " COINCIDEIX amb " + pattern);
    else alert(s + " NO coincideix amb " + pattern);
    s = prompt("Introdueix un número de telèfon");
}
 
/* 
Nom propi: Anna
/^[A-Z][a-z]+$/ 

Adr. MAC
/^([A-F0-9]{2}[:-]){5}[A-Z0-9]{2}[:-]$/

GEN DDDD
/\w{3} \d{4}$/
(GEN|FEB|MAR) \d{4}$/

hhtps://www.youtube.come/....
/^https?:\/\/(www\.)?[A-Z]a-z0-9-]+\.[A-Za-z]{2,}(\.*)?$/

+34354472137
/^(\+[1-9])?d{9}$/

IP: 192.78.30.10
\^(\d{1,3}\.){3}(\d{1,3})$/
Afegir la màscara
\/([1-9])|[12][0-9]|3[0-2])

CONTRASENYA 9 CARÀCTERS +Maj +min +dig +especials
?=.*[a-z]{8,}

*/