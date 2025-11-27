"use strict";
alert("Rasen programador pro");

/*
El programa ha de preguntar un número entre 1 i 7.
Ha de dir el dia de la setmana corresponent (1 = dilluns, 2 = dimarts...) o mostrar un error si el número introduït no està entre 1 i 7.
*/

const DIA1 = "Dilluns";
const DIA2 = "Dimarts";
const DIA3 = "Dimecres";
const DIA4 = "Dijous";
const DIA5 = "Divendres";
const DIA6 = "Dissabte";
const DIA7 = "Diumenge";

let dia = parseInt(prompt("Introdueix dia de la setmana (1-7): "));
//nota = nota.replace(",","."); 

if (dia<1) { 
    alert ("La nota no pot ser inferior a 0");
    } 
else if (dia>7) {
    alert("La nota no pot ser superior a 7");
}
else { //si dia és un número entre 1 i 7
    if (dia==1){
        alert(DIA1);
    }
    else if (dia==2){
        alert(DIA2);
    }
    else if (dia==3){
        alert(DIA3);
    }
    else if (dia==4){
        alert(DIA4);
    }
    else if (dia==5){
        alert(DIA5);
    }
    else if (dia==6){
        alert(DIA6);
    }
    else{
        alert(DIA7);
    }
}