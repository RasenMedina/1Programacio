/*
Escriu un programa que inventi 1000 números enters aleatoris entre 100 i 10000 
i els guardi dins d'un array.
Després ha de mostrar només els 10 primers números que siguin parells.
*/

"use strict";

import * as ENTERS from "./RasenLlibreriaEnters.js"
import * as STRINGS from "./RasenLlibreriaStrings.js"
import * as ARRAYS from "./RasenLlibreriaArrays.js"

alert("rasen programador pro");


const MIN = 100;
const MAX = 10000;

let n = ARRAYS.inicialitzarArrayRandom(1000, MIN, MAX);
let nParells = ARRAYS.crearParells(n);

//Mostrem les dades
ARRAYS.mostrarArray("Array parells: ", nParells, 10, true, " ");

alert("programa finalitzat correctament");