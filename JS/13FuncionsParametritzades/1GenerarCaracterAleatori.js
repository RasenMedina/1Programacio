"use strict";
alert("Rasen programador pro");

/*
Fes una funció que retorni un caràcter aleatori entre la 'A' i la 'Z' totes dues incloses.
Millora la funció anterior fent que se li pugui passar el caràcter inicial i el caràcter final.
*/

// Declaració de variables globals

//Processar dades


let minim = llegirMinim();
let maxim = llegirMaxim(minim);
let caracter = generarCaracterAleatori(minim, maxim);
missatge("final", caracter);

function llegirMinim() { //llegeix i retorna el mínim
  let min = llegirNumero("min");
  while (isNaN(min) || min < 65 || min > 90) {
    if (isNaN(min)) missatge("error");
    else if (min < 65) alert("Ha de ser més gran que 64");
    else alert("Ha de ser més petit que 91");
    min = llegirNumero("min");
  }
  return min;
}

function llegirMaxim(min) { //llegeix i retorna el màxim
  let max = llegirNumero("max");
  while (isNaN(max) || max < min || max < 65 || max > 90) {
    if (isNaN(max)) missatge("error");
    else if (max < min) alert("Ha de ser més gran que el valor mínim: " + min);
    else if (max < 65) alert("Ha de ser més gran que 64");
    else alert("Ha de ser més petit que 91");
    max = llegirNumero("max");
  }
  return max;
}


function llegirNumero(opcio) { //Llegeix i retorna un número enter
  let numero;
  if (opcio == "min") numero = parseInt(prompt("Introdueix el valor mínim (65=A - 90=Z):").trim());
  else if (opcio == "max") numero = parseInt(prompt("Introdueix el valor màxim (65=A - 90=Z):").trim());
  else alert("Error al llegir la opcio");
  return numero;
}

function generarCaracterAleatori(min, max) { //Retorna un caracter
  //const MAX = 90;
  //const MIN = 65;
  let num_ = Math.floor(Math.random() * (max - min + 1) + min);
  let lletra = String.fromCharCode(num_);
  return lletra;
}

//Mostrar el resultat
function missatge(opcio, caracter_) { //Retorna el missatge
  let missatge = "";
  switch (opcio) {
    case "error":
      alert("Ha de ser un NÚMERO!!!");
      break;
    case "final":
      missatge = "El caràcter aleatori generat és la: " + caracter_;
      break;
    default:
      alert("No es reconeix la opció");
  }
  console.log(missatge);
}