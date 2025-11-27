"use strict";

/*Els noms propis s'han d'escriure amb la primera lletra majúscula i les següents en minúscula, però els usuaris no sempre els escriuen correctament.*/

/*
let nom= "rasen";
let cognom= "MEDINA";

let nom1 = nom.charAt(0);
nom1 = nom1.toUpperCase();
let nomCorrecte = nom1 + nom.substring(1);

let cognom1 = cognom.charAt(0);
cognom = cognom.toLocaleLowerCase();
let cognomCorrecte = cognom1 + cognom.substring(1);


let missatge = "Nom correcte: ";
missatge += nomCorrecte;
missatge += "\nCognom correcte: ";
missatge += cognomCorrecte;

alert (missatge);
*/

let nom = "peter";
let cognom = "SOFT";
let primeraLletra = nom.charAt(0).toUpperCase();
let altresLletres = nom.substring(1).toLowerCase();
nom = primeraLletra + altresLletres;
primeraLletra = cognom.charAt(0).toUpperCase();
altresLletres = cognom.substring(1).toLowerCase();;
cognom = primeraLletra + altresLletres;
alert(nom + " " + cognom); 
