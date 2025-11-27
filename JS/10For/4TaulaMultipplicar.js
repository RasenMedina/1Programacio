"use strict";
alert("Rasen programador pro");

/*
Fes un programa que generi la taula de multiplicar del número que digui l'usuari.
*/


let num = parseInt(prompt("Introdueix un número positiu: ").trim());
let missatge="";
let resultat;

for (let i=1;i<=10;i++){
    resultat=num*i;
    missatge+= num+" x "+i+" = "+resultat+"\n"; 
}

alert (missatge);

/*
int n = parseInt(prompt("Introdueix un número enter positiu: "));

for (int i = 1; i <= 10; i++) {
    alert(n + " x " + i + " = " + (n * i));
}
*/


