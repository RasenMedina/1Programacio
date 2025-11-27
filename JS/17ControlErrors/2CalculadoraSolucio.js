/*
Calculadora amb funcions i try/catch

Crea un programa que sigui una calculadora amb les característiques següents:

Demana a l’usuari una operació (+, -, *, /).
Si l’usuari escriu FI, el programa s’acaba.
Mentre l’usuari no escrigui FI, el programa:
Demana dos nombres sencers (a i b).
Intenta calcular el resultat segons l’operació triada.
Si l’usuari introdueix alguna dada incorrecta (per exemple, un text en lloc d’un nombre, una operació desconeguda o una divisió per zero), el programa ha de mostrar un missatge d’error però continuarà demanant una nova operació.

El codi ha d’utilitzar try...catch per capturar errors.
Les operacions s’han d’implementar en funcions separades
La funció dividir ha de llançar un error si el segon número és 0
Ha d’existir una funció calcular(a, b, op) que cridi la funció adequada segons l’operador i llenci un error si l’operació no és vàlida.
*/

"use strict";
let op = prompt("Introdueix una operació (+, -, *, /):").trim().toUpperCase();
while (op != "FI") {
  try {
    const a = parseInt(prompt("Introdueix el primer nombre:"));
    const b = parseInt(prompt("Introdueix el segon nombre:"));
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Algun nombre és incorrecte");
    }
    const resultat = calcular(a, b, op);
    alert("El resultat és " + resultat);
  } catch (error) {
    alert("Error: " + error.message);
  }
  op = prompt("Introdueix una operació (+, -, *, /):").trim().toUpperCase();
}
alert("Programa finalitzat");

function calcular(a, b, op) {
  switch (op) {
    case "+":
      return sumar(a, b);
    case "-":
      return restar(a, b);
    case "*":
      return multiplicar(a, b);
    case "/":
      return dividir(a, b);
    default:
      throw new Error("Operació incorrecta");
  }
}

function sumar(a, b) {
  return a + b;
}
function restar(a, b) {
  return a - b;
}
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  if (b === 0) {
    throw new Error("No es pot dividir per zero");
  }
  return a / b;
}