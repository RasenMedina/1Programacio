/*
Fes un programa que demani les 6 notes de les UF del Mòdul de Programació, les guardi en un array i busqui la nota mínima i la nota màxima.

Si la nota mínima és inferior a 5, ha de dir que no aprova el mòdul.
En cas contrari, ha de calcular la mitjana i mostrar el resultat.
*/

"use strict";

import * as ENTERS from "./RasenLlibreriaEnters.js"
import * as STRINGS from "./RasenLlibreriaStrings.js"
import * as ARRAYS from "./RasenLlibreriaArrays.js"

alert("rasen programador pro");
const MIN = 1;
const MAX = 10;
let text = "Introdueix nota RA entre "+ MIN + " i " + MAX +":";
let notes = ARRAYS.llegirArrayEntre(text, 6, MIN, MAX);
let aprova = ARRAYS.calcularSiAprova(notes);
if (aprova){
  let minim = ARRAYS.calcularMinim(notes);
  let maxim = ARRAYS.calcularMaxim(notes);
  let mitjana = ARRAYS.calcularMitjana(notes);
  ENTERS.mostrarEnter("Nota mínima: ", minim);
  ENTERS.mostrarEnter("Nota màxima: ", maxim);
  ENTERS.mostrarFloat("Mitjana: ", mitjana, 1);
}
else{
  alert("No aproves el mòdul");
}

alert("programa finalitzat correctament");

