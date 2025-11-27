/*
Dissenyem el joc del penjat
*/

"use strict";

let paraula = prompt("Introdueix una paraula(# per acabar)").trim().toUpperCase();
while (paraula != "#") {
  try {
    if (!(esParaula(paraula))) {
      throw new Error("No és una paraula vàlida");
    }
    let paraulaEscrita = crearParaulaBuida(paraula);
    alert(paraulaEscrita);
    let intents = 0;
    let encertada = false;
    while (intents < 10 && encertada == false) {
      let lletra = prompt("Introdueix una lletra(A-Z)").trim().toUpperCase().charAt(0);
      if (!esLletra(lletra)) {
        alert("No és una lletra vàlida");
      } else {
        paraulaEscrita = actualitzarParaula(paraulaEscrita, paraula, lletra);
        intents++;
        alert(paraulaEscrita);
        if (paraulaEscrita == paraula) {
          encertada = true;
          alert("L' has encertada! I en " + intents + " intents!! Molt bé :))");
        }
      }
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
  paraula = prompt("Introdueix una paraula(# per acabar)").trim().toUpperCase();
}
alert("Programa finalitzat");

function esParaula(text) { //retorna true en cas que el text sigui una paraula, fals altrament
  const LLETRES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let esParaula = true;
  let posicio = 0;
  while (esParaula == true && posicio < text.length) {
    let lletra = text.charAt(posicio);
    if (LLETRES.includes(lletra)) {
      posicio++;
    } else {
      esParaula = false;
    }
  }
  return esParaula;
}


function crearParaulaBuida(paraula) { //retorna una paraula amb la mateixa longitud que paraula però amb _ (Ex: "____")
  let text = "";
  for (let i = 0; i < paraula.length; i++) {
    text += "_";
  }
  return text;
}

function esLletra(caracter) { //retorna true en cas que el caràcter sigui una lletra, fals altrament
  const LLETRES = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return LLETRES.includes(caracter);
}


function actualitzarParaula(textPerActualitzar, text, lletra) { //retorna el text actualitzat
  let textNou = "";
  if (text.includes(lletra) && !(textPerActualitzar.includes(lletra))) {
    for (let i = 0; i < text.length; i++) {
      let lletraAfegir = text.charAt(i);
      if (lletraAfegir == lletra) {
        textNou += lletraAfegir;
      } else {
        lletraAfegir = textPerActualitzar.charAt(i);
        textNou += lletraAfegir;
      }
    }
  } else textNou = textPerActualitzar;
  return textNou;
}