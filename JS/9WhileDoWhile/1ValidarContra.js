"use strict";
alert("Rasen programador pro");

/*
Fes un programa que pregunti repetidament la contrasenya fins que l'usuari posi la correcta o fins que ho hagi intentat 3 vegades.
Finalment ha de mostrar un missatge indicant si l'ha encertat o si s'han acabat els intents.

Utilitza una constant per guardar la contrasenya correcta.

Opcionalment pots indicar quants intents queden.
*/

const CONTRA_CORRECTA = "1234";
let intent = 3;
let contrasenya = prompt("Introdueix una contrasenya personal: ");  

/*do {
    contrasenya = prompt("Introdueix una contrasenya personal: ");
    intent--;
    if (contrasenya!=CONTRA_CORRECTA){
        alert("Contrasenya incorrecta\n") 
        if(intent==0){
            alert("No et queden més intents");
        }
        else alert ("Et queden " + intent + " intents");
    }
    else alert("Contrasenya correcta!!!");

    alert ("Contra correcta: " + CONTRA_CORRECTA + ". Contra introduïda: "+contrasenya);

} while ((contrasenya=!CONTRA_CORRECTA) && (intent>0));
*/

while (intent>0){
    if (contrasenya!=CONTRA_CORRECTA){
        alert("Contrasenya incorrecta\n"); 
        intent--;
        if(intent==0){
            alert("No et queden més intents");
        }
        else{ 
            alert ("Et queden " + intent + " intents");
            contrasenya = prompt("Introdueix una contrasenya personal: ");
        }
    }
    else {
        alert("Contrasenya correcta!!!");
        break;
    }
}
/*
const CONTRASENYA = "4321";
let resposta;
let intents = 3;

resposta = prompt("Introdueix la contrasenya");
--intents;

while (resposta != CONTRASENYA && intents > 0) {
    alert("Contrasenya incorrecta. Et queden " + intents + " intents.");
    resposta = prompt("Introdueix la contrasenya");
    --intents;
    //if (intents==0) break;
}

if (resposta == CONTRASENYA) {
    alert("Contrasenya correcta!");
} else {
    alert("Contrasenya incorrecta. No et queden més intents.");
}
*/