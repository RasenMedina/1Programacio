/*
Aquesta és la llibreria de Rasen per a tipus de dades "Strings"
*/

import * as ENTERS from "./RasenLlibreriaEnters.js"

//---------------------------------------------------------------------------------------------------
// LLEGIR
//---------------------------------------------------------------------------------------------------

/**
 * Mostra una pregunta i llegeix i retorna un string 
 * @param {*} pregunta String per preguntar a l'usuari
 * @returns Un string
 */
export function llegirString(pregunta) {
  let paraula = prompt(text);
  while (paraula == null) {
    mostrarErrors("El text introduït no pot ser null");
    paraula = prompt(text);
  }
  return paraula;
}

/**
 * Llegeix una contrasenya vàlida
 * @param {*} pregunta String per preguntar a l'usuari
 * @returns Un string que representa una contrasenya 
 */
export function demanarContrasenya(pregunta) {
    let contrasenya;
    do {
        contrasenya = llegirString(pregunta);
    } while (!esContrasenyaValida(contrasenya));
    return contrasenya;
}

//---------------------------------------------------------------------------------------------------
// CREAR
//---------------------------------------------------------------------------------------------------

/**
 * Crea i retorna un caràcter aleatori entre un min i un max
 * @param {*} min El valor mínim que pot prendre l'enter aleatori (codi ASCI)
 * @param {*} max El valor màxim que pot prendre l'enter aleatori (codi ASCI)
 * @returns Un caracter aleatori 
 */
export function generarCaracterAleatori(min, max){ //65-90: A-Z; 97-122: a-z
  let num = ENTERS.crearEnterAleatori(min, max);
  return String.fromCharCode(num);
}

//---------------------------------------------------------------------------------------------------
// TRACTAR
//---------------------------------------------------------------------------------------------------


export function esContrasenyaValida(contrasenya) {
    let esValida = false;
    let teMajuscula = false;
    let teMinuscula = false;
    let teDigit = false;
    if (contrasenya.length >= 8) {
        for (let i = 0; i < contrasenya.length; i++) {
            let c = contrasenya.charAt(i);
            if (MAJUSCULES.includes(c)) teMajuscula = true;
            else if (MINUSCULES.includes(c)) teMinuscula = true;
            else if (DIGITS.includes(c)) teDigit = true;
            esValida = (teMajuscula && teMinuscula && teDigit);
            if (esValida) break;
        }
    }
    return esValida;
}


//---------------------------------------------------------------------------------------------------
// MOSTRAR
//---------------------------------------------------------------------------------------------------

/**
 * Mostra un missatge d'error mostrant el text que li hem passat
 * @param {*} text El text d' error que volem mostrar
 * @returns No retorna res
 */
export function mostrarError(text) {
  alert("-----ERROR-----\n" + text + "!!");
}

/**
 * Mostra el text que li hem passat
 * @param {*} text El text que volem mostrar
 * @param {*} tipus String "console"||"c" o "alert"||"a" segons com es vol mostrar
 * @returns No retorna res
 */ 
export function mostrarString(text, tipus){
  missatge = text;
  if(tipus == "c" || tipus == "console"){
    console.log(missatge);
  }
  else if(tipus == "a" || tipus == "alert"){
    alert (missatge);
  }
  else{
    mostrarError("Tipus de missatge no reconegut!");
  }
}