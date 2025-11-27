/*
Escriu un programa que inventi 20 números enters aleatoris entre 1 i 100 i que guardi 10 en un array i 10 en un altre. 
Mostra les dues llistes.
Després ha de mostrar el resultat de multiplicar els números de cada llista un per un.
Opcionalment pots fer que sumi cada número d’una llista amb tots els de l’altra llista.
*/

"use strict";

import * as ENTERS from "./RasenLlibreriaEnters.js"
import * as STRINGS from "./RasenLlibreriaStrings.js"
import * as ARRAYS from "./RasenLlibreriaArrays.js"

alert("rasen programador pro");


const MIN = 1;
const MAX = 100;

let aleatoris = ARRAYS.inicialitzarArrayRandom(20, MIN, MAX);
let a1 = ARRAYS.dividirArray(aleatoris, 0, 10);
let a2 = ARRAYS.dividirArray(aleatoris, 10, 20);

//Mostrem les dades
ARRAYS.mostrarArray("Array 1: ", a1, 10, true, " ");
ARRAYS.mostrarArray("Array 2: ", a2, 10, true, " ");

alert("programa finalitzat correctament");