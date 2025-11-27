"use strict";
alert("Rasen programador pro");

/*
Fes una funció que demani un número enter.
S'ha de demanar repetidament mentre el valor introduït no sigui un número enter, i avisar amb un missatge d'error.

Paràmetre d'entrada: pregunta que se li ha de fer a l'usuari.
Valor de retorn: el número enter introduït per l'usuari.

Crea també una funció que utilitzi l'anterior però que se li pugui indicar el valor mínim i màxim entre els quals s'ha de trobar el valor introduït.
Si el valor mínim és més gran que el màxim, cal intercanviar els valors.
S'ha de demanar repetidament mentre el valor introduït no estigui entre els dos límits, i avisar amb un missatge d'error.
*/


//Processar dades
const MINIM = 0;
const MAXIM = 100;
let minim = llegirMinim();
let maxim = llegirMaxim(minim);
let numero = comprovarEnter(minim, maxim);
missatge ("final", numero);

function demanarEnter (min, max){ //retorna un enter
  let num_ = (prompt ("Introdueix un número enter entre " + min + " i " + max));
  return num_;
}

function comprovarEnter (min, max){ //comprova que l' enter que es llegeix és un enter entre mínim i màxim
  let num = demanarEnter(min, max);
  while (isNaN(parseInt(num)) || num<min || num>max || num != Math.floor(num)){
    if (isNaN(parseInt(num))) missatge("error1");
    else if (num<min) alert("Ha de ser més gran que " + min); 
    else if (num>max) alert("Ha de ser més petit que " + max);
    else missatge("error2");
    num = demanarEnter(min, max);
  }
  return num;
}

function llegirMinim() { //llegeix i retorna el mínim
  let min = llegirNumero("min");
  while (isNaN(min) || min < MINIM || min > MAXIM) {
    if (isNaN(min)) missatge ("error1");
    else if (min < MINIM) alert("Ha de ser més gran que " + MINIM);
    else alert("Ha de ser més petit que " + MAXIM);
    min = llegirNumero("min");
  }
  return min;
}

function llegirMaxim(min) { //llegeix i retorna el màxim
  let max = llegirNumero("max");
  while (isNaN(max) || max < min || max < MINIM || max > MAXIM) {
    if (isNaN(max)) missatge ("error1");
    else if (max < min) alert("Ha de ser més gran que el valor mínim: " + min);
    else if (max < 65) alert("Ha de ser més gran que " + MINIM);
    else alert("Ha de ser més petit que " + MAXIM);
    max = llegirNumero("max");
  }
  return max;
}


function llegirNumero(opcio) { //Llegeix i retorna un número enter
  let numero;
  if (opcio == "min") numero = parseInt(prompt("Introdueix el valor mínim (0-100):").trim());
  else if (opcio == "max") numero = parseInt(prompt("Introdueix el valor màxim (0-100):").trim());
  else alert("Error al llegir la opcio");
  return numero;
}

//Mostrar el resultat
function missatge (tipus, numero){
  switch (tipus){
    case "error1": 
        alert ("Has d'introduir un número NO una lletra!")
        break;
    case "error2":
        alert ("Error! ha de ser un número enter"); 
        break;
    case "final":
        alert ("El número enter és: " + numero);
        break;
    default: 
        alert("Tipus de missatge no reconegut");
  }
}




