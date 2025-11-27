/*
Fes un programa que demani les notes de 10 alumnes i les guardi en un array.
Després ha de comptar quants han suspès i quants han aprovat.
Finalment, haurà de mostrar les notes dels aprovats i calcular la mitjana només dels aprovats.
*/

"use strict";

import * as ENTERS from "./RasenLlibreriaEnters.js"
import * as STRINGS from "./RasenLlibreriaStrings.js"
import * as ARRAYS from "./RasenLlibreriaArrays.js"

alert("rasen programador pro");
const MIN = 1;
const MAX = 10;
let text = "Introdueix una nota entre " + MIN + " i " + MAX + ":";
let notes = ARRAYS.llegirArrayEntre(text, 10, MIN, MAX);
let aprovats = ARRAYS.crearAprovats(notes, 5);
let suspesos = ARRAYS.crearSuspesos(notes, 5);
let mitjana = ARRAYS.calcularMitjana(aprovats);
let nAprovats, nSuspesos;
if (aprovats[0] == 0) nAprovats = 0;
else nAprovats = aprovats.length;
if (suspesos[0] == 0) nSuspesos = 0;
else nSuspesos = suspesos.length;
//Mostrem les dades
ARRAYS.mostrarArray("Array Aprovats: ", aprovats, false);
ARRAYS.mostrarArray("Array Suspesos: ", suspesos, false);
ENTERS.mostrarEnter("Aprovats: ", nAprovats);
ENTERS.mostrarEnter("Suspesos: ", nSuspesos);
ARRAYS.mostrarArray("Notes dels aprovats: ", aprovats, true);
ENTERS.mostrarFloat("Mitjana dels aprovats: ", mitjana, 1);

alert("programa finalitzat correctament");