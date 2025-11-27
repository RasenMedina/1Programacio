/*
Genera 10 lletres aleatòriament entre la ‘A’ i la ‘Z’ i guarda-les en un array.
Escriu totes les lletres de l’array.
Escriu totes les lletres de l’array en ordre invers.
Inverteix els elements de l’array (intercanvia el primer amb l’últim, el segon amb el penúltim, etc) i escriu les lletres de l’array en l’ordre en què hagin quedat.
*/

"use strict";

import * as ENTERS from "./RasenLlibreriaEnters.js"
import * as STRINGS from "./RasenLlibreriaStrings.js"
import * as ARRAYS from "./RasenLlibreriaArrays.js"

alert("rasen programador pro");


const MIN = 1;
const MAX = 100;

let aleatoris = ARRAYS.inicialitzarArrayRandomLletra(10)


//Mostrem les dades
ARRAYS.mostrarArray("Array 1: ", a1, 10, true, " ");
ARRAYS.mostrarArray("Array 2: ", a2, 10, true, " ");

alert("programa finalitzat correctament");