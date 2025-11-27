"use strict";
alert("Rasen programador pro");

/*
L'ordinador ha de pensar un número entre 1 i 100 (tots dos inclosos) i ha de preguntar repetidament a l'usuari quin número és fins que aquest l'endevini.

Si l'usuari no l'encerta, el programa ha d'indicar si el número és més gran o més petit.
Quan l'encerti, el programa ha de dir en quants intents ho ha aconseguit.
*/

const NUMERO = 21;
let num = 0;
let intents = 0;

while (num != NUMERO) {
    num = parseInt(prompt("Introdueix un número entre 1 i 100").trim());
    ++intents;
    if (num>NUMERO){
        alert("És més petit");
    }
    else if (num<NUMERO){
        alert("És més gran");
    }
}
if (intents==1){
    alert("Has encertat en " + intents + " intent");
}
else{
    alert("Has encertat en " + intents + " intents");
}

/*
let num, resposta, intents = 0;

num = (int)(Math.random() * 100 + 1);
do {
    resposta = parseInt(prompt("Introdueix un número entre 1 i 100"));

    ++intents;

    if (num > resposta) {
        alert("És més gran");
    } else if (num < resposta) {
        alert("És més petit");
    }
} while (resposta != num);

alert("Has encertat en " + intents + " intents");





*/


