"use strict";
alert("Rasen programador pro");

/*
Faré una calculadora amb menú d' opcions
*/

// main

let num1 = 0;
let num2 = 0;
let resultat = 0;
mostrarMenu();
let opcio = llegirOpcio();

while (opcio!=0) {
  switch (opcio) {
    case 1:
      num1 = llegirEnter();
      break;
    case 2:
      num2 = llegirEnter();
      break;
    case 3:
      resultat = ferSuma(num1, num2);
      break;
    case 4:
      resultat = ferResta(num1, num2);
      break;
    case 5:
      resultat = ferMultiplicacio(num1, num2);
      break;
    case 6:
      resultat = ferDivisio(num1, num2);
      break;
    case 7:
      resultat = ferPotencia(num1, num2);
      break;
    case 8:
      resultat = ferArrel(num1, num2);
      break;
    case 9:
      missatge ("resultat", resultat);
      break;    
    case 0:
      missatge("sortirProg");
      break;
    default:
      missatge("opcioNo");
  }
  mostrarMenu();
  opcio = llegirOpcio();
}






//Funcions

function mostrarMenu() { //mostra el menú d'opcions
  menu = "Escull un opció (0 per acabar)";
  menu += "\nOpció 1: Introdueix el primer número (!=0)";
  menu += "\nOpció 2: Introdueix el segon número (!=0)";
  menu += "\nOpció 3: Realitza la suma dels 2 números";
  menu += "\nOpció 4: Realitza la resta dels 2 números";
  menu += "\nOpció 5: Realitza la multiplicació entre els 2 números";
  menu += "\nOpció 6: Realitza la resta entre els 2 números";
  menu += "\nOpció 7: Realitza la potència entre els 2 números";
  menu += "\nOpció 8: Realitza l' arrel quadrada entre els 2 números";
  menu += "\nOpció 9: Mostra el resultat per pantalla";
  menu += "\nOpció 0: Surt del programa";
  alert (menu);
}

function llegirEnter(){ //llegeix i retorna un enter
  let enter = parseInt(prompt("Introdueix un nombre").trim());
  while (isNaN(enter || enter==0)){
    if (isNaN (enter)) missatge ("errorLletra");
    else missatge ("no_0");
    enter = parseInt(prompt("Introdueix un nombre").trim());
  }
  return enter;
}

function llegirOpcio(){ //llegeix i retorna una opció
  let opcio = parseInt(prompt("Introdueix un nombre").trim());
  while (isNan(opcio) || opcio<0 || opcio >9){
    if(isNan(opcio_)) missatge ("errorLletra");
    else missatge("entre0_9");
    opcio = parseInt(prompt("Introdueix un nombre").trim());
  }
  return (opcio);
 }

/**
 * 
 * @param {*} num1_ 
 * @param {*} num2_ 
 */
function ferSuma(num1_, num2_) { //fa la suma entre els 2 valors

}

function ferResta(num1_, num2_) { //fa la resta entre els 2 valors

}

function ferMultiplicacio(num1_, num2_) { //fa la multiplicació entre els 2 valors

}

function ferDivisio(num1_, num2_){ //fa la divisio entre els 2 valors

}

function ferPotencia(num1_, num2_){ //fa la potència entre els 2 valors

}

function ferArrel(num1_,num2_){ //fa l'arrel quadrada entre els 2 valors

}





function missatge(tipus, numero){
  switch (tipus){
    case "errorLletra":
      alert("ERROR! Has d' introduir una lletra");
      break;
    case "no_0":
      alert("Ha de se un número diferent a 0!");
    case "entre0_9":
      alert("Ha de ser un número entre 0 i 9");
      break;
    case "sortirProg":
      alert("Has sortit del probrama");
      break;
    case "opcioNo":
      alert ("Opció introduïda no reconeguda");
      break;
    case "resultat":
      alert ("El resultat és: " + numero);
      break;
    default:
      alert("Tipus de missatge no reconegut");
  }
}