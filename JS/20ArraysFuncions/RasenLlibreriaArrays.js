/*
Aquesta és la llibreria de Rasen per a tipus de dades "Arrays"
*/

import * as ENTERS from "./RasenLlibreriaEnters.js"
import * as STRINGS from "./RasenLlibreriaStrings.js"

//LLEGIR

/**
 * Llegeix enters (entre min i max) les vegades que se li passin i els retorna en un array
 * @param {*} text El text que volem que mostri per pantalla al demanar l' string
 * @param {*} vegades Les vegades que es vol llegir un enter
 * @param {*} min El valor mínim que pot tenir l'enter. min==0 si no n'hi ha
 * @param {*} max El valor màxim que pot tenir l'enter. max==0 si no n'hi ha 
 * @returns Un array que no és null
 */
export function llegirArrayEntre(text, vegades, min, max){
  let a = [];
  for (let i=0; i<vegades; i++){
    let n = ENTERS.llegirEnterEntre(text, min, max);
    a.push (n);
  }
  return a;
}

//CREAR

/**
 * Inicialitza i retorna un array amb el valor que se li passa amb la quantitat d'elements que se li passen
 * @param {*} quantitat La quantitat de d'elements que tindrà el nou array
 * @param {*} valor El valor que es vol inicialitzar
 * @returns Un array que conté el valor la quantitat de vegades que se li ha passat
 */
export function inicialitzarArray(quantitat, valor){
  let a = [];
    for (let i=0; i<quantitat; i++){
    a.push (valor);
  }
  return a;
}

/**
 * Retorna un array amb valors aleatoris entre min i max les vegades que se li passin
 * @param {*} vegades La quantitat de valors d'enters random
 * @param {*} min El mínim valor que pot prendre l'enter random
 * @param {*} max El màxim valor que pot prendre l'enter random
 * @returns Un array amb enters random
 */
export function inicialitzarArrayRandom(vegades, min, max){
  let a = [];
  for (let i=0; i<vegades; i++){
    let n = ENTERS.crearEnterRandom(min, max);
    a.push (n);
  }
  return a;
}

/**
 * Retorna un array amb tants caracters aleatoris com vegades
 * @param {} vegades El nombre de caracters aleatoris que es vol que tingui l'array
 * @param {*} min El mínim valor del caracter en la taula ASCI
 * @param {*} max El màxim valor del caracter en la taula ASCI
 * @returns Un array amb caracters aleatoris
 */
export function inicialitzarArrayRandomLletra(vegades, min, max){
  let a = [];
  for (let i=0; i<vegades; i++){
    let n = STRINGS.generarCaracterAleatori(min, max);
    a.push (n);
  }
  return a;
}


//TRACTAR

/**
 * Mira si donat unes notes en una array alguna és inferior a 5 i en tal cas retorna fals, true altrament
 * @param {*} a Array de notes que se li passen
 * @returns True si totes les notes són >=5 i <=10; false altrament;
 */ 
export function calcularSiAprova(a){
  let aprovar = true; 
  for (let i=0; i<a.length; i++){
    if (a[i]<5 || a[i]>10) aprovar = false; break;
  }
  return aprovar;
}

/**
 * Calcula i retorna el màxim d'una Array 
 * @param {*} a Array que se li passa
 * @returns El màxim dels elements de l'Array
 */
export function calcularMaxim(a){
  let max = parseInt(a[0]);
  for (let i=1; i<a.length; i++){
    if (parseInt(a[i])>max) max = a[i];
  }
  return max;
}

/**
 * Calcula i retorna el mínim d'una Array 
 * @param {*} a Array que se li passa
 * @returns El mínim dels elements de l'Array
 */
export function calcularMinim(a){
  let min = parseInt(a[0]);
  for (let i=1; i<a.length; i++){
    if (parseInt(a[i])<min) min = a[i];
  }
  return min;
}

/**
 * Calcula i retorna la mitjana d'una Array
 * @param {*} a Array que se li passa
 * @returns La mitjana dels elements de l'Array
 */
export function calcularMitjana(a){
  let total = parseInt(a[0]);
  let comptador = 1;
  while (comptador<a.length){
    total += parseInt(a[comptador]);
    comptador++;
  }
  let mitjana = total/comptador;
  return mitjana;
}

/**
 * Crea i retorna una Array amb els aprovats
 * @param {*} a L'Array que se li passa
 * @param {*} notaTall Nota a partir de la qual s' aprova
 * @returns Un Array amb els aprovats. Si és buida retorna un array amb un element 0
 */
export function crearAprovats(a, notaTall){
  let aprovats = [];
  for (let i=0; i<a.length; i++){
    if (a[i]>=notaTall) aprovats.push(a[i]);
  }
  if (aprovats.length == 0) aprovats.push(0);
  return aprovats;
}

/**
 * Crea i retorna una Array amb els suspesos
 * @param {*} a L'Array que se li passa
 * @param {*} notaTall Nota a partir de la qual se suspèn
 * @returns Un Array amb els suspesos. Si és buida retorna un array amb un element 0
 */
export function crearSuspesos(a, notaTall){
  let suspesos = [];
  for (let i=0; i<a.length; i++){
    if (a[i]<notaTall) suspesos.push(a[i]);
  }
  if (suspesos.length == 0) suspesos.push(0);
  return suspesos;
}

/**
 * Crea i retorna una Array amb els valors parells
 * @param {*} a L'Array que se li passa
 * @returns Un Array amb valors parells. Si és buida retorna un array amb un element 0
 */
export function crearParells(a){
  let parells = [];
  for (let c of a){
    if (c % 2 == 0) parells.push(c); 
  }
  if (parells.length == 0) parells.push(0);
  return parells;
}

/**
 * Dividir un array entre inici i fi i el retorna
 * @param {*} a Array que es vol dividir
 * @param {*} inici Índex inici per on es vol dividir l'array
 * @param {*} fi Índex final per on es vol dividir l'array
 * @returns Un array divit entre inici i final
 */
export function dividirArray (a, inici, fi){
  while (inici>=fi || inici<0 || inici>a.length || fi>a.length) {
        STRINGS.mostrarErrors("Inici>fi, >=0, <a.length; fi=<a.length")
        inici = parseInt(prompt("Introdueix un nou inici:"));
        fi = parseInt(prompt("Introdueix un nou fi:"));
  }
  let aDividit = [];
  if (a.length == 0) aDividit.push(0);
  else{
    for (let i=inici; i<fi; i++){
      aDividit.push(a[i]);
    }
  }
  return aDividit;
}

/**
 * Retorna l'array invertit dels elements de l'array que se li passa
 * @param {*} a 
 * @returns Un array invertit
 */
export function invertirArray(a){
  let aInvertit=[];
  for (let i=a.length-1; i>=0; i--){
    aInvertit.push(a[i]);
  }
  return aInvertit;
}


//CONVERTIR


/**
 * Converteix un array en string amb els elements separats per un sperador i el retorna 
 * @param {*} a L'arrau que es vol convertir
 * @param {*} separadar Separador entre els elements de l'array
 * @returns Un string amb els elements de l'array separats per separador
 */
export function StringConverter (a, separadar){
  return a.join(separadar);
}


//MOSTRAR 

/**
 * Mostra els n elements d'un array separats per un separador en cas d'indicar-ho
 * @param {*} text El text que volem mostrar
 * @param {*} a Array que se li passa
 * @param {*} n Posició fins a la qual es vol mostrar
 * @param {*} siSeparador True en cas de que es vulgui separador, fals altrament
 * @param {*} separador Separador entre els elements de l'array
 * @param {*} tipus És "console" o "alert" depenent de com volem mostrar l'array
 * @returns No retorna res
 */
export function mostrarArrayComplet(text, a, n, siSeparador, separador, tipus){
  let missatge= text + "\n";
  for (let i=0; i<n; i++){
    missatge += a[i];
    if (siSeparador && i<n-1) missatge += separador;
  }
  alert(missatge);
}

/**
 * Mostra els elements d'un Array
 * @param {*} text El text que volem mostrar
 * @param {*} a Array que se li passa
 * @param {*} tipus == "console" o "alert" depenent de com volem mostrar l'array
 * @returns No retorna res
 */
export function mostrarArray(text, a, tipus){
  let missatge = text + "\n";
  for (let c of a) {
    missatge += c + " "; 
  }
  if (tipus=="console"){
    console.log(missatge);
  }
  else if (tipus == "alert"){
    alert(missatge);
  }
  else{
    alert(STRINGS.mostrarErrors("Tipus incorrecte"));
  }
}

/**
 * Mostra els elements d'un Array bidimensional
 * @param {*} text El text que volem mostrar
 * @param {*} a Array bidimensional que se li passa
 * @param {*} tipus == "console" o "alert" depenent de com volem mostrar l'array
 * @returns No retorna res
 */
export function mostrarArrayBidimensional(text, a, tipus){
  let missatge = text + "\n";
  for (let i=0; i++; i<a.length) {
    for (let j=0; j++; j<a[i].length){
      missatge += a[i][j] + " ";
    }
    missatge += "\n";
  }
  if (tipus=="console"){
    console.log(missatge);
  }
  else if (tipus == "alert"){
    alert(missatge);
  }
  else{
    alert(STRINGS.mostrarErrors("Tipus incorrecte"));
  }
}