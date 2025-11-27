/*
Aquesta és la llibreria de Rasen per a tipus de dades "Enters"
*/

import * as STRINGS from "./RasenLlibreriaStrings.js"

//---------------------------------------------------------------------------------------------------
//LLEGIR
//---------------------------------------------------------------------------------------------------
/**
 * Mostra una pregunta i llegeix i retorna un enter
 * @param {*} pregunta String per preguntar a l'usuari
 * @returns Un enter
 */
export function llegirEnter(pregunta){
  let enter = parseInt(prompt(pregunta));
  while (isNaN(enter)){
      STRINGS.mostrarError("El número enter no és vàlid!");
      enter = parseInt(prompt(pregunta));
  }
  return enter;  
}

/**
 * Mostra una pregunta i llegeix i retorna un float
 * @param {*} pregunta String per preguntar a l'usuari
 * @returns Un float
 */
export function llegirFloat(pregunta){
  let float = parseFloat(prompt(pregunta));
  while (isNaN(enter)){
      STRINGS.mostrarError("El número float no és vàlid!");
      float = parseFloat(prompt(pregunta));
  }
  return float;  
}

/**
 * Mostra una pregunta i llegeix i retorna un enter entre un mínim i un màxim
 * @param {*} pregunta String per preguntar a l'usuari
 * @param {*} min El mínim valor que pot prendre l' enter 
 * @param {*} max El màxim valor que pot prendre l' enter 
 * @returns Un enter entre min i max
 */
export function llegirEnterEntre(pregunta, min, max) {
  while(min<=max){ //comprovem que el mínim sigui més petit que el màxim
    STRINGS.mostrarError("El mínim ha de ser més petit o igual que el màxim!");
    min = llegirEnter("Introdueix un nou mínim");
    max = llegirEnter("Introdueix un nou màxim");
  } 
  let enter = llegirEnter(pregunta);
  while(enter<min || enter>max){
    STRINGS.mostrarError("L'enter ha de ser més gran que "+ min +" i més petit que " + max + " !");
    enter = llegirEnter(pregunta);
  }
  return enter;
}

/**
 * Mostra una pregunta i llegeix i retorna un float entre un mínim i un màxim
 * @param {*} pregunta String per preguntar a l'usuari
 * @param {*} min El mínim valor que pot prendre el float
 * @param {*} max El màxim valor que pot prendre el float 
 * @returns Un float entre min i max
 */
export function llegirFloatEntre(pregunta, min, max) {
  while(min<=max){ //comprovem que el mínim sigui més petit que el màxim
    STRINGS.mostrarError("El mínim ha de ser més petit o igual que el màxim!");
    min = llegirEnter("Introdueix un nou mínim");
    max = llegirEnter("Introdueix un nou màxim");
  } 
  let float = llegirFloat(pregunta);
  while(enter<min || enter>max){
    STRINGS.mostrarError("L'enter ha de ser més gran que "+ min +" i més petit que " + max + " !");
    float = llegirFloat(pregunta);
  }
  return float;
}

//---------------------------------------------------------------------------------------------------
//CREAR
//---------------------------------------------------------------------------------------------------

/**
 * Crea i retorna un enter aleatori entre un min i un max
 * @param {*} min El valor mínim que pot prendre l'enter aleatori 
 * @param {*} max El valor màxim que pot prendre l'enter aleatori
 * @returns Un enter aleatori
 */
export function crearEnterAleatori (min, max){
  return Math.floor((Math.random() * (max - min + 1) + min));
}

//---------------------------------------------------------------------------------------------------
// TRACTAR
//---------------------------------------------------------------------------------------------------

/**
 * Comprova si un any és de traspàs
 * @param {*} any Enter positiu que representa l'any a comprovar 
 * @returns True en cas de ser de traspàs, fals altrament
 */
export function esDeTraspas(any){
  return (any % 400 == 0 || (any % 4 == 0 && any % 100 != 0));
}

//---------------------------------------------------------------------------------------------------
// CÀLCULS
//---------------------------------------------------------------------------------------------------

/**
 * Calcula i retorna la hipotenusa d'un triangle rectangle
 * @param {*} base Número positiu que representa la base del triangle
 * @param {*} altura Número positiu que representa l'altura del triangle
 * @returns Un número que representa la hipotenusa
 */
export function hipotenusaTriangleRectange(base, altura){
  return Math.sqrt(base * base + altura * altura);
}

/**
 * Calcula i retorna l'àrea d'un cercle 
 * @param {*} radi Número positiu que representa el radi del cercle
 * @returns Un número que representa l'àrea del cercle 
 */
export function areaCerle(radi){
  return Math.PI * Math.pow(radi, 2);
}

/**
 * Calcula i retorna el preu després d'aplicar-li un descompte + l'IVA a un preu inicial 
 * @param {*} preu Número positiu que representa el preu inicial del producte
 * @param {*} descompte Número positiu que representa el descompte a aplicar
 * @param {*} iva Número positiu que representa l'IVA a aplicar 
 * @returns Un número que representa el preu final després del descompte i l'IVA
 */
export function preuDescompteIVA(preu, descompte, iva){
  return (preu - preu * descompte / 100) + (preu - preu * descompte / 100) * iva / 100;
}

//---------------------------------------------------------------------------------------------------
// MOSTRAR
//---------------------------------------------------------------------------------------------------

/**
 * Mostra un text i un número
 * @param {*} text  El text d' error que volem mostrar
 * @param {*} enter L'enter que volem que mostri per pantalla
 * @param {*} tipus String "console"/"c" o "alert"/"a" segons com es vol mostrar
 * @returns No retorna res
 */
export function mostrarEnter(text, enter, tipus) {
  let missatge = text + enter;
  if(tipus == "c" || tipus == "console"){
    console.log(missatge);
  }
  else if(tipus == "a" || tipus == "alert"){
    alert (missatge);
  }
  else{
    STRINGS.mostrarError("Tipus de missatge no reconegut!");
  }
}

/**
 * Mostra un text i un float
 * @param {*} text  El text d' error que volem mostrar
 * @param {*} float El float que volem que mostri per pantalla
 * @param {*} tipus String "console"||"c" o "alert"||"a" segons com es vol mostrar
 * @param {*} decimals Els nombre de decimals que volem mostrar
 * @returns No retorna res
 */
export function mostrarFloat(text, float, tipus, decimals) {
  missatge = text + float.toFixed(decimals);
  if(tipus == "c" || tipus == "console"){
    console.log(missatge);
  }
  else if(tipus == "a" || tipus == "alert"){
    alert (missatge);
  }
  else{
    STRINGS.mostrarError("Tipus de missatge no reconegut!");
  }
}