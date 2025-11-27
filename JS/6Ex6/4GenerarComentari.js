"use strict";
alert("Rasen programador pro");

/*
Fes un programa que tradueixi una nota numèrica a un dels següents textos:
"Has de millorar moooolt!" si la nota és inferior a 3
"Encara et falta una mica per aprovar" si la nota està entre 3 i 5
"No vas malament però segur que pots millorar una mica" si la nota està entre 5 i 7
"Força bé" si la nota està entre 7 i 9
"Excel·lent!" si la nota és 9 o més
El programa ha de mostrar un missatge d'error si la nota introduïda és inferior a 1 o superior a 10.
*/

const NOTA_MAX = 10;
const NOTA_MIN = 1;

let nota = parseFloat(prompt("Introdueix una nota entre 1 i 10: "));
//nota = nota.replace(",", ".");

if (nota>= NOTA_MIN && nota<=NOTA_MAX) { 
    if (nota<3){
        alert("Has de millorar moooolt!");
    }
    else if(nota<5){ 
        alert("Encara et falta una mica per aprovar");
    }
    else if(nota<7){ 
        alert("No vas malament però segur que pots millorar una mica");
    }
    else if(nota<9){ 
        alert("Força bé");
    }
    else{ //Si la nota és entre 9 i 10
        alert("Ecel·lent!!!");
    }
} 
else if (nota>NOTA_MAX) {
    alert("La nota no pot ser superior a 10");
}
else { //si la nota és negativa
    alert ("La nota no pot ser inferior a 0");
}