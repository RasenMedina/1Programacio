"use strict";

/*Guarda en una variable les lletres entre la posició 10 (inclosa) i la 20 (no inclosa).
Guarda en una altra variable les lletres des de la posició 10 fins al final.
Mostra el contingut de les dues variables.*/

/*const LLETRES = "TRWAGMYFPDXBNJZSQVHLCKE";
let nChar= LLETRES.length;
alert (nChar);
let ultimesLletres = LLETRES.substring(nChar-11,nChar-1);
let primeresLletres = LLETRES.substring(0, 10);
alert(primeresLletres);
alert(ultimesLletres);

let missatge = "Primeres lletres: ";
missatge += primeresLletres;
missatge += "\nUltimes lletres: ";
missatge += ultimesLletres;

alert (missatge);*/

const LLETRES = "TRWAGMYFPDXBNJZSQVHLCKE";
let lletres1020 = LLETRES.substring(10, 20);
let lletres10final = LLETRES.substring(10);
alert(lletres1020 + "\n" + lletres10final);
