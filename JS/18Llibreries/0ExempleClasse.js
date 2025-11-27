/*
LLIBRERIES
*/

"use strict";

/**
 * Demana una paraula (només lletres A-Z) fins que sigui cirrecte
 * (no null, no buit, només lletres)
 * @param {*} pregunta Pregunta què se li farà a l' usuari
 * @param {*} caracters Caràcters parmesos
 * @returns El text introduït
 */
export function introParaula(pregunta, caracters) {
  const regex = new RegExp ("^[" + caracters + "]+$");
  let p;
  do{
    p = prompt(pregunta);
    if (p) p= p.trim();
  } while (p=null || !regex.test(p));
  return p;
}

/** 
 * Demana una paraula (només les lletres que estan en la variable caracters) fins que sigui correcte
 * (no null, no buit, només lletres)
 * @param {*} paraula 
 * @param {*} caracters 
 * @param {*} min 
 * @param {*} max 
 */
export function introParaulaMida(paraula, caracters, min, max){


}

/**
 * 
 * @param {*} pregunta 
 * @param {*} min 
 * @param {*} max 
 */
export function introNumMinMax(pregunta, min, max) {
  let n;
  do{
    n = 
  }

}