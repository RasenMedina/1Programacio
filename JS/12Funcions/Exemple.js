"use strict";
alert("Rasen programador pro");

/*
Exemple de classe
*/

let edat; //variable global

introduirDades();
let edat2 = processarDades(edat); //només li passo la còpia, un valor. No és una variable! 
mostrarResultats();

function introduirDades() { //codi per demanar les dades
    edat = parseInt (prompt("Introdueix la teva edat"));
}


function processarDades(e) { //codi per processar les dades
  let major = 18; //variable local
  if (e >= major) e /= 2;
  else e += 5;
  return e;
}


function mostrarResultats() { //codi per mostrar el resultat
    alert("Tens " + edat + " anys");
    alert("El doble de la teva edat és " + edat2 + " anys");
}

/**
 * Juntarà el nom i l' edat
 * @param {*} nom Nom de l' alumne
 * @param {*} edat Edat de l' alumne
 * @returns Un text amb el nom i l'edat amb parèntesis
 */
function nomEdat (nom, edat) {
  return nom + " (" + edat + ")";
} 


