"use strict";
alert("Rasen programador pro");

/*
Per protegir els servidors que hi ha en una sala, has de fer un programa que faci saltar una alarma si la temperatura o la humitat no estan dins del marge adequat per treballar.
Les temperatures correctes estan entre 5 i 25 graus, i la humitat, entre 40 i 80%.
El programa hauria de rebre les dades d'uns sensors, però per fer les proves les introduirem a mà.
Igualment, en lloc d'activar l'alarma, farem que mostri un missatge.
*/

const TEMP_MIN= 5;
const TEMP_MAX = 25;
const HUM_MIN = 40;
const HUM_MAX = 80;

let temperatura = parseFloat(prompt("Introdueix temperatura (0-40): "));
let humitat = parseFloat(prompt("Introdueix humitat (20-99): "));

if ((temperatura<TEMP_MIN && temperatura>TEMP_MAX) || (humitat<HUM_MIN && humitat>HUM_MAX)) { 
    alert ("ALERTA!! Temperatura o humitat fora dels marges adequats"); 
}
else { //si la humitat i la temperatura estan bé
    alert ("La temperatura introduïda és: "+temperatura +" y la humitat introduïda és: " + humitat);
}
