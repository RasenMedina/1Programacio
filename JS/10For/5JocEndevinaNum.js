"use strict";
alert("Rasen programador pro");

/*
Millora el joc d'endevinar números amb les següents opcions:

El programa ha de preguntar entre quins números pot estar el número a encertar.
També ha de preguntar el màxim d'intents que pot fer l'usuari.
Quan l'encerti o s'acabin els intents, ha de preguntar si ho vol tornar a intentar.
Utilitza el bucle for per limitar el nombre d'intents.
*/

//Demanem un min i un max i ens assegurem que siguin correctes
let min= parseInt(prompt("Introdueix el número mínim: ").trim());
let max= parseInt(prompt("Introdueix el número màxim: ").trim());
while (isNaN(min) || isNaN(max) || min>max){
    alert("Has d'introducir números i el mínim ha de ser més petit que el màxim")
    min= parseInt(prompt("Introdueix el número mínim: ").trim());
    max= parseInt(prompt("Introdueix el número màxim: ").trim());
}

//Demanem el número máxim d' intents i ens assegurem que sigui correcte
let maxIntents= parseInt(prompt("En quants intents ho vols fer?: ").trim());
while (isNaN(maxIntents) || maxIntents<1){
    
    maxIntents= parseInt(prompt("En quants intents ho vols fer?: ").trim());
}
//Definim una variable que compti els intents i definim un numero entre minim i maxim que hem de buscar
let intents = 0;
const NUMERO = Math.floor(Math.random()*(max-min+1)+min);

let num; //num=NUMERO+1;

for (let i=0;i<maxIntents;i++){ // || num!=NUMERO
    num= parseInt(prompt("Introdueix un número entre "+min+" i "+max + ": ").trim());
    while (isNaN(num) || num<min || num>max){
        alert("Ha de ser un NÚMERO entre "+min+" i "+max+" !!!");
        num= parseInt(prompt("Introdueix un número entre "+min+" i "+max + ": ").trim());
    }
    intents++;
    if (num>NUMERO) alert("És més petit");
    else if (num<NUMERO) alert ("És més gran");
    else{ //num==NUMERO
        alert("Has encertat en "+intents+" intents" );
        break;
    }
}

if(intents==maxIntents){
    alert("Se t'han acabat els intents\nEra el "+NUMERO);
}



