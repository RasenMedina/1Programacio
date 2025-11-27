"use strict";
alert("Rasen programador pro");

/*
L'usuari ha d'introduir les dades en el format valor operació valor, on valor han de ser números reals i operació ha de ser un dels caràcters  +  -  *  /
Si no és cap d'aquestes, ha de mostrar un error.
*/

let valor1 = parseInt(prompt("Escriu el primer valor: ").replace(",","."));
let valor2 = parseInt(prompt("Escriu el segon valor: ").replace(""));
let operacio = prompt("Escriu la operació que vols fer (+ - * /): ").charAt(0);

if (isNaN(valor1 || valor2)){
    alert("Algun dels valors introduïts no és vàlid");
    return;
}

switch (operacio){
    case '+':
        alert ("Resultat: "+(n1+n2));
        break;
    case '-':
        alert ("Resultat: "+(n1-n2));
        break;
    case '+':
        alert("Resultat: "+(n1+n2));
        break;
    case '/':
        alert("Resultat: "+(n1/n2));
        break;
    default:
        alert("No reconec l'operació " + operacio);
}
